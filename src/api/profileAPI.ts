import {getInstance, instanceWithApiKey} from "./axiosInstances"
import {ProfileType} from "../redux/reducers/profile-reducer/profile-reducer";
import {CommonFieldsType} from "./authAPI";

type UpdateStatusType = {
    data: {}
}

type SaveProfileType = {
    data: {}
}

type SavePhotoType = {
    data: {
        photos: {
            small: string,
            large: string
        }
    }
}

const profileAPI = {
    async getProfile(userId: number) {
        const response = await getInstance.get<ProfileType>(`profile/${userId}`)
        return response.data
    },
    getStatus(userId: number) {
        return getInstance.get<string>(`profile/status/${userId}`)
    },
    async updateStatus(status: string) {
        const response = await instanceWithApiKey
            .put<UpdateStatusType & CommonFieldsType>('/profile/status', {status})
        return response.data
    },
    async savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        const response = await instanceWithApiKey.put<SavePhotoType & CommonFieldsType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    },
    saveProfile(profile: ProfileType) {
        return instanceWithApiKey.put<SaveProfileType & CommonFieldsType>(`profile`, profile);
    }
}

export default profileAPI