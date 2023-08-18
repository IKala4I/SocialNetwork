import {getInstance} from "./axiosInstances"

type CaptchaUrlType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return getInstance.get<CaptchaUrlType>(`security/get-captcha-url`)
    }
}