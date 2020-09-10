import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./component/HeaderBar";
import OrderDetails from "./component/pages/Order Details/OrderDetails";
import UpdateDetails from "./component/pages/updateDetails/UpdateDetails";
import CusHome from "./component/pages/customer home/CusHome";
import Footer from "./component/Footer.jsx";
import Admin from "./component/Admin/Admin.jsx";
import AdminDetails from "./component/Admin/AdminDetails.jsx";
import Login from "./component/Admin/Login";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path="/AdminDetails">
            <AdminDetails />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
