import { Link } from "react-router-dom";
import { useCarritoContext} from "../../Context/CarritoContext";
import { useEffect, useState } from "react";

export const CartWidget = () => {

    const cart = <i className="bi bi-cart cart-i"></i>
    const cartCheck = <i className="bi bi-cart-x cart-i"></i>
    const cartCheckFill = <i class="bi bi-cart-check-fill cart-i    "></i>

    const {getItemQuantity} = useCarritoContext()
    const [ItemCarrito , setItemCarrito] = useState([cart])

    useEffect( () => {
        if(getItemQuantity() > 0) {
            setItemCarrito(cartCheckFill)
        }else{
            setItemCarrito(cart)
        }
    },[getItemQuantity()])

    return (
        <Link className="nav-link" to={'/Carrito'}>

            <div
                onMouseOver={() => {
                    if(getItemQuantity() <= 0){
                        setItemCarrito(cartCheck)
                    }
                }}
                onMouseLeave={() => {
                    if(getItemQuantity() <= 0) {
                        setItemCarrito(cart)
                    }
                }}
            >
                {getItemQuantity() > 0 && <span className="cantidad-carrito">{getItemQuantity()}</span>}
                {ItemCarrito}
            </div>

        </Link>
    );
};