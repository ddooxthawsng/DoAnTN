import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./views/web/Home";
import Detail from "./views/web/Detail";
import ProductList from "./views/web/ProductList";
import Cart from "./views/web/Cart";
import AdminHome from "./views/admin/AdminHome";
import Login from "./views/admin/Login"
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";
import SanPham from "./views/admin/SanPham";

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/admin' element={<PrivateLayout/>}>
                        <Route exact path='/admin' element={<AdminHome/>}/>
                        <Route exact path='/admin/login' element={<Login/>}/>
                        <Route exact path='/admin/sanpham' element={<SanPham/>}/>
                    </Route>
                    <Route path ="/" element={<PublicLayout/>}>
                        <Route exact path='/' element={<Home/>} ></Route>
                        <Route exact path='/detail' element={<Detail/>} ></Route>
                        <Route exact path='/about' element={<Detail/>} ></Route>
                        <Route exact path='/listDetail' element={<ProductList/>} ></Route>
                        <Route exact path='/cart' element={<Cart/>} ></Route>
                    </Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
