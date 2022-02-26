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
import {sanPhamService} from "../../service/sanPhamService";
import { Tag } from 'primereact/tag';
import {NumberFormat} from "../../utils/NumberFormat";

class ProductList extends React.Component{
    constructor() {
        super();
        this.state = {
            products: [],
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        this.sortOptions = [
            {label: 'Giá giảm dần', value: '!gia'},
            {label: 'Giá tăng dần', value: 'gia'},
        ];

        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.service = new sanPhamService();
    }
    componentDidMount() {
        this.getData();
    }

    randomNumber = (to,from)=>{
        return Math.floor(Math.random() * from) + to;
    }
    getData = async ()=>{
        let rs = await this.service.getData();
        if(rs && rs.data && rs.data && rs.data)
            await this.setState({
                products : rs.data
            })
        console.log(rs.data)
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
        let urlImage = './images'+data.anh+'.jpg';
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <Image src={urlImage} alt="Image Text"/>
                    <div className="product-list-detail">
                        <div className="product-name">{data.tenSP}</div>
                        <div className="product-description">{data.moTa}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        {/*<i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>*/}
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">{NumberFormat.formatMoney(data.gia)}</span>
                        <Button icon="pi pi-shopping-cart" label="Thêm vào giỏ" disabled={data.soLuong > 0 ? false : true}></Button>
                        <Tag className="mr-2" icon={data.soLuong > 0 ? "pi pi-check":"pi pi-times"}
                             severity={data.soLuong >0 ? "success":"danger"}
                             value={data.soLuong >0 ? "Còn hàng":"Hết hàng"}></Tag>
                    </div>
                </div>
            </div>
        );
    }
    renderGridItem(data) {
        let numberR = this.randomNumber(1,8);
        let urlImage = './images/'+data.anh+'.jpg';
        return (
                <Col md={8}>
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <Tag className="mr-2" icon={data.soLuong > 0 ? "pi pi-check":"pi pi-times"}
                             severity={data.soLuong >0 ? "success":"danger"}
                             value={data.soLuong >0 ? "Còn hàng":"Hết hàng"}></Tag></div>
                    <div className="product-grid-item-content">
                        <Image src={urlImage} alt="Image Text"/>
                        {/*<img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />*/}
                        <div className="product-name">{data.tenSP}</div>
                        <div className="product-description">{data.moTa}</div>
                        {/*<Rating value={data.rating} readOnly cancel={false}></Rating>*/}
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">{NumberFormat.formatMoney(data.gia)}</span>
                        <Button icon="pi pi-shopping-cart" label="Thêm vào giỏ" disabled={data.soLuong > 0 ? false : true}></Button>
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