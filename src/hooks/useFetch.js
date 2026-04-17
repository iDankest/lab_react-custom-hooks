import { useState, useEffect } from "react";
import axios, { Axios } from "axios"; // Axios es un intermediario como el repartidor de Amazon

export function useFetch(url){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); //Cuando empezamos la carga
                const responsive = await axios.get(url)
                setData(responsive.data) //Guarda los datos en data
            } catch (error) {
                setError(error) //Se guarda el error 
            }finally{
                setLoading(false)
            }
        };
        fetchData();
    }, [url]); //Si llega a cambiar la url la vuelve a pedir el hook
    return {data , loading , error}
}