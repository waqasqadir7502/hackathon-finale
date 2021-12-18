import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../screens/Home/home";
import SignIn from "../screens/Sign In/signin";
import Adduser from "../screens/Add Users/adduser";
import Request from "../screens/Request/request";
import Approved from "../screens/Request/Approved/approved"
import Decline from '../screens/Request/Declined/decline'
import Pending from  '../screens/Request/Pending/pending'

export default function MyRoutes() {

    return (
        <div>
            <Router>
                <Routes>
                <Route path="/decline" element={<Decline/>}></Route>
                <Route path="/pending" element={<Pending/>}></Route>
                <Route path="/approved" element={<Approved/>}></Route>
                    <Route path="/request"
                        element={<Request/>}></Route>
                    <Route path="/home"
                        element={<Home/>}></Route>
                    <Route path="/adduser"
                        element={<Adduser/>}></Route>
                    <Route path="/"
                        element={<SignIn/>}></Route>
                </Routes>
            </Router>
        </div>
    );

}
