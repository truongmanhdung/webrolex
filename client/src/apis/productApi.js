import axiosClient from "./axiosClient";

const ProductApi = {
    getAll(){
        const url = `products`
        return axiosClient.get(url)
    },
    getID(id){
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
    post(data){
        const url = `/products`
        return axiosClient.post(url,data)
    },
    put(id, data){
        const url = `/products/${id}`
        return axiosClient.put(url,data)
    },
    delete(id){
        const url = `/products/${id}`
        return axiosClient.delete(url)
    }
}
export default ProductApi;