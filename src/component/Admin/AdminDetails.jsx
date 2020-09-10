import React, { Component } from "react";
import "./AdminDetails.css";
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"

function AdminDetails() {
 return (
  <div className="row">
 <div class="sidenav col-sm">
     <h3 className="dashHeader">Dashboard</h3><br></br>
     <a href="#">User Management</a>
     <a href="#">Stock Management</a>
     <a href="#">Order Management</a>
     <a href="#">Financial Management</a>
     <a href="#">Delivery Management</a>
     <a href="#">User Report</a>
    </div>
<div className="">
     <table class="table-bordered col-sm">
      <thead>
       <tr>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">NIC</th>
        <th scope="col">Address</th>
        <th scope="col">Tel No</th>
        <th scope="col">Position</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">Action</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <th scope="row">1</th>
        <td>Diyath panditha</td>
        <td>01/05/1999</td>
        <td>997868475V</td>
        <td>No 1, Colombo, Sri Lanka</td>
        <td>Admin</td>
        <td>diyath@yahoo.com</td>
        <td>Male</td>
        <td>
         <div className="adminBtn">
          <div class="form-group row">

           <div className="">
            <button className="btn btn-success">UPDATE</button>
           </div>

           <div className="">
            <button className="btn btn-outline-success">DELETE</button>
           </div>

          </div>
         </div>

        </td>
       </tr>

       <tr>
        <th scope="row">2</th>
        <td>Kasuni Chamathka</td>
        <td>01/05/1999</td>
        <td>997868475V</td>
        <td>No 1, Colombo, Sri Lanka</td>
        <td>Admin</td>
        <td>kasuni@yahoo.com</td>
        <td>Female</td>
        <td>
         <div className="adminBtn">
          <div class="form-group row">

           <div className="">
            <button className="btn btn-success">UPDATE</button>
           </div>

           <div className="">
            <button className="btn btn-outline-success">DELETE</button>
           </div>

          </div>
         </div>
        </td>
       </tr>

       <tr>
        <th scope="row">3</th>
        <td>Dilshan Perera</td>
        <td>01/05/1999</td>
        <td>997868475V</td>
        <td>No 1, Colombo, Sri Lanka</td>
        <td>Admin</td>
        <td>dilshan@yahoo.com</td>
        <td>Male</td>
        <td>
         <div className="adminBtn">
          <div class="form-group row">

           <div className="">
            <button className="btn btn-success">UPDATE</button>
           </div>

           <div className="">
            <button className="btn btn-outline-success">DELETE</button>
           </div>

          </div>
         </div>

        </td>
       </tr>

       <tr>
        <th scope="row">3</th>
        <td>Tharaka Naduni</td>
        <td>01/05/1999</td>
        <td>997868475V</td>
        <td>No 1, Colombo, Sri Lanka</td>
        <td>Admin</td>
        <td>tharaka@yahoo.com</td>
        <td>Female</td>
        <td>
         <div className="adminBtn">
          <div class="form-group row">

           <div className="">
            <button className="btn btn-success">UPDATE</button>
           </div>

           <div className="">
            <button className="btn btn-outline-success">DELETE</button>
           </div>

          </div>
         </div>

        </td>
       </tr>
      </tbody>
     </table>
    </div>

  </div>

 );
}

export default AdminDetails;