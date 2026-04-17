import { useState, useEffect } from "react";
import axios, { Axios } from "axios"; // Axios es un intermediario como el repartidor de Amazon

export function useFetch(url){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true); //Cuando empezamos la carga
                const responsive = await axios.get(url, { signal : controller.signal});
                setData(responsive.data) //Guarda los datos en data
            } catch (error) {
                if(axios.isCancel(error)) console.log('Cancelada', error.message)
                setError(error) //Se guarda el error 
            }finally{
                setLoading(false)
            }
        };
        fetchData();
        return () =>{
            controller.abort();
        }
    }, [url]); //Si llega a cambiar la url la vuelve a pedir el hook
    return {data , loading , error}
}