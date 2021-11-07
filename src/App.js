import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/Authprovider/AuthProvider";
import Dasbord from "./DashBord/Dashbord/Dashbord";
import AppoinmentHome from "./Pages/AppoinmentPage/AppoinmentHome/AppoinmentHome";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appoinmenthome">
              <AppoinmentHome></AppoinmentHome>
            </PrivateRoute>
            <PrivateRoute path="/dahsbord">
              <Dasbord></Dasbord>
            </PrivateRoute>
            {/* <Route path="/appoinmenthome">
              <AppoinmentHome></AppoinmentHome>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
