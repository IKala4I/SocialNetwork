import {Link} from "react-router-dom"
import React, {FC} from 'react'
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors"
import {useDispatch, useSelector} from "react-redux"
import {ThunkDispatch} from "redux-thunk"
import {AppStateType} from "../../redux/redux-store"
import {logOut} from "../../redux/reducers/auth-reducer/auth-reducer"
import {Action} from "redux"
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'
import {UserOutlined} from '@ant-design/icons'


export const Header: FC = () => {
    const {Header} = Layout

    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)
    const logOutHandler = () => {
        dispatch(logOut())
    }

    return (
        <Header className='header'>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/users">Users</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <> <Col span={1}>
                        <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                        <Col span={5}>
                            <Button onClick={logOutHandler}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>}
            </Row>
        </Header>
    )
}