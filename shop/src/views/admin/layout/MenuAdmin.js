import React, { Component } from 'react';
import {Menu} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { SubMenu } = Menu;
class MenuAdmin extends Component {
    constructor(props) {
        super(props);}
    render() {

        return (
            <div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="home" className="nav-item">
                        <Link  to="/">Trang chủ</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" title="Danh sách sản phẩm">
                        <Menu.ItemGroup>
                            <Menu.Item key="z"><Link to="/admin/listDetail">Toàn bộ sản phẩm</Link></Menu.Item>
                            <SubMenu key="a" title="Áo">
                                <Menu.ItemGroup>
                                    <Menu.Item key="a0"><Link to="/admin/detail">Toàn bộ Áo</Link></Menu.Item>
                                    <Menu.Item key="a1"><Link to="/admin/detail">Áo nỉ</Link></Menu.Item>
                                    <Menu.Item key="a2"><Link to="/admin/detail">Áo tanktop</Link></Menu.Item>
                                    <Menu.Item key="a3"><Link to="/admin/detail">Áo khoác</Link></Menu.Item>
                                    <Menu.Item key="a4"><Link to="/admin/detail">Áo polo</Link></Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="b" title="Quần">
                                <Menu.ItemGroup>
                                    <Menu.Item key="b0"><Link to="/admin/detail">Toàn bộ Quần</Link></Menu.Item>
                                    <Menu.Item key="b1"><Link to="/admin/detail">Quần short</Link></Menu.Item>
                                    <Menu.Item key="b2"><Link to="/admin/detail">Quần dài</Link></Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key="c"><Link to="/detail">Set</Link></Menu.Item>
                            <SubMenu key="d" title="Phụ kiện">
                                <Menu.ItemGroup>
                                    <Menu.Item key="d0"><Link to="/admin/detail">Toàn bộ phụ kiện</Link></Menu.Item>
                                    <Menu.Item key="d1"><Link to="/admin/detail">Balo</Link></Menu.Item>
                                    <Menu.Item key="d2"><Link to="/admin/detail">Túi</Link></Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="e" >
                        <Link to="/admin/detail">Quản lý danh mục</Link>
                    </Menu.Item >
                    <Menu.Item key="f" >
                        <Link to="/admin/detail">Quản lý Đơn hàng</Link>
                    </Menu.Item >
                    <Menu.Item key="g" >
                        <Link to="/admin/detail">Quản lý Chi tiết đơn hàng</Link>
                    </Menu.Item >
                    <Menu.Item key="g" >
                        <Link to="/admin/detail">Quản lý Tài Khoản</Link>
                    </Menu.Item >
                </Menu>
            </div>
        );
    }
}

export default MenuAdmin;