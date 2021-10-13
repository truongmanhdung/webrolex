import axiosClient from "./axiosClient";

const ProductApi = {
    getAll(){
        const url = `products`
        return axiosClient.get(url)
    },
    getByCategory(){
        const url = `products?_expand=category`
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
    },
    getPage(page){
        const url = `/products?page=${page}`
        return axiosClient.get(url)
    },
    getLimit(limit){
        const url = `/products?limit=${limit}`
        return axiosClient.get(url)
    },
    getSkip(skip, limit){
        const url = `/products?skip=${skip}&&limit=${limit}`
        return axiosClient.get(url)
    }
   
}
export default ProductApi;