import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "../screens/Home/home";
import SignIn from "../screens/Sign In/signin";
import SignUp from "../screens/Sign Up/signup";


export default function MyRoutes() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/Signup" element={<SignUp />}></Route>
                    <Route path="/" element={<SignIn />}></Route>
                </Routes>
            </Router>
        </div>
    );

}