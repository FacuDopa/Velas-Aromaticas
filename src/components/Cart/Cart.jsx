import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";
import { CardList } from "../CardList/CardList";

export const Cart = () => {

    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    return (
        <>
            { carrito.length === 0
                ?
                    <div className="div-carrito-vacio">
                        <h2>Carrito sin productos</h2>
                        <p>Primero debes agregar productos al carrito</p>
                        <Link className='nav-link' to={'/'}><button className='btn-carrito-vacio btn btn-primary mx-2 rounded-pill'>Continuar Comprando</button></Link>
                    </div>
                :
                    <div className="container cart-container">
                        {<CardList products={carrito}/>}
                            <p className="fs-3 my-4 border border-dark rounded p-2 text-center fw-bold" style={{maxWidth: '540px'}}>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <div className="div-button">
                            <button className='btn btn-danger mx-2 rounded-pill' onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={'/'}><button className='btn btn-primary mx-2 rounded-pill'>Continuar Comprando</button></Link>
                            <Link className="nav-link" to={'/checkout'}><button className='btn btn-primary mx-2 rounded-pill'>Finalizar Compra</button></Link>
                        </div>
                    </div>
            }
        </>
    );
};