import {getInstance} from "./axiosInstances"

export const securityAPI = {
    getCaptchaUrl() {
        return getInstance.get(`security/get-captcha-url`)
    }
}