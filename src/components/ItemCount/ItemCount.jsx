import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = ({valInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(valInicial)
    const [contador2, setContador2] = useState([])
    const [variable, setVariable] = useState(false)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success(`Agregaste ${contador} productos al carrito!` , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        setVariable(true)

    }

    useEffect(()=>{
        setVariable(false)
    }, [contador])

    return (
        <>  
            <button className='btn btn-primary me-3 rounded-pill' onClick={() => restar()}>-</button>
                {contador}
            <button className='btn btn-primary ms-3 rounded-pill' onClick={() => sumar()}>+</button>
            <button className={`btn btn-success mt-2 container rounded-pill ${stock === 0 && 'disabled'} ${variable && 'disabled'}`} onClick={() => agregarCarrito()}>Agregar Producto al Carrito</button>
        </> 
    );
};