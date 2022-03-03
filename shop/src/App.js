import './App.css';
import {BrowserRouter, Route, Routes, withRouter} from 'react-router-dom';
import Home from "./views/web/Home";
import Detail from "./views/web/Detail";
import ProductList from "./views/web/ProductList";
import Cart from "./views/web/Cart";
import AdminHome from "./views/admin/AdminHome";
import Login from "./views/admin/Login"
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";
import SanPham from "./views/admin/SanPham";
import TaiKhoan from "./views/admin/TaiKhoan";

function App() {
    const Child = ({ match }) => (
        console.log(match)
    )
  return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route path='/admin' element={<PrivateLayout/>}>
                        <Route exact path='/admin' element={<AdminHome/>}/>
                        <Route exact path='/admin/sanpham' element={<SanPham/>}/>
                        <Route exact path='/admin/danhmuc' element={<SanPham/>}/>
                        <Route exact path='/admin/donhang' element={<SanPham/>}/>
                        <Route exact path='/admin/chitietdonhang' element={<SanPham/>}/>
                        <Route exact path='/admin/taikhoan' element={<TaiKhoan/>}/>
                    </Route>
                    <Route path ="/" element={<PublicLayout/>}>
                        <Route exact path='/' element={<Home/>} ></Route>
                        <Route exact path='/detail' element={<Detail/>} >
                            <Route path=":id" element={<Detail/>}></Route>
                        </Route>
                        <Route exact path='/about' element={<Home/>} ></Route>
                        <Route exact path='/listDetail' element={<ProductList/>} ></Route>
                        <Route exact path='/cart' element={<Cart/>} ></Route>
                        {Child}
                    </Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default withRouter(App);
