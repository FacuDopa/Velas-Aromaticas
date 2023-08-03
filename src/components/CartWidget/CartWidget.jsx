import { Link } from "react-router-dom";
import { useCarritoContext} from "../../Context/CarritoContext";

export const CartWidget = () => {

    const {getItemQuantity} = useCarritoContext()

    return (
        <Link className="nav-link" to={'/Carrito'}>
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            {getItemQuantity() > 0 && <span>{getItemQuantity()}</span>}
        </Link>
    );
};