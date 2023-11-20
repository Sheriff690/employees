import React from "react";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ListOfEmployees from "./Components/ListOfEmployees";
import AddEmployeeComponent from "./Components/AddEmployeeComponent";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Requests from "./Components/Requests";
import Issues from "./Components/Issues";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/employee" element={<ListOfEmployees/>}/>
          <Route path="/issues" element={<Issues/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
          <Route path="/add-employee/:id" element={<AddEmployeeComponent/>}/>
        </Routes>
      </div>
      
      <FooterComponent/>
    </BrowserRouter>
   
  );
}

export default App;
