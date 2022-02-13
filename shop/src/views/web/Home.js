import React from "react";
import SlideShow from "./SlideShow";
import {Col, Row} from "antd";
import Header from "../../layout/Header";

class Home extends React.Component{
    render() {
        const collection = [
            { src: 'images/set1.jpg', caption: "Caption one" },
            { src: 'images/set2.jpg', caption: "Caption 2" },
            { src: 'images/set3.jpg', caption: "Caption 3" }
        ];
        const collection2 = [
            { src: 'images/set2.jpg', caption: "Caption one" },
            { src: 'images/set3.jpg', caption: "Caption 2" },
            { src: 'images/set1.jpg', caption: "Caption 3" }
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
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View
                                        options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View
                                        options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View
                                        options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View
                                        options</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Home