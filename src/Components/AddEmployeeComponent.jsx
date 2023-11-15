import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const employeeData=  {firstName,lastName,email};  //Bundle the input from user
  const {id} = useParams();

  function saveEmployee(e){
    e.preventDefault();
    if (employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email){
      if (id){
        EmployeeService.updateEmployee(id,employeeData)
        .then(navigate("/employee"))
        .catch(e=>console.log(e));
      }else {
        EmployeeService.saveEmployee(employeeData)
        .then(navigate("/employee"))
        .catch(e=>console.log(e));
      }
      
    }else{
      alert("Please fill in all the details.")
    }
    
  }
  function title(){
    if (id){
      return "Update Employee";
    }else {
      return "Add Employee";
    }
  }
  useEffect(()=>{
    if(id){
      EmployeeService.getEmployeeById(id)
      .then(res=>{
        setFirstName(res.data.firstName)
        setlastName(res.data.lastName)
        setEmail(res.data.email)
      })
      .catch(e=>console.log(e));
    }
  },[]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">{title()}</h2>
          <div className="card-body">
            <form  action="">
              <div className="form-group mb-2">
                <input className="form-control" type="text"
                value={firstName} 
                onChange={(e) =>setFirstName(e.target.value)}
               placeholder="Enter your first name"/>
              </div>
              <div className="form-group mb-2">
                <input className="form-control" type="text" 
                value={lastName}
                onChange={(e)=>setlastName(e.target.value)}
                placeholder="Enter your last name"/>
              </div>
              <div className="form-group mb-2">
                <input className="form-control" 
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                type="text" placeholder="Email..."/>
              </div>
              <button onClick={(e)=>saveEmployee(e)} className="btn btn-success">Save</button> {" "}
              <Link to={"/employee"} className="btn btn-danger" href="">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent;