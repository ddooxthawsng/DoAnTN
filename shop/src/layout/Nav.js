import React from "react";
import Home from "../views/web/Home";
import {Link, NavLink} from 'react-router-dom';
import {Menu} from "antd";
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
    onTitleClick = (data) => {
        window.location.href = data
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">Trang chủ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Menu className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" mode='vertical' style={{backgroundColor:'transparent'}}>
                            <Menu.Item key="home" className="nav-item">
                                <Link  to="/">Trang chủ</Link>
                            </Menu.Item>
                            <SubMenu key="SubMenu" title="Danh sách sản phẩm" href="/detail">
                                <Menu.ItemGroup>
                                    <SubMenu key="a" title="Áo" onTitleClick={()=>this.onTitleClick("/detail")}>
                                        <Menu.ItemGroup>
                                            <Menu.Item key="a1"><Link to="/detail">Áo</Link></Menu.Item>
                                            <Menu.Item key="a2"><Link to="/detail">Quần</Link></Menu.Item>
                                            <Menu.Item key="a3"><Link to="/detail">Set</Link></Menu.Item>
                                            <Menu.Item key="a4"><Link to="/detail">Phụ kiện</Link></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    <SubMenu key="b" title="Quần"><Link to="/detail">Áo</Link>
                                        <Menu.ItemGroup>
                                            <Menu.Item key="b1"><Link to="/detail">Áo</Link></Menu.Item>
                                            <Menu.Item key="b2"><Link to="/detail">Quần</Link></Menu.Item>
                                            <Menu.Item key="b3"><Link to="/detail">Set</Link></Menu.Item>
                                            <Menu.Item key="b4"><Link to="/detail">Phụ kiện</Link></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu><SubMenu key="c" title="Set"><Link to="/detail">Áo</Link>
                                    <Menu.ItemGroup>
                                        <Menu.Item key="c1"><Link to="/detail">Áo</Link></Menu.Item>
                                        <Menu.Item key="c2"><Link to="/detail">Quần</Link></Menu.Item>
                                        <Menu.Item key="c3"><Link to="/detail">Set</Link></Menu.Item>
                                        <Menu.Item key="c4"><Link to="/detail">Phụ kiện</Link></Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu><SubMenu key="d" title="Phụ kiện"><Link to="/detail">Áo</Link>
                                    <Menu.ItemGroup>
                                        <Menu.Item key="d1"><Link to="/detail">Áo</Link></Menu.Item>
                                        <Menu.Item key="d2"><Link to="/detail">Quần</Link></Menu.Item>
                                        <Menu.Item key="d3"><Link to="/detail">Set</Link></Menu.Item>
                                        <Menu.Item key="d4"><Link to="/detail">Phụ kiện</Link></Menu.Item>
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
                            <Menu.Item key="g" >
                                <Link to="/slide">Demo slide</Link>
                            </Menu.Item >
                        </Menu>
                        {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">*/}
                        {/*    */}
                        {/*    <li className="nav-item"><Link className="nav-link" to="/">Trang chủ</Link></li>*/}
                        {/*    <li className="nav-item"><Link className="nav-link" to="/detail">Chi Tiết</Link></li>*/}
                        {/*    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>*/}
                        {/*    <li className="nav-item dropdown">*/}
                        {/*        <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button"*/}
                        {/*           data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>*/}
                        {/*        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*            <li><Link className="dropdown-item" to="#!">All Products</Link></li>*/}
                        {/*            <li>*/}
                        {/*                <hr className="dropdown-divider"/>*/}
                        {/*            </li>*/}
                        {/*            <li><Link className="dropdown-item" to="#!">Popular Items</Link></li>*/}
                        {/*            <li><Link className="dropdown-item" to="#!">New Arrivals</Link></li>*/}
                        {/*        </ul>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
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