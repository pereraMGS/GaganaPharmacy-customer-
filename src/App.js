import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./component/HeaderBar";
import OrderDetails from "./component/pages/Order Details/OrderDetails";
import UpdateDetails from "./component/pages/updateDetails/UpdateDetails";
import CusHome from "./component/pages/customer home/CusHome";
import Login from "./component/Admin/Login"
import Footer from "./component/Footer.jsx";
import {Provider} from "react-redux"
import {store} from "./component/pages/action/store"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path="/OrderDetails">
          <Provider store={store}></Provider>
            <OrderDetails />
          </Route>

          <Route path="/UpdateDetails">
            <UpdateDetails />
          </Route>

          <Route path="/CusHome">
            <CusHome />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
