// export const CardDetail = ({item}) => {
//     return (
//         <div className="card mb-3">
//             <img src={item.imagenCard} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{item.nombre}</h5>
//                 <p className="card-text">{item.descripcion}</p>
//             </div>
//             <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//                 Button with data-bs-target
//             </button>

//             <div className="collapse" id="collapseExample">
//                 <div className="card card-body">
//                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
//                 </div>
//                 <div className="card card-body">
//                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
//                 </div>
//                 <div className="card card-body">
//                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
//                 </div>
//             </div>
//         </div>
//     );
// };

import { SeccionBody } from "./Secciones/SeccionBody";

export const CardDetail = ({item}) => {
    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagenCard} className="img-fluid rounded-start" alt={item.nombre} />
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