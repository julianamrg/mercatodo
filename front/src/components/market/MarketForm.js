import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import * as MarketServer from "./MarketServer";

const MarketForm = () => {
    const history = useHistory();
    const params = useParams();

    // console.log(params);

    const initialState = {
        description: "",
        category: "",
        amount: 0,
        privider: "",
        date: "",
    };
    const [market, setmarket] = useState(initialState);

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        setmarket({ ...market, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await MarketServer.registerProduct(market);
                const data = await res.json();
                if (data.message === "Success") {
                    setmarket(initialState);
                }
            } else {
                await MarketServer.updateProduct(params.id, market);
            }

            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getProduct = async (idProduct) => {
        try {
            const res = await MarketServer.getProduct(idProduct);
            const data = await res.json();
            const { userId, id, title } = data;
            setmarket({
                description: title,
                category: title,
                amount: userId,
                provider: title,
                date: title,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getProduct(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-6 offset-md-3 mt-3">
            <div className="movie">
                <div className="movie-body">
                    <form onSubmit={handleSubmit} className="bg-secondary p-3">
                        <div className="form-group mb-1">
                            <input
                                type="text"
                                name="description"
                                placeholder="DESCRIPCION"
                                className="form-control"
                                value={market.description}
                                onChange={handleInputChange}
                                autoFocus
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <input
                                type="text"
                                name="amount"
                                placeholder="CANTIDAD"
                                className="form-control"
                                value={market.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-1">
                            <input
                                type="text"
                                name="category"
                                placeholder="CATEGORIA"
                                className="form-control"
                                value={market.category}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-1">
                            <input
                                type="text"
                                name="provider"
                                placeholder="PROVEEDOR"
                                className="form-control"
                                value={market.provider}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-1">
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={market.date}
                                onChange={handleInputChange}
                            />
                        </div>
                        {params.id ? (
                            <button className="btn btn-light mt-2 w-25">
                                ACTUALIZAR
                            </button>
                        ) : (
                            <button className="btn btn-primary mt-2 w-25">
                                AGREGAR
                            </button>
                        )}

                        <button className="btn btn-dark text-white mt-2 w-25 ms-3">
                            VOLVER
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MarketForm;
