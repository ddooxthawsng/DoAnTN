import React, { Component } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './css/Cart.css';
import {Image} from "primereact/image";
import {Col, Radio, Row} from "antd";
import {InputTextarea} from "primereact/inputtextarea";
import {Fieldset} from "primereact/fieldset";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {Checkbox} from "primereact/checkbox";
import {SelectButton} from "primereact/selectbutton";
import {RadioButton} from "primereact/radiobutton";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value :"1",
            products: [{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            },{
                rating: this.randomNumber(1,5),
                name :'a',
                description :'b',
                price : this.randomNumber(1,999),
                inventoryStatus :'INSTOCK'
            }],
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        // this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }
    randomNumber = (to,from)=>{
        return Math.floor(Math.random() * from) + to;
    }
    componentDidMount() {
        // this.productService.getProducts().then(data => this.setState({ products: data }));
    }
    itemTemplate(data) {
        let numberR = this.randomNumber(1,8);
        let urlImage = './images/anh'+numberR+'.jpg';
        return (
            <div className="product-item">
                {/*<img src={`./images/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />*/}
                <Image src={urlImage} alt="Image Text"/>
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }
    onRadioChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const options = [
            { label: 'Thanh toán online', value: '1' },
            { label: 'Thánh toán khi nhận hàng', value: '2' }
        ];
        return (
            <Row id={"gioHangId"}>
                <Col md={24}>
                    <Row>
                        <Col md={10}></Col>
                        <Col md={5}>
                            {/*<h2><b className={"headerName"}>Giỏ hàng</b></h2>*/}
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={10}>
                    <div className="datascroller-demo">
                        <Fieldset legend={"Thông tin giỏ hàng"} toggleable={true}>
                            <div className={"divBtn"}>
                                <Button id={"btnTiepTuc"}>Tiếp tục mua sắm</Button>
                                <Button id={"btnXoa"}>Xóa giỏ hàng</Button>
                            </div>
                        <div className="card">
                            <DataScroller value={this.state.products} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="350px" />
                        </div>
                        </Fieldset>
                        <div>
                            <Fieldset legend={"Thành tiền"} toggleable={true}>
                            <div>
                                <h4><b>Tổng :</b></h4>
                                <h4><b>Ưu đãi :</b></h4>
                                <h4><b>Phí ship :</b></h4>
                                <h4><b>Thành tiền :</b></h4>
                            </div>
                            </Fieldset>
                        </div>

                    </div>
                </Col>
                <Col md={1}></Col>
                <Col md={11}>
                    <Fieldset legend={"Thông tin giao hàng"} toggleable={true}>
                    <div >
                        <Row md={24}>
                            <Col md={24}>
                                <span className="p-float-label">
                                    <InputText id="username" className={"txtInput"}/>
                                    <label htmlFor="username">Họ và tên</label>
                                </span>
                                <span className="p-float-label">
                                    <InputText id="username" className={"txtInput"}/>
                                    <label htmlFor="username">Email</label>
                                </span>
                                <span className="p-float-label">
                                    <InputText id="username" className={"txtInput"}/>
                                    <label htmlFor="username">Số điện thoại</label>
                                </span>
                            </Col>
                            <Col md={8}>
                                <span className="p-float-label">
                                    <Dropdown id="username" className={"txtSelect"}/>
                                    <label htmlFor="username">Chọn Tỉnh/Thành phố</label>
                                </span>
                            </Col>
                            <Col md={8}>
                                <span className="p-float-label">
                                    <Dropdown id="username" className={"txtSelect"}/>
                                    <label htmlFor="username">Chọn Quận/Huyện</label>
                                </span>
                            </Col>
                            <Col md={8}>
                                <span className="p-float-label">
                                    <Dropdown id="username" className={"txtSelect"}/>
                                    <label htmlFor="username">Chọn Phường/Xã</label>
                                </span>
                            </Col>
                            <Col md={24}>
                                <span className="p-float-label">
                                    <InputText id="username" className={"txtInput"}/>
                                    <label htmlFor="username">Số nhà / Tên đường</label>
                                </span>
                            </Col>
                            <Col md={24}>
                                <b>Ghi chú cho đơn hàng</b>
                                <InputTextarea rows={5} cols={75}  />
                            </Col>
                            <Col md={24}>
                                <b>Chọn phương thức thanh toán   </b>
                                <Radio.Group
                                    options={options}
                                    onChange={(e)=>this.onRadioChange(e)}
                                    value={this.state.value}
                                    optionType="button"
                                />
                            </Col>
                            <Col md={24}>
                                <Button label="Hoàn tất đơn hàng" className="p-button-success" style={{width:"100%",marginTop:"20px"}}/>
                            </Col>
                        </Row>
                    </div>
                    </Fieldset>
                </Col>
                <Col md={1}></Col>
            </Row>

        );
    }
}

export default Cart;