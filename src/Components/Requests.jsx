import React from "react";
import { useState, } from "react";
import RequestService from "../Services/RequestService";
import { useNavigate } from "react-router-dom";

const Requests = () =>{
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const leaveData = {startDate, endDate, reason};


  function handleSubmit(e){
    e.preventDefault();
    RequestService.saveRequest(leaveData)
    .then(alert("Request successfully sent!"),navigate("/issues"))
    .catch(e=>console.log(e));
  }
  
    return (
      <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">Make Your Leave Request</h2>
          <div className="card-body">
            <form  action="" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
              <label for="startingDate" class="form-label">From</label>
                <input className="form-control" type="date"
                id="startingDate"
                value={startDate}
                required
                onChange={(e) =>setStartDate(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
              <label for="endDate" class="form-label">To</label>
                <input className="form-control" type="date" 
                id="endDate"
                value={endDate}
                required
                onChange={(e)=>setEndDate(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
              <label for="reason" class="form-label">Reason</label>
                <textarea className="form-control"   //Try to increase size of the textarea using bootstrap
                id="reasonTextArea"
                value={reason}
                required
                onChange={(e)=> setReason(e.target.value)}
                type="text" placeholder="Breifly describe your situation, 'Why do you want a leave?', here...">

                </textarea>
              </div>
              <button onClick={(e) =>handleSubmit(e)}  className="btn btn-success">Submit</button> {" "}
              <a className="btn btn-danger" href="/issues">Cancel</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Requests;