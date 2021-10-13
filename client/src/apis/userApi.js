import axiosClient from "./axiosClient";

const UserApi = {
    login(user){
        const url = `auth/login`
        return axiosClient.post(url, user)
    },
    register(user){
        const url = `auth/register`
        return axiosClient.post(url, user)
    },
    getAll(){
        const url = `user`
        return axiosClient.get(url)
    }
}
export default UserApi;