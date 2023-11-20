import axios from "axios";
const base_url = "http://localhost:8080/employee";

class EmployeeService {
    /**Method to get a list of all the employees in the database */
    getAllEmployees(){
        return axios.get(base_url);
    }
    /**Method to save employee */
    saveEmployee(employeeData){
        return axios.post(base_url, employeeData);
    }
    /**Method to update an existing employee's data */
    updateEmployee(id, employeeData){
        return axios.put(`${base_url}/${id}`,employeeData);
    }
    /**Method to retrieve a single employee's data. */
    getEmployeeById(id){
        return axios.get(`${base_url}/${id}`);
    }
    /**Method to delete an employee from the database */
    deleteEmployee(id){
        return axios.delete(`${base_url}/${id}`);
    }
}

export default new EmployeeService();