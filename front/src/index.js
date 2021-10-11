import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components:
import ListMarket from "./components/market/ListMarket";
import MenuNavbar from "./components/navbar/MenuNavbar";
import MarketForm from "./components/market/MarketForm";
import Login from "./components/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <MenuNavbar />
        <div className="container my-2">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/market" component={ListMarket} />
                <Route path="/form" component={MarketForm} />
                <Route path="/updateProduct/:id" component={MarketForm} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
