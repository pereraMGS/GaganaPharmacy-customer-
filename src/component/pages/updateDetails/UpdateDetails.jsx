import React, { Component } from "react";
import "./UpdateDetails.css";
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"

function UpdateDetails(params) {

 return( 

  <div>
   <br></br>
   
   <h2 className ="header2">Update Your Order</h2>

   <div className ="medicine">
  <img src="./projectImages/updateDetailsPageImg/medi.jpg" alt="delivey"  width="700px" height="350px"></img>
  </div>


    <br></br>
    <table class="table" align="right">
   <thead class="thead-dark">
    
     <tr>
       <th scope="col">No</th>
       <th scope="col">Medicine</th>
       <th scope="col">Qty</th>
       <th scope="col">Price</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Pendol</td>
       <td><input type="number" name="" placeholder="Cards"/></td>
       <td>Rs.250.00</td>
     </tr>
     <tr>
       <th scope="row">2</th>
       <td>Chandanalepa soap</td>
       <td><input type="number" name="" placeholder="2"/></td>
       <td>Rs.300.00</td>
     </tr>
     <tr>
       <th scope="row">3</th>
       <td>Fastem Gel</td>
       <td><input type="number" name="" placeholder="1"/></td>
       <td>Rs.240.00</td>
     </tr>
  
   </tbody>
 </table>

<br></br><br></br>

<div align="center">
 <button type="button" class="btn3" >Save</button>
 </div>

  <br></br>
  <Footer/>
  </div>

 );
}



export default UpdateDetails;