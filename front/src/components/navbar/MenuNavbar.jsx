import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        SUPERMERCADDO MERCATODO
                    </Link>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option disabled value>
                            Categorías
                        </option>
                        <option value="1">Cárnicos</option>
                        <option value="2">Lácteos y derivados</option>
                        <option value="3">Embutidos</option>
                        <option value="4">Licores y bebidas</option>
                        <option value="5">Granos</option>
                        <option value="6">Enlatados</option>
                        <option value="7">Frutas y verduras</option>
                        <option value="8">Dulcería</option>
                        <option value="9">Elementos de aseo</option>
                        <option value="10">Desinfectantes</option>
                        <option value="11">Aseo personal</option>
                    </select>
                </div>
            </nav>
            <div>
                <Link to="/form">
                    <i className="fas fa-plus"></i>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
