import React from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import {Rating} from "primereact/rating";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import './css/ProductList.css'
import {Image} from "primereact/image";
import {Col, Row} from "antd";
import 'primeflex/primeflex.css'
import './css/Cart.css'

class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
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
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        this.sortOptions = [
            {label: 'Giá giảm dần', value: '!price'},
            {label: 'Giá tăng dần', value: 'price'},
        ];

        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }
    randomNumber = (to,from)=>{
        return Math.floor(Math.random() * from) + to;
    }
    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }
    renderListItem(data) {
        let numberR = this.randomNumber(1,8);
        let urlImage = './images/anh'+numberR+'.jpg';
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <Image src={urlImage} alt="Image Text"/>
                    {/*<img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />*/}
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                    </div>
                </div>
            </div>
        );
    }
    itemTemplate(product, layout) {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(product);
        else if (layout === 'grid')
            return this.renderGridItem(product);
    }

    render() {
        return (
            <Row>
                <Col md={24}>
                    <div className={"headerCart"}>
                        <h2><b>Giỏ hàng</b></h2>
                    </div>
                </Col>
                <Col md={24}>
                    <div className="dataview-demo ">
                            <DataView value={this.state.products} layout={this.state.layout}
                                      itemTemplate={this.itemTemplate} paginator rows={4}
                                      sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                    </div>
                </Col>
                <Col md={24}>
                <div className="product-grid-item-bottom" >
                    <Row>
                                        <Col md={10}>
                                            <span className="product-price"></span>
                                            <Button icon="pi pi-shopping-cart" label="Tiếp tục mua hàng" className={"headerCart"}></Button>
                                        </Col>
                                        <Col md={4}></Col>
                                        <Col md={10}>
                                            <Button icon="pi pi-shopping-cart" label="Xóa toàn bộ giỏ hàng" className={"headerCart"}></Button>
                                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>

        );
    }
}
export default Cart;