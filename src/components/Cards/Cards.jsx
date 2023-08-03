import { Link } from "react-router-dom";

export const Cards = ({item}) => {

    return (
        <>
            <div className="card" style={{width: '18rem', margin: '10px'} }>
                <img src={item.imagenCard} className="card-img-top rounded" alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}</p>

                    {/* <ul className="list-group list-group-flush border">
                        <li className="list-group-item">{item.esencia}</li>
                        <li className="list-group-item">{item.esencia1}</li>
                        <li className="list-group-item">{item.esencia2}</li>
                        <li className="list-group-item">{item.esencia3}</li>
                    </ul> */}
                </div>
                <div className="precio-cards">
                    <div>
                        {item.stock === 0
                            ?
                            <p className="text-danger">
                                Sin Stock   
                            </p>
                            :

                            <div style={{display: 'flex', }}>
                                <div style={{width: '50%'}}>
                                    $ {new Intl.NumberFormat('de-DE').format(item.precio)}
                                </div>
                                <div style={{width: '50%'}}>
                                    Stock: {item.stock}
                                </div>
                            </div>
                            
                        }
                    </div>
                </div>
                <div className="div-boton-cards">
                    <Link className="nav-link" to={`/producto/${item.id}`}><button className='btn btn-primary btn-outline-secondary rounded-pill'>Ver Producto</button></Link>
                </div>
            </div>
            {/* <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imagenCard} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            
                            <ul className="list-group list-group-flush border">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                        <div className="precio-cards">
                            <div>
                                {item.stock === 0
                                    ?
                                    <p className="text-danger">
                                        Sin Stock   
                                    </p>
                                    :
                                    <p>
                                    $ {new Intl.NumberFormat('de-DE').format(item.precio)}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};