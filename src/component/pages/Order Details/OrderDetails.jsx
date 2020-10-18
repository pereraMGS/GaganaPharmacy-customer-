import React, { Component } from "react";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ImageSlider1 from 'C:/Users/gimha/ITPproject/interfce/src/component/ImageSlider1.jsx';
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../action/cusOrderDetails";


class OrderDetails extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      details:[]
    };
  }

  componentDidMount(){
    fetch("http://localhost:5000/api/CusDetails",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    .then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          details: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    )
    }
    render() {
      const{error,isLoaded,details} = this.state;
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
                  {details.map((detail)=>(
                  <tr>
              
                    <th scope="row">{detail.id}</th>
                    <td>{detail.medicine}</td>
                    <td>{detail.qty}</td>
                    <td>{detail.price}</td>
                  </tr>))}
                  {/* <tr>
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
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="col-sm">
              <ImageSlider1 />
            </div>
          </div>

          <div className="delUp">
            <Link to="/UpdateDetails">
              <button type="button" class="btn2"> Update <FontAwesomeIcon icon={faEdit} /></button></Link>

            <button type="button" class="btn2" data-toggle="modal" data-target="#myModal1" > Delete <FontAwesomeIcon icon={faTrash} /></button>

            <div class="modal fade" id="myModal1" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 className="modal-title">Are you sure?</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                          </button>
                  </div>
                  <div class="modal-body">
                    <p align="left">Do you want delete your current Order.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                          </button>
                    <button type="button" class="btn btn-danger">
                      Delete
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

}

// const mapStateToProps = state=>({
//   cusOrderDetailsList : state.OrderDetails.list 
// })

// const mapActionToProps = {
//   fetchAllToken: action.fetchAll,
// };

export default OrderDetails;

