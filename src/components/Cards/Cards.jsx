import { Link } from "react-router-dom";

export const Cards = ({item}) => {

    return (
        <>
            <div className="card">
                <div className="contenedor-imagen mt-2">
                    <img src={item.imagenCard} className="card-img-top imagen-card" alt={item.nombre} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center fw-semibold">{item.nombre}</h5>
                    <p className="card-text text-center">{item.descripcion}</p>
                </div>
                <div className="contenedor-precio-stock">
                    <p>
                        $ {new Intl.NumberFormat('de-DE').format(item.precio)}
                    </p>
                    {item.stock <= 0
                        ?
                        <p className="text-danger">
                            Sin Stock   
                        </p>
                        :
                        <p>
                            Stock: {item.stock}
                        </p>
                    }
                </div>
                <div className="contenedor-boton-cards">
                    <Link className="nav-link" to={`/producto/${item.id}`}><button className='btn btn-primary btn-outline-secondary rounded-pill'>Ver Producto</button></Link>
                </div>
            </div>
        </>
    );
};