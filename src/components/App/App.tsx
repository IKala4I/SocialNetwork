import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import {ComponentType, FC, lazy, Suspense, useEffect} from "react"
import {initializeApp} from "../../redux/reducers/app-reducer/app-reducer"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../common/Preloader/Preloader"
import {getInitialized} from "../../redux/selectors/app-selectors"
import {AppStateType} from '../../redux/redux-store'
import {ThunkDispatch} from 'redux-thunk'
import {Header} from '../Header/Header'
import {Action} from 'redux'
import Login from '../Login/Login'
import Users from '../Users/Users'
import Sider from '../Navbar/Sider'

import {Breadcrumb, Layout} from 'antd'

const {Content, Footer} = Layout

const DialogsContainer = lazy(() => import('../Dialogs/Dialogs') as Promise<{
    default: ComponentType<any>
}>)
const ProfileContainer = lazy(() => import('../ProfileContainer/ProfileContainer') as Promise<{
    default: ComponentType<any>
}>)

export const App: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
    const initialized = useSelector(getInitialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized)
        return <Preloader/>

    return (
        <Layout>
            <Header/>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider/>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Routes>
                            <Route
                                path='/'
                                element={<Navigate to={"/profile"}/>}
                            />
                            <Route
                                path='/profile/:userId?'
                                element={
                                    <Suspense fallback={<Preloader/>}>
                                        <ProfileContainer/>
                                    </Suspense>}
                            />
                            <Route
                                path='/dialogs/*'
                                element={<Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </Suspense>}
                            />
                            <Route
                                path='/users'
                                element={<Users/>}
                            />
                            <Route
                                path='/login'
                                element={<Login/>}
                            />
                            <Route
                                path='*'
                                element={<div>404 NOT FOUND</div>}
                            />
                        </Routes>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Social Network ©2023 Created by IKala4I</Footer>
        </Layout>
    )
}
