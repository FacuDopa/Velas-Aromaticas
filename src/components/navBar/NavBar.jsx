import { Link } from "react-router-dom";
import { Secciones } from "./Secciones/Secciones";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {

    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex" to={'/'}>
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/Logo/Logo.jpg'} 
                            alt="Logo" 
                            className="d-inline-block align-text-top" 
                            width={45} 
                            height={45}
                        />
                        <div>
                            <p className="ms-2 mb-0 item-nav text-icon">Velas Aromaticas</p>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Secciones/>
                    <CartWidget/>
                </div>
            </nav>
        </header>
        </>
    );
};