import { useState } from "react";

export function useAccordion(initialState = false){
    const [isOpen, setIsOpen] = useState(initialState); //Busca si el estado es abierto o cerrado

    const toggle = () => setIsOpen(prev => !prev); //Funcion para cambiar el estado toggle

    //Fuciones para forzar estados
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false)

    return {isOpen, toggle, open, close}
}