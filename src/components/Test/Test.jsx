import { useState } from "react";
import { getOrdenC } from "../../firebase/firebase";
import { Test2 } from "./Test2";

export const Test = () => {
    const [ordenCompra, setOrdenCompra] = useState([])

    const OC = () => {
        console.log('entro');
        getOrdenC()
        .then ( i => {
            const filtro = i.filter( prod => prod.id === 'XxmeIdCzsCDEPvKv1qF4')
            const mapeado = filtro.map(prod => <Test2 items={filtro}/>)
            // setOrdenCompra(filtro)
            // console.log(filtro.Objet.estado);
            setOrdenCompra(mapeado)
            console.log(mapeado);
        })
    }

    return (
        <>
            <button onClick={() => OC()}>Orden Compra</button>
            {ordenCompra}
        </>
    );
};