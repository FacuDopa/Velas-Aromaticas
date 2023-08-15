import { SeccionBody } from "./Secciones/SeccionBody";

export const CardDetail = ({item}) => {
    return (
        <div className="card mb-3 detail-card container mt-3">
            <div className="row g-0 contenedor">
                <div className="col-md-4 contenedor-imagen-detail">
                    <img src={item.imagenCard} className="img-fluid p-2 " alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <SeccionBody item={item}/>
                    </div>
                </div>
            </div>
        </div>
    );
};