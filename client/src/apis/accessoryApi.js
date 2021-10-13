import axiosClient from "./axiosClient";

const AccessoryApi = {
    getAll(){
        const url = `accessory`
        return axiosClient.get(url)
    },
   
}
export default AccessoryApi;