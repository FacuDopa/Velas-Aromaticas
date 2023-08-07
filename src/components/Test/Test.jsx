import { useEffect, useState } from "react";
import { getOrdenC } from "../../firebase/firebase";
import { Test2 } from "./Test2";
import { BarraBusqueda } from "../BarraBusqueda/BarraBusqueda";

export const Test = () => {
    const [ordenCompra, setOrdenCompra] = useState([])
    const [busqueda, setBusqueda] = useState("")

    function serchingTerm(term){
        return function(x){
            return x.nombre.toLowerCase().toString().includes(term) || !term;
        }
    }

    useEffect(()=> {
        console.log('entro');
        getOrdenC()
        .then ( i => {
            // const filtro = i.filter( prod => prod.id === 'Cbfol19Gs0D8gtGskfpr')
            const filtro = i.filter(serchingTerm(busqueda.toLowerCase()))
            const mapeado = filtro.map(prod => <Test2 items={prod} key={i.nombre}/>)
            // setOrdenCompra(filtro)
            // console.log(filtro.Objet.estado);
            setOrdenCompra(mapeado)
            console.log(mapeado);
        })
    },[setBusqueda])

    // const OC = () => {
    //     console.log('entro');
    //     getOrdenC()
    //     .then ( i => {
    //         // const filtro = i.filter( prod => prod.id === 'Cbfol19Gs0D8gtGskfpr')
    //         const filtro = i.filter(serchingTerm(busqueda.toLowerCase()))
    //         const mapeado = filtro.map(prod => <Test2 items={prod} key={i.nombre}/>)
    //         // setOrdenCompra(filtro)
    //         // console.log(filtro.Objet.estado);
    //         setOrdenCompra(mapeado)
    //         console.log(mapeado);
    //     })
    // }

    return (
        <>
            <BarraBusqueda Categoria={""} busq={busqueda} setBusq={setBusqueda}/>
            {/* <button onClick={() => OC()}>Orden Compra</button> */}
            {ordenCompra}
        </>
    );
};