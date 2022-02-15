import React from "react";
import { Menu } from 'antd';;

const { SubMenu } = Menu;

class SideBar extends React.Component{
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return(
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"

            >
                <SubMenu key="sub0" title="Danh sách sản phẩm">
                    <Menu.Item key="z">Toàn bộ sản phẩm</Menu.Item>
                <SubMenu key="sub1" title="Áo" icon={<span className={"pi pi-angle-right"}></span>}>
                    <Menu.Item key="1">Áo Nỉ</Menu.Item>
                    <Menu.Item key="3">Áo TankTop</Menu.Item>
                    <Menu.Item key="4">Áo Polo</Menu.Item>
                    <Menu.Item key="5">Áo Sweater</Menu.Item>
                    <Menu.Item key="6">Áo Phông</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Quần" icon={<span className={"pi pi-angle-right"}></span>}>
                    <Menu.Item key="7">Quần Jean</Menu.Item>
                    <Menu.Item key="8">Quần Short</Menu.Item>
                    <Menu.Item key="9">Quần Kaki</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Phụ kiện" icon={<span className={"pi pi-angle-right"}></span>}>
                    <Menu.Item key="10">Balo</Menu.Item>
                    <Menu.Item key="11">Túi</Menu.Item>
                    <Menu.Item key="12">Thắt lưng</Menu.Item>
                </SubMenu>
                    <Menu.Item key="13">Set bộ</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
export default SideBar;