import { useCarritoContext } from "../../Context/CarritoContext";

export const CardCart = ({item}) => {

    const {removeItem} = useCarritoContext()

    return (
        <div className='card card-carrito mb-2 rounded'>
            <div className="row g-0">
                <div className="col-md-4 div-img-carrito">
                    <img src={item.imagenCard} className="rounded" alt={`imagen de producto ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text m-0">Cantidad: {item.cant}</p>
                        <p className="card-text m-0">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text m-0">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <button onClick={() => removeItem(item.id)} className='btn btn-danger rounded-pill'>Eliminar producto del carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};