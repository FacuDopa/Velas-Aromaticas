import { Link } from "react-router-dom";
import { useCarritoContext} from "../../Context/CarritoContext";
import { useEffect, useState } from "react";

export const CartWidget = () => {

    const cart = <i className="bi bi-cart cart-i"></i>
    const cartCheck = <i className="bi bi-cart-check cart-i"></i>

    const {getItemQuantity} = useCarritoContext()
    const [ItemCarrito , setItemCarrito] = useState([cart])

    return (
        <Link className="nav-link" to={'/Carrito'}>

            <div
                onMouseOver={() => {setItemCarrito(cartCheck)}}
                onMouseLeave={() => {setItemCarrito(cart)}}
            >
                {ItemCarrito}
            </div>

            {getItemQuantity() > 0 && <span>{getItemQuantity()}</span>}
        </Link>
    );
};