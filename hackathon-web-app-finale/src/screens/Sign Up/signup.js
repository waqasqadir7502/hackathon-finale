import React,{useState, useEffect} from "react";
import './signup.css'
import { Link } from "react-router-dom";
import {auth , createUserWithEmailAndPassword, onAuthStateChanged} from "../../config/firebase"
import {useNavigate} from "react-router-dom";

function SignUp(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const navigate = useNavigate();

function Register(){
   
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
          console.log(error)
        // ..
      });
}

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
          
        }
      });
},[])

    return(
        <div className="signup-div">
            <div className="col-1">
                <div className="signupform">
                <label >Username: <br />
                        <input type="text" placeholder="John Doe" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    </label>
                    <label >Email: <br />
                        <input type="text" placeholder="Someone@gmail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    </label>
                    <br />
                    <label >Password: <br />
                        <input type="password" value={pass} onChange={(event)=>{setPass(event.target.value)}}/>
                    </label>
                    <br />
                    <button onClick={Register}>Log In</button>
                    <hr />
                    <p className="signup-here">Already Have An Account ?<Link to="/"><span > Sign In Here!</span></Link></p>
                </div>
            </div>
            <div className="col-2">
                <div className="signup-heading">
                    <h1>This is Sign Up Page</h1>
                </div>
            </div>
        </div>
    );
};


export default SignUp;