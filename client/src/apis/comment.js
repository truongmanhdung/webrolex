import axiosClient from "./axiosClient";

const CommentApi = {
    getAll(){
        const url = `/comments`
        return axiosClient.get(url)
    },
    getComment(productId){
        const url = `/comments?productId=${productId}`
        return axiosClient.get(url)
    },
    postComment(comment){
        const url = `/comments`
        return axiosClient.post(url, comment)
    },
    updateStatus(id, comment){
        const url = `/comments/${id}`
        return axiosClient.put(url, comment)
    }
}
export default CommentApi;