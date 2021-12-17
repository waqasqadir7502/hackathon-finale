import React, { useEffect, useState } from "react";
import './signin.css';
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../../config/firebase"
import {useNavigate} from "react-router-dom";

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
                    <hr />
                    <p className="signup-here">Dont Have An Account ? <Link to="./signup"><span > Sign Up Here!</span></Link> </p>
                </div>
            </div>
            <div className="col-2">
                <div className="signin-heading">
                    <h1>This is Login Page</h1>
                </div>
            </div>
        </div>
    );
};

export default SignIn;