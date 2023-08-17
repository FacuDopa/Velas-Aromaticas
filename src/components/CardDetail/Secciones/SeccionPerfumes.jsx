import { useEffect, useState } from "react";

export const SeccionPerfumes = ({item}) => {

    const esencias = ['esencia', 'esencia1', 'esencia2', 'esencia3', 'esencia4'];

    const [muestra, setMuestra] =  useState()   

    useEffect(() => {
        if (item.esencia !== undefined) {
            setMuestra(true)
        }else{
            setMuestra(false)
        }
    })

    return (

        <div className={`${muestra ? "" : "d-none"}`}>
            <button className="btn btn-primary boton-esencia" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Perfumes/Esencias
            </button>
            <div className="collapse" id="collapseExample">
                {esencias.map((esencia, index) => (
                    <div key={index} className="card card-body esencias p-0 pt-3">
                        <p className="p-0 m-0">
                            {item[esencia]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};