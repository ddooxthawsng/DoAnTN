import React from "react";
import SideBar from "./SideBar";
import {Breadcrumb, Col, Layout, Row, Slider} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import './css/Detail.css'
import SlideShow from "./SlideShow";
import PageHeaderCommon from "../../layout/PageHeaderCommon";
import {Button} from 'primereact/button'
import SameProduct from "./SameProduct";
import MultipleSlidesExample from "../../layout/MultipleSlidesExample";
import {sanPhamService} from "../../service/sanPhamService";
class Detail extends React.Component{
    constructor() {
        super();
        this.state ={
            SanPham : ""
        }
        this.service = new sanPhamService();
    }
    componentDidMount() {
        console.log("this.props")
        console.log(this.props)
    }
    getData = async ()=>{
        let rs = await this.service.findone();
        if(rs && rs.data && rs.data && rs.data)
            await this.setState({
                products : rs.data
            })
        console.log(rs.data)
    }

    render() {
        const collection = [
            { src: 'images/set1.jpg', caption: "Caption one" },
            { src: 'images/set2.jpg', caption: "Caption 2" },
            { src: 'images/set3.jpg', caption: "Caption 3" }
        ];
        return(
            <Layout style={{backgroundColor:"transparent"}}>
                <Layout>
                    <Sider style={{backgroundColor:"white"}}>
                        <SideBar ></SideBar>
                    </Sider>
                    <Content style={{backgroundColor:"white"}}>
                        <Row>
                            <Col md={12}>
                                <SlideShow input={collection} ratio={`1:1`} mode={`manual`}/>
                            </Col>
                            <Col md={2}></Col>
                            <Col md={10}>
                                <div>
                                    <div className="surface-0">
                                        <div className="col-12 lg:col-4">
                                        <div className="p-3 h-full">
                                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                                <div className="text-900 font-medium text-xl mb-2"><h1><b>Áo thun</b></h1></div>
                                                <div className="text-900 font-medium text-xl mb-2">Mã sản phẩm : A01</div>
                                                <div className="text-900 font-medium text-xl mb-2"><b>250.000đ</b></div>
                                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                                <div className="flex align-items-center">
                                                    <h5 className="font-bold text-2xl text-900">Màu sắc</h5>
                                                    <Button id={"btnColor"} />
                                                    <Button id={"btnColor2"} />
                                                </div>
                                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                                <div className="flex align-items-center">
                                                    <div>
                                                        <h5 className="font-bold text-2xl text-900">Size</h5>
                                                        <Button id="btnSize">M</Button>
                                                        <Button id="btnSize">L</Button>
                                                        <Button id="btnSize">XL</Button>
                                                    </div>
                                                </div>
                                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                                <div className="flex align-items-center">
                                                    <h5 className="font-bold text-2xl text-900">Mô tả</h5>
                                                    <div>Mô tả</div>
                                                </div>
                                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                                <Button className="p-button-raised p-button-success" id={"btnAdd"}>Thêm vào giỏ hàng</Button>
                                                <Button className="p-button-raised p-button-success" id={"btnBuy"}>Mua ngay bây giờ</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <div id={"sameProduct"}><b>SẢN PHẨM LIÊN QUAN</b>
                </div>
                <hr/>
                <MultipleSlidesExample/>
            </Layout>
        )
    }
}
export default Detail