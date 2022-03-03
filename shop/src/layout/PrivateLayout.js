import React from "react";
import {Outlet} from "react-router-dom";
// import "primereact/resources/themes/md-dark-indigo/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";
// import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import MenuAdmin from "../views/admin/layout/MenuAdmin";
import HeaderAdmin from "../views/admin/layout/HeaderAdmin";
import {Image} from "primereact/image";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class PrivateLayout extends React.Component{
    constructor() {
        super();
    }
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <MenuAdmin/>
                </Sider>
                <Layout className="site-layout">
                    <HeaderAdmin/>
                    <hr style={{margin:"0px"}}/>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <Outlet/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Đỗ Thắng - 2022</Footer>
                </Layout>
            </Layout>

        );
    }
}
export default PrivateLayout;
