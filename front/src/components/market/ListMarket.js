import React, { useEffect, useState } from "react";

// Components:
import MarketItem from "./MarketItem";

import * as MarketServer from "./MarketServer";

const ListMarket = () => {
    // const getData = async () => {
    //     const response = await fetch(data);
    //     // const text = await response.text();
    //     // const data = await text.json();
    //     console.log(await response.text());
    // };
    // getData();
    const [products, setProducts] = useState([]);

    const listProducts = async () => {
        try {
            const res = await MarketServer.listMarket();
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listProducts();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">DESCRIPCION</th>
                        <th scope="col">CATEGORIA</th>
                        <th scope="col">CANTIDAD</th>
                        <th scope="col">PROVEEDOR</th>
                        <th scope="col">FECHA LLEGADA</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <MarketItem
                            key={product.id}
                            id={product.id}
                            description={product.title}
                            category={product.title}
                            amount={product.userId}
                            provider={product.title}
                            date={product.title}
                            listProducts={listProducts}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListMarket;
