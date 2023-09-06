import {Link} from "react-router-dom"
import {FC} from 'react'
import Friends from './Friends/Friends'
import {Layout, Menu} from 'antd'
import {LaptopOutlined, UserOutlined, WechatOutlined} from '@ant-design/icons'

const {SubMenu} = Menu

const Sider: FC = () => {
    const {Sider} = Layout

    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                style={{height: '100%'}}
            >
                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                    <Menu.Item key="1"> <Link to="/profile">Profile</Link></Menu.Item>
                    <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Users">
                    <Menu.Item key="1"><Link to="/users">Users</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<WechatOutlined/>} title="Chat">
                    <Menu.Item key="1"><Link to="/chat">Chat</Link></Menu.Item>
                </SubMenu>
                <Friends/>
            </Menu>
        </Sider>
    )
}

export default Sider