import axios from "axios";
const token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
const axiosClient = axios.create({
    baseURL: "http://localhost:8866/api/",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
    }
})

export default axiosClient;