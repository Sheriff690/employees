import axios from "axios";
const base_url = "http://localhost:8080/employee";

class EmployeeService {
    getAllEmployees(){
        return axios.get(base_url);
    }
    /**Method to save employee */
    saveEmployee(employeeData){
        return axios.post(base_url, employeeData);
    }
    updateEmployee(id, employeeData){
        return axios.put(`${base_url}/${id}`,employeeData);
    }
    getEmployeeById(id){
        return axios.get(`${base_url}/${id}`);
    }
    deleteEmployee(id){
        return axios.delete(`${base_url}/${id}`);
    }
}

export default new EmployeeService();