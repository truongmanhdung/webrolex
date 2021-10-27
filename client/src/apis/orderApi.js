import axiosClient from "./axiosClient";

const OrderApi = {
    getAll(){
        const url = `orders`
        return axiosClient.get(url)
    },
    getID(id){
        const url = `orders/${id}`
        return axiosClient.get(url)
    },
    post(data){
        const url = `/orders`
        return axiosClient.post(url,data)
    },
    updateStatus(id, order){   
        const url = `/orders/${id}`;
        return axiosClient.put(url, order)
    }
}
export default OrderApi;