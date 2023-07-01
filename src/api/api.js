import axios from 'axios';


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize = 20){        
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data
        })
    }
}

export const profileAPI = {
    getProfileInfo(userId){
        return axiosInstance.get('profile/' + userId)
        .then(responce => {
            return responce.data
        })
    }
}