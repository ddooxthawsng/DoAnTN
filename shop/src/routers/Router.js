import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../views/web/Home";
import Detail from "../views/web/Detail";
import ProductList from "../views/web/ProductList";
import Cart from "../views/web/Cart";
export default class Router extends React.Component {
    render(){
        return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route exact path='/detail' element={<Detail/>} ></Route>
                <Route exact path='/about' element={<Detail/>} ></Route>
                <Route exact path='/listDetail' element={<ProductList/>} ></Route>
                <Route exact path='/cart' element={<Cart/>} ></Route>
            </Routes>
        )
    }
}