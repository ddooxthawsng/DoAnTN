import React from "react";
import {PageHeader, Space} from "antd";
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

class PageHeaderCommon extends React.Component{
    render() {
        const routes = [
            {
                path: 'index',
                breadcrumbName: 'First-level Menu',
                icon : <HomeOutlined />
            },
            {
                path: 'first',
                breadcrumbName: 'Second-level Menu',
            },
            {
                path: 'second',
                breadcrumbName: 'Third-level Menu',
            },
        ];
        return(
            <>
            <PageHeader
                className="site-page-header"
                breadcrumb={{ routes }}
            />
    </>
        )
    }
}
export default PageHeaderCommon;