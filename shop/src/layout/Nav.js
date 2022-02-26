import React from "react";
import Home from "../views/web/Home";
import {Link, Redirect, Route, Router, Switch} from 'react-router-dom';
import {Menu} from "antd";
import {Navigate, useLocation, useNavigate} from 'react-router'
import {InputText} from "primereact/inputtext";
import {Image} from "primereact/image";

const { SubMenu } = Menu;

class Nav extends React.Component{
    constructor() {
        super();
        this.state = ({
                current: 'mail'
        })
    }
    handleClick = e => {
        this.setState({ current: e.key });
    };
    render() {
        return(
            <nav className="navbar navbar-expand-lg" style={{backgroundColor :"white"}}>
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">
                        {/*<Image src={'./images/Logo.jpg'} width="150px" height="75px"/>*/}
                       Clothing
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Menu className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" mode='vertical' style={{backgroundColor:'transparent'}}>
                            <Menu.Item key="home" className="nav-item">
                                <Link  to="/">Trang chủ</Link>
                            </Menu.Item>
                            <SubMenu key="SubMenu" title="Danh sách sản phẩm">
                                <Menu.ItemGroup>
                                    <Menu.Item key="z"><Link to="/listDetail">Toàn bộ sản phẩm</Link></Menu.Item>
                                    <SubMenu key="a" title="Áo">
                                        <Menu.ItemGroup>
                                            <Menu.Item key="a0"><Link to="/detail">Toàn bộ Áo</Link></Menu.Item>
                                            <Menu.Item key="a1"><Link to="/detail">Áo nỉ</Link></Menu.Item>
                                            <Menu.Item key="a2"><Link to="/detail">Áo tanktop</Link></Menu.Item>
                                            <Menu.Item key="a3"><Link to="/detail">Áo khoác</Link></Menu.Item>
                                            <Menu.Item key="a4"><Link to="/detail">Áo polo</Link></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    <SubMenu key="b" title="Quần">
                                        <Menu.ItemGroup>
                                            <Menu.Item key="b0"><Link to="/detail">Toàn bộ Quần</Link></Menu.Item>
                                            <Menu.Item key="b1"><Link to="/detail">Quần short</Link></Menu.Item>
                                            <Menu.Item key="b2"><Link to="/detail">Quần dài</Link></Menu.Item>
                                            </Menu.ItemGroup>
                                    </SubMenu>
                                    <Menu.Item key="c"><Link to="/detail">Set</Link></Menu.Item>
                                    <SubMenu key="d" title="Phụ kiện">
                                    <Menu.ItemGroup>
                                        <Menu.Item key="d0"><Link to="/detail">Toàn bộ phụ kiện</Link></Menu.Item>
                                        <Menu.Item key="d1"><Link to="/detail">Balo</Link></Menu.Item>
                                        <Menu.Item key="d2"><Link to="/detail">Túi</Link></Menu.Item>
                                     </Menu.ItemGroup>
                                </SubMenu>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key="e" >
                                <Link to="/detail">Khuyến mãi</Link>
                            </Menu.Item >
                            <Menu.Item key="f" >
                                <Link to="/detail">Kiến thức</Link>
                            </Menu.Item >
                        </Menu>
                        <div className={"searchItem"} style={{marginRight:"70px"}}>
                           <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})}
                                       placeholder="Tìm kiếm"
                                       className={"p-inputtext-sm block mb-1"}
                            />
                    </span>
                        </div>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                <Link to="/cart">Giỏ hàng</Link>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav