import React, { Component } from "react";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ImageSlider1 from 'C:/Users/gimha/ITPproject/interfce/src/component/ImageSlider1.jsx';
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"

function OrderDetails(params) {

  return (
    <div>
      <div align="center">
        
        <button className="btn1">Current Order</button>
        <button className="btn1">Previos Order</button>
      </div>

      <br></br>
      <div className="row">
        

        <div className="col-sm">
          <table class="table">
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
                <td>1 card</td>
                <td>Rs.250.00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Chandanalepa soap</td>
                <td>1 soap</td>
                <td>Rs.300.00</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Fastem Gel</td>
                <td>1 tube</td>
                <td>Rs.240.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm">
          <ImageSlider1 />
        </div>
      </div>

      <div className="delUp">
        <button type="button" class="btn2"> Update <FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" class="btn2"> Delete <FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <Footer/>
    </div>
  );

}
export default OrderDetails;

