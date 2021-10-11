import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoMtodo.png";
import "./login.css";

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // setmarket({ ...market, [e.target.name]: e.target.value });
    };

    return (
        <div className="">
            <div className="col-md-6 offset-md-3 mt-4 d-flex flex-column ">
                <img className="logo-login mb-4" src={logo} alt="LOGO" />
                <div className="market">
                    <div className="market-body">
                        <form
                            onSubmit={handleSubmit}
                            className=" p-3 text-center"
                        >
                            <div className="form-group mb-1">
                                <label
                                    className="text-white mb-2 float-start"
                                    htmlFor="category"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="category"
                                    placeholder=""
                                    className="input-position form-control mb-2 rounded-pill float-start"
                                    // value={market.category}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label
                                    className="text-white mb-2 float-start"
                                    htmlFor="category"
                                >
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    name="provider"
                                    placeholder=""
                                    className="form-control mb-2 rounded-pill "
                                    // value={market.provider}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label
                                    className="text-white mb-2 float-start"
                                    htmlFor="cargo"
                                >
                                    Cargo:
                                </label>
                                <select
                                    name="cargo"
                                    id="cargo"
                                    className="select-position mb-2 w-100 py-2 px-3 rounded-pill"
                                    // value={}
                                    onChange={handleInputChange}
                                >
                                    <option value="1">Administrador</option>
                                    <option value="2">Empleado</option>
                                </select>
                            </div>

                            <Link
                                to="/market"
                                className="btn btn-enter text-white rounded-pill px-5 "
                            >
                                ENTRAR
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
