import React from "react";
import SlideShow from "./SlideShow";
import {Col, Image, Row} from "antd";
import Header from "../../layout/Header";
import {sanPhamService} from "../../service/sanPhamService";
import {NumberFormat} from "../../utils/NumberFormat";
import {Button} from "primereact/button";

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            products : [],
            listImg :[]
        };
        this.service = new sanPhamService();
    }
    componentDidMount() {
        this.getData();
    }

    getData = async ()=>{
        let listImg = []
        let rs = await this.service.getData();
        if(rs && rs.data && rs.data && rs.data) {
            rs.data.map(item=>{
                listImg.push(item.anh)
            })
            await this.setState({
                products: rs.data,
                listImg : listImg
            })
        }
    }
    randomNumber = (to,from)=>{
        return Math.floor(Math.random() * from) + to;
    }
    randomImage = ()=>{
        return 'images'+ this.state.listImg[this.randomNumber(0,this.state.products.length)] +'.jpg';
    }
    render() {
        const collection = [
            { src: this.randomImage(), caption: "Caption one" },
            { src: this.randomImage(), caption: "Caption 2" },
            { src: this.randomImage(), caption: "Caption 3" }
        ];
        const collection2 = [
            { src: this.randomImage(), caption: "Caption one" },
            { src: this.randomImage(), caption: "Caption 2" },
            { src: this.randomImage(), caption: "Caption 3" }
        ];
        return(
            <>
                <Header />
                <Row>
                    <Col md={12}>
                        <div style={{width:"100%"}}>
                            <SlideShow input={collection} ratio={`1:1`} mode={`automatic`}/>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div style={{width:"100%"}}>
                            <SlideShow input={collection2} ratio={`1:1`} mode={`automatic`}/>
                        </div>
                    </Col>
                </Row>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {this.state.products.slice(0,3).map(item=>{
                            return <div className="col mb-5">
                                <div className="card h-100">
                                        <Image className="card-img-top" src={'./images'+item.anh+'.jpg'}
                                               style={{height: "200px"}}/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.tenSP}</h5>
                                            {NumberFormat.formatMoney(item.gia)}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><Button icon="pi pi-shopping-cart" label="Thêm vào giỏ" ></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Home