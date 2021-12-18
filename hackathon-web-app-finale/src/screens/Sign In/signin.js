import React, { useEffect, useState } from "react";
import './signin.css';
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../../config/firebase"
import {useNavigate} from "react-router-dom";
import Logo from './LogoKhanaSabkliye-01.png'

function SignIn() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();

    function LogIn() {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log("user has logged in")
                // ...
            })
            .catch((error) => {
                console.log(error)
            });
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              console.log('User has signed in')
              navigate("/home")
              // ...
            } else {
              // User is signed out
              // ...
             console.log("user has signed out")
            }
          });
    },[])
    
    return (
        <>
        <div className="logo-header">
        <img src={Logo} alt="logo" className="header-logo" />
        </div>
        <div className="signin-div">
            <div className="col-1">
                <div className="signinform">
                    <label >Email: <br />
                    <input type="text" placeholder="Someone@gmail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    </label>
                    <br />
                    <label >Password: <br />
                    <input type="password" value={pass} onChange={(event)=>{setPass(event.target.value)}}/>
                    </label>
                    <br />
                    <button onClick={LogIn}>Log In</button>
                    <hr className="signin-hr" />
                    <button className="forgot-btn">Forgot Pasword</button>
                </div>
            </div>
            <div className="col-2">
                <div className="signin-heading">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignIn;