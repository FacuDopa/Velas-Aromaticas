export const SeccionPerfumes = ({item}) => {

    const esencias = ['esencia', 'esencia1', 'esencia2', 'esencia3'];

    return (

        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Perfumes/Esencias
            </button>
            <div className="collapse" id="collapseExample">
                {esencias.map((esencia, index) => (
                    <div key={index} className="card card-body">
                        {item[esencia]}
                    </div>
                ))}
            </div>
        
        </>

    );
};