import { useEffect, useState } from "react";
import toast , {Toaster} from "react-hot-toast";

export const ItemCount = ({valInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(valInicial)
    const [variable, setVariable] = useState(false)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success(`Agregaste ${contador} productos al carrito!` , {
            position : "top-center",
            style : {
                background: 'lightpink',
                color: 'white'
            }
        })
        setVariable(true)

    }

    useEffect(()=>{
        setVariable(false)
    }, [contador])

    return (
        <>  
            <div className="my-2">
                <button className='btn btn-outline-light me-3 rounded-pill' onClick={() => restar()}>-</button>
                    {contador}
                <button className='btn btn-outline-light ms-3 rounded-pill' onClick={() => sumar()}>+</button>
            </div>
            {stock <= 0 
                ?
                <></>
                :
                <button className={`btn-agregar-carrito btn btn-success mt-2 container rounded-pill ${variable && 'disabled'}`} onClick={() => agregarCarrito()}>Agregar Producto al Carrito</button>

            }
            <Toaster/>
        </> 
    );
};