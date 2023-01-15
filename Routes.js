import React from "react";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Rentcar from "../Rentcar/Rentcar";
import { Route,Switch } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Routes = ({productItems}) => {
    return (
        <div>
           <Switch>
            <Route path='/' exact>
                <Products productItems={productItems}/>
            </Route>
            <Route path='/signup' exact>
                <Signup/>
            </Route>
            <Route path="/rentedcars" exact>
                <Rentcar/>
            </Route>
           </Switch>
        </div>
    );
};

export default Routes;