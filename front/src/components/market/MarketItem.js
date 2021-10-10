import React from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import * as CompanyServer from "./MarketServer";

const MarketItem = ({
    id,
    description,
    category,
    amount,
    provider,
    date,
    listProducts,
}) => {
    const history = useHistory();

    const handleDelete = async (id) => {
        await CompanyServer.deleteProduct(id);
        listProducts();
    };

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{provider}</td>
            <td>{date}</td>
            <a
                href="#"
                className="text-danger"
                onClick={() => id && handleDelete(id)}
            >
                <i className="fa-solid fa-delete-left"></i>
            </a>
            <button
                className="btn btn-sm btn-info "
                onClick={() => history.push(`/updateProduct/${id}`)}
            >
                <i className="fa-solid fa-pen-to-square text-info"></i>
            </button>
        </tr>
    );
};

export default MarketItem;
