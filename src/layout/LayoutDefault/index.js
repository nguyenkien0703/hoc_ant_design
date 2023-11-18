import {Layout} from "antd";
import LearnGrid from "../../components/LearnGrid";
import {MenuFoldOutlined, SearchOutlined} from '@ant-design/icons'
import "./LayoutDefault.css"

import logo from '../../../src/images/logo.png'
import logoFold from '../../../src/images/logo-fold.png'
import {useState} from "react";

const {Sider, Content, Footer} = Layout;

function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false);
    return (<>
        <Layout className="layout-default">
            <header className="header">
                <div className={'header__logo ' + (collapsed && 'header__logo--collapsed') }>
                    <img src={collapsed ? logoFold : logo} alt="logo"/>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__collapse" onClick={()=> setCollapsed(!collapsed)}>
                            <MenuFoldOutlined/>
                        </div>
                        <div className="header__search">
                            <SearchOutlined/>
                        </div>

                    </div>
                    <div className="header__nav-right">
                        noi dung
                    </div>

                </div>
            </header>
            <Layout>
                <Sider className="sider" collapsed={collapsed} theme="light">sider</Sider>
                <Content className="content">
                    <LearnGrid/>
                </Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>


    </>)
}

export default LayoutDefault;