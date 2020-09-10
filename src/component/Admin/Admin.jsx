import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Admin.css";
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"

function Admin() {

 return (

  <div>

<div class="sidenav">
 <h3 className="dashHeader">Dashboard</h3><br></br>
 <Link to="/AdminDetails">User Management</Link>
 <Link to="#">Stock Management</Link>
 <Link to="#">Order Management</Link>
 <Link to="#">Financial Management</Link>
 <Link to="#">Delivery Management</Link>
 <Link to="#">User Report</Link>
</div>

   <div className="adminTable">
    <div className="border border-success col-sm rounded m-5 column">
     <h5 align="center" className="m-2 mb-4">
     </h5>
     <form>
      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Name :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="Keshani sansala"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Birth Date :
              </label>
       <div class="col-sm">
        <input type="date" placeholder="DD.MM.YYYY"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        NIC :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="xxxxxxxxxV"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Address :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="Street address"></input><br></br><br></br>
        <input type="text" placeholder="Street address 2"></input><br></br><br></br>
        <input type="text" placeholder="City"></input><input type="text" placeholder="State/Province"></input><br></br><br></br>
        <input type="text" placeholder="Postal/Zip Code"></input>
        
         <select name="country" className="col-" id="country">
          <option value="none">Select Country</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Australia">Australia</option>
          <option value="Kuwait">Kuwait</option>
          <option value="England">England</option>
          <option value="Newyork">Newyork</option>
          <option value="Dubai">Dubai</option>
         </select>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Tel No :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="Phone Number"></input>
       </div>
      </div>

      <div class="form-group row">
      <label for="staticToken" class="col-sm col-form-label">
        Position :
              </label>
      <div class="col-sm">
      <select name="country" className="col-" id="country">
          <option value="none">Select</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Australia">Australia</option>
          <option value="Kuwait">Kuwait</option>
          <option value="England">England</option>
          <option value="Newyork">Newyork</option>
          <option value="Dubai">Dubai</option>
         </select>
      </div>
      </div>


      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Email :
              </label>
       <div class="col-sm">
        <input type="mail" placeholder="keshanisansala@gmail.com"></input>
       </div>
      </div>


      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Gender :
              </label>
       <div class="col-sm">
        <input type="radio"></input><label>Female</label>
         <input type="radio"></input><label>Male</label>
       </div>
      </div>

      <div className="checkbox1">
      <div class="form-group row">
      <div class="col-sm">
       <input type="checkbox" name="check"></input><label for="vehicle1">Generate a Password and User ID</label>   
       </div>
      </div>
      </div>
  
 
      <div className="adminBtn">
       <div class="form-group row">
       <div className="">
        <button className="btn btn-outline-success">Insert</button>
       </div>

       <div className="">
        <button className="btn btn-outline-success">Update</button>
       </div>

       <div className="">
        <button className="btn btn-outline-success">Delete</button>
       </div>
       </div>
      </div>
     </form>
    </div>

   </div>

   <Footer />
  </div>

 );
}

export default Admin;