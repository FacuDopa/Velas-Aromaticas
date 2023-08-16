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
            <h5 className="card-title titulo-card">{item.nombre}</h5>
            <p className="card-text desc-card">{item.descripcion}</p>
            <SeccionPerfumes item={item}/>
            {item.stock === 0
                ?
                    <div className="d-flex justify-content-center">
                        <p className="sin-stock">
                            Sin Stock   
                        </p>
                    </div>
                :
                <>
                    <div className="contenedor-precio-stock-detail mt-3">
                        <div>
                            Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}
                        </div>
                        <div>
                            Stock: {item.stock}
                        </div>
                    </div>            
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                </>
            }
            <div className="ms-2">
                <Link className="me-1" to={'/Carrito'}><button className="btn btn-outline-light m-0 mt-2 rounded-pill btn-finalizar-C">Finalizar Compra</button></Link>
                <Link to={'/'}><button className="btn btn-outline-light m-0 mt-2 rounded-pill btn-seguir-C">Seguir Comprando</button></Link>
            </div>
        </>
    );
};