import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll(){
        const url = `categorys`
        return axiosClient.get(url)
    },
    getListLimit(limit){
        const url = `categorys?limit=${limit}`
        return axiosClient.get(url)
    },
    getID(id){
        const url = `/categorys/${id}`
        return axiosClient.get(url)
    },
    post(data){
        const url = `/categorys`
        return axiosClient.post(url,data)
    },
    put(id, data){
        const url = `/categorys/${id}`
        return axiosClient.put(url,data)
    },
    delete(id){
        const url = `/categorys/${id}`
        return axiosClient.delete(url)
    }
}
export default CategoryApi;