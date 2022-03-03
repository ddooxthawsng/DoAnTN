import React from "react";
import {sanPhamService} from "../../service/sanPhamService";
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

class TaiKhoan extends React.Component{
    constructor() {
        super();
        this.state={
            products:[]
        }
        this.service = new sanPhamService();
    }

    componentDidMount() {
        this.getData();
    }
    state = {
        searchText: '',
        searchedColumn: '',
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    getData = async ()=>{
        let rs = await this.service.getData();
        if(rs && rs.data && rs.data && rs.data)
            await this.setState({
                products : rs.data
            })
        console.log(rs.data)
    }
    render() {
        const columns = [{
            title: 'Mã sản phầm',
            dataIndex: 'maSP',
            key: 'maSP',
            width: '10%',
            ...this.getColumnSearchProps('maSP'),
        },
            {
                title: 'Loại',
                dataIndex: 'loai',
                key: 'loai',
                width: '30%',
                ...this.getColumnSearchProps('loai'),
            },
            {
                title: 'Số lượng',
                dataIndex: 'soLuong',
                key: 'soLuong',
                width: '10%',
                ...this.getColumnSearchProps('soLuong'),
            },
            {
                title: 'Tên sản phầm',
                dataIndex: 'tenSP',
                key: 'tenSP',
                width: '30%',
                ...this.getColumnSearchProps('tenSP'),
            },
            {
                title: 'Mô tả',
                dataIndex: 'moTa',
                key: 'moTa',
                width: '20%',
                ...this.getColumnSearchProps('moTa'),
            },
            {
                title: 'Ảnh',
                dataIndex: 'anh',
                key: 'anh',
                ...this.getColumnSearchProps('address'),
                sorter: (a, b) => a.and.length - b.and.length,
                sortDirections: ['descend', 'ascend'],
            },
        ];
        return (
            <>
                <h2>Tài khoản</h2>
                {/*<Table*/}
                {/*    columns={columns}*/}
                {/*    dataSource={this.state.products}*/}
                {/*    pagination={{ pageSize: 1 }}*/}

                {/*/>*/}
            </>
        )
    }
}
export default TaiKhoan;
