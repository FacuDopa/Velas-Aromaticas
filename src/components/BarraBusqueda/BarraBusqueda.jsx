export const BarraBusqueda = ({Categoria, busq, setBusq}) => {
    return (
        <div className={`${Categoria ? 'd-none' : 'barra-busqueda'}`}>
            <form className="d-flex" role="search">
                <input 
                    className="form-control me-2" 
                    value={busq} 
                    type="search" 
                    placeholder="Busqueda por nombre" 
                    aria-label="Search"
                    onChange={e => setBusq(e.target.value)}
                />
            </form>
        </div>
    );
};