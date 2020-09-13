import React from "react";
import "./App.css";
/*import { BrowserRouter, Route, Switch } from "react-router-dom";*/
import HeaderBar from "./component/HeaderBar";
import OrderDetails from "./component/pages/Order Details/OrderDetails";
import UpdateDetails from "./component/pages/updateDetails/UpdateDetails";
import CusHome from "./component/pages/customer home/CusHome";
import Footer from "./component/Footer.jsx";
import Login from "./component/Admin/Login"
import DeliveryPage from "./component/deliveryPage/DeliveryPage";

function App() {
  return (
    <div className="">
        <HeaderBar />
        <DeliveryPage/>
        <Footer/>
    </div>
  );
}

export default App;
