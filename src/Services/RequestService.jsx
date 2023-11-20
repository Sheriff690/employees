import axios from "axios";

const base_url = "http://localhost:8080/request";

class RequestService {
    saveRequest(leaveData){
        return axios.post(base_url,leaveData);
    }
    getRequestById(id){
        return axios.get(`${base_url}/${id}`);
    }
    deleteRequest(id){
        return axios.delete(`${base_url}/${id}`);
    }
}
export default new RequestService();