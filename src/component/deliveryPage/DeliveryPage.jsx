import React from "react";
import "./DeliveryPage.css";

function DeliveryPage() {
 return (

  <div className="row">

   <div className="col-sm border-right">
    <form>
     <div className="header5 mb-5 mt-5">
      <h5>Order Delivery</h5>
     </div>

     <div className="row mb-2">
      <label>Order ID : </label>
      <input type="text" className="ml-1" placeholder="Input"></input>
     </div>

     <div className="row">
      <label>Rider ID : </label>
      <input type="text" className="ml-2" placeholder="Input"></input>
     </div>

     <div className="createViewBtn mb-5">
      <button type="button" class="btn btn-outline-success mt-5">Create</button>
      <button type="button" class="btn btn-outline-success mt-5">View</button>
     </div>

     <div>
      <img class = "deliveryImg" src=".\projectImages\deliveryPage\image2.jpg"  width="500px" height="450"/>
     </div>

    </form>
   </div>



   <div className="col-sm">
    <div scope="row">
     <button type="button" class="btn btn-success mt-5">Update Rider Status</button>
     <button type="button" class="btn btn-success mt-5">Update Order Status</button>
    </div>
   </div></div>




 );
}

export default DeliveryPage;