import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/Categoria/Velas'}>Velas</Link></li>
                <li><Link className="dropdown-item" to={'/Categoria/Esencias'}>Escencias</Link></li>
                <li><Link className="dropdown-item" to={'/Categoria/Jabon'}>Jabones</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to={'/Categoria/Accesorios'}>Accesorios</Link></li>
                <li><Link className="dropdown-item" to={'/Categoria/Varios'}>Porta Velas/Sahumerios</Link></li>
            </ul>
        </li>
        </>
    );
};