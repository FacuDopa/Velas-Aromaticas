import { useCarritoContext } from "../../../Context/CarritoContext";
import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { SeccionPerfumes } from "./SeccionPerfumes";

export const SeccionBody = ({item}) => {

    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item, cantidad)
    }

    return (
        <>
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            <SeccionPerfumes item={item}/>
            <p>Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
            <Link className="me-1" to={'/Carrito'}><button className="btn btn-primary mt-2 rounded-pill">Finalizar Compra</button></Link>
            <Link className="me-1" to={'/'}><button className="btn btn-primary mt-2 rounded-pill">Seguir Comprando</button></Link>
        </>
    );
};