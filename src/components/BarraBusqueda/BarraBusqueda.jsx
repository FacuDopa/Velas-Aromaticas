export const BarraBusqueda = ({Categoria, busq, setBusq}) => {
    return (
        <div className={`row ${Categoria ? 'd-none' : 'd-flex'} m-0`}>
            <form className="d-flex" role="search">
                <input 
                    className="form-control me-2" 
                    value={busq} 
                    type="search" 
                    placeholder="Busqueda por nombre" 
                    aria-label="Search"
                    onChange={e => setBusq(e.target.value)}
                />
                <button className="btn btn-outline-success">Search</button>
            </form>
        </div>
    );
};