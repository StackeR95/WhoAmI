import React, {useState} from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    IdcardOutlined,
    EditOutlined,
    AlertOutlined,
    UnorderedListOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import WhoAmI from "./WhoAmI";
import Studies from "./Studies/Studies";
import Work from "./Work/Work";
import Skills from "./Skills";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function () {
  const [collapsed, setCollapsed] = useState(false);
  const [key,setKey] = useState(1);
  const collapse = ()=> {
      setCollapsed(!collapsed );
};

return ( <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={collapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item onClick={()=>{setKey(1)}} key="1" icon={<IdcardOutlined />}>
                Who Am I
            </Menu.Item>
            <SubMenu key="sub1" icon={<EditOutlined />} title="Studies">
                <Menu.Item onClick={()=>{setKey(2)}} key="2">Brief</Menu.Item>
                <Menu.Item onClick={()=>{setKey(3)}} key="3">High School</Menu.Item>
                <Menu.Item onClick={()=>{setKey(4)}} key="4">University</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Work">
                {/*<Menu.Item onClick={()=>{setKey(6)}} key="6">Brief</Menu.Item>*/}
                <Menu.Item className={'customMenuItem'} onClick={()=>{setKey(7)}} key="7" ><img style={{width:50,height:50}} src="/assets/MarriottLogo.png"/>Marriott</Menu.Item>
                <Menu.Item className={'customMenuItem'} onClick={()=>{setKey(8)}} key="8"><img style={{width:50,height:'50%'}} src="/assets/IbmLogo.png"/>IBM</Menu.Item>
                <Menu.Item onClick={()=>{setKey(9)}} key="9">Pixelogic</Menu.Item>
                <Menu.Item onClick={()=>{setKey(10)}} key="10">Purple Panda</Menu.Item>
            </SubMenu>
            <Menu.Item onClick={()=>{setKey(11)}} key="11" icon={<AlertOutlined />}>
                Skills
            </Menu.Item>
            <Menu.Item onClick={()=>{setKey(12)}} key="12" icon={<UnorderedListOutlined />}>
                Conclusion
            </Menu.Item>
        </Menu>
    </Sider>
    <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content  className="site-layout-background"
                  style={{
                      margin: '24px 16px',
                      padding: 24,
                      minHeight: 280,
                  }}>
            {key === 1 && <WhoAmI/>}
            {(key === 2 || key === 3 || key === 4 ) && <Studies subMenuKey={key}/>}
            {(key === 6 || key === 7 || key === 8 || key === 9 || key === 10 ) && <Work subMenuKey={key}/>}
            {(key === 11) && <Skills subMenuKey={key}/>}
            {(key ===12) && <div><p>I build this website in 3 hours and 12 minutes for the purpose of just to know who am I, a meeting or a video call will let you know more about me.<br/></p><p style={{textAlign:'center'}}>Waiting for your call</p></div>}
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 Directed by Robert B Weide</Footer>
    </Layout>
</Layout>)
}
