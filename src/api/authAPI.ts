import {getInstance, instanceWithApiKey} from "./axiosInstances"
import {LoginBodyType} from "../redux/reducers/auth-reducer/auth-reducer";

export type CommonFieldsType = {
    resultCode: number,
    messages: Array<string>
}

type AuthMeType = {
    data: {
        id: number,
        email: string,
        login: string
    }
}

type LogOutType = {
    data: {}
}

type LogInType = {
    data: {
        userId: number
    }
}

const authAPI = {
    async getAuthMe() {
        const response = await getInstance.get<AuthMeType & CommonFieldsType>(`auth/me`)
        return response.data
    },
    async logOut() {
        const response = await instanceWithApiKey.delete<LogOutType & CommonFieldsType>('auth/login')
        return response.data
    },
    async logIn(body: LoginBodyType) {
        const response = await instanceWithApiKey.post<LogInType & CommonFieldsType>('auth/login', body)
        return response.data
    }
}

export default authAPI