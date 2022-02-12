import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../views/web/Home";
import Detail from "../views/web/Detail";
import SlideShow from "../views/web/SlideShow";

export default class Router extends React.Component {
    render(){
        return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route exact path='/detail' element={<Detail/>} ></Route>
                <Route exact path='/about' element={<Detail/>} ></Route>
                <Route exact path='/slide' element={<SlideShow/>} ></Route>
            </Routes>
        )
    }
}