import {getInstance, instanceWithApiKey} from "./axiosInstances"

const profileAPI = {
    async getProfile(userId) {
        const response = await getInstance.get(`profile/${userId}`)
        return response.data
    },
    getStatus(userId) {
        return getInstance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanceWithApiKey
            .put('/profile/status', {status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instanceWithApiKey.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instanceWithApiKey.put(`profile`, profile );
    }
}

export default profileAPI