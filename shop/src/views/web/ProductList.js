import React from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import {Rating} from "primereact/rating";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import './css/ProductList.css'
import {Image} from "primereact/image";
import {Col, Row} from "antd";
import 'primeflex/primeflex.css'
import SideBar from "./SideBar";

class ProductList extends React.Component{
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
            layout: 'grid',
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
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }
    renderGridItem(data) {
        let numberR = this.randomNumber(1,8);
        let urlImage = './images/anh'+numberR+'.jpg';
        return (
                <Col md={12}>
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                        <Image src={urlImage} alt="Image Text"/>
                        {/*<img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />*/}
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
                </Col>
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
    renderHeader() {
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <div style={{textAlign: 'left'}}>
                            <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sắp xếp theo giá" onChange={this.onSortChange}/>
                        </div>
                    </Col><Col md={12}>
                    <div  style={{textAlign: 'right'}}>
                        <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({ layout: e.value })} />
                    </div>
                </Col>
                </Row>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        return (
            <Row>
                <Col md={4}>
                    <SideBar></SideBar>
                </Col>
                <Col md={20}>
                    <div className="dataview-demo ">
                        <div className="p-grid p-nogutter grid grid-nogutter">
                            <Row>
                                <DataView value={this.state.products} layout={this.state.layout} header={header}
                                          itemTemplate={this.itemTemplate} paginator rows={6}
                                          sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

        );
    }
}
export default ProductList;