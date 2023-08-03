//React
import React from "react";

// React / React-Dom
import { useState } from "react";
import { Link, useNavigate,} from "react-router-dom";

// Context
import { useCarritoContext } from "../../Context/CarritoContext";

//FireBase
import { createOrdenCompra, getProduct, uptadeProduct } from "../../firebase/firebase";


export const CheckOut = () => {

    const {carrito, emptyCart, totalPrice} = useCarritoContext()

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [error, setError] = useState('')

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value)
        setError('')
    }
    
    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value)
        setError('')
    }

    const consultarForm = (e) => {
        e.preventDefault()
        const dataForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(dataForm)
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id)
            .then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                uptadeProduct(prodCarrito.id, prodBDD)
            })
        })

        if (inputValue1 === inputValue2) {

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString())
            .then(ordenCompra => {
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }else{
            setInputValue2('')
            setError('Los Emails no coinciden')
        }

    }

    return (
        <>
            {carrito.length === 0 
            ? 
            <>  
                <div className="div-carrito-vacio">
                        <h2>Primero debes agregar al menos 1 producto al carrito</h2>
                        <p>Primero debes agregar productos al carrito</p>
                        <Link className='nav-link' to={'/'}><button className={`btn btn-primary mx-2 rounded-pill`}>Continuar Comprando</button></Link>    
                </div>
            </>
            : 
            <div className="container" style={{marginTop:"20px"}}>
            <form onSubmit={consultarForm} ref={datosFormulario}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="nombre" required/>
            </div>
                <div className="mb-3">
                <label htmlFor="email"  className="form-label">Email</label>
                <input type="email" value={inputValue1} onChange={handleInputChange1} className="form-control" name="email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                <input type="email" value={inputValue2} onChange={handleInputChange2} className="form-control" name="repEmail" required/>
                { error && <p style={{color: 'red'}}>Los emails no coinciden, Intente nuevamente</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                <input type="number" className="form-control" name="celular" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion" required/>
            </div>

            <button type="submit" className="btn btn-primary">Finalizar Compra</button>

            </form>
        </div>
        }
        </>
    );
};