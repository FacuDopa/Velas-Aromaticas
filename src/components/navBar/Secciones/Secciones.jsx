import { Link } from "react-router-dom";
import { Categorias } from "../Categorias/Categorias";

export const Secciones = () => {
    return (
        <>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item d-flex">
                    <Link className="nav-link item-nav" to={'/'}>Catalogo</Link>
                </li>
                <Categorias/>
            </ul>
        </div>
        </>
    );
};