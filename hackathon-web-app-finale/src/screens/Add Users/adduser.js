import React,{useState} from "react";
import './adduser.css'
import { Link } from "react-router-dom";
import {auth , createUserWithEmailAndPassword, signOut,sendPasswordResetEmail } from "../../config/firebase"
import {useNavigate} from "react-router-dom";
import Logo from './LogoKhanaSabkliye-01.png'


function Adduser(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [restoredEmail , setRestoredEmail] = useState('')
const navigate = useNavigate();
function LogOut() {
  signOut(auth).then(() => { // Sign-out successful.
      navigate("/")
  }).catch((error) => { // An error happened.
    console.log(error)
  });
};


function ResetPass(){
    sendPasswordResetEmail(auth, restoredEmail).then(() => {
        // Password reset confirmation sent. Ask user to check their email.
        console.log("email has sent")
      }).catch((error) => {
        // Error encountered while sending password reset code.
        console.log(error)
      });
};

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

    return(
      <>
      {/* header */}
      <div className="header-container">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
                <img src={Logo} alt="Khana Sab Keliye" id="logo"/>
                <nav className="nav-bar">
                    <ul className="nav-ul">
                        <Link to="/" className="nav-link" >
                            <li className="nav-li" >Home</li>
                        </Link>
                        <Link to="/adduser" className="nav-link" id="active-a">
                            <li className="nav-li" id="active-li">Add Users</li>
                        </Link>
                        <Link to="/request" className="nav-link">
                            <li className="nav-li">
                                Requests</li>
                        </Link>
                        <button onClick={LogOut} className="nav-li logout-btn">Log Out</button>
                    </ul>
                </nav>
            </div>
            {/* body */}
        <div className="adduser-div">
        <h1 className="adduser-h1">Add Branch Manager</h1>
            <div className="col-1">
                <div className="adduserform">
                <label >Username: <br />
                        <input type="text" placeholder="John Doe" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    </label>
                    <br />
                    <label >Email: <br />
                        <input type="text" placeholder="Someone@gmail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    </label>
                    <br />
                    <label >Password: <br />
                        <input type="password" value={pass} onChange={(event)=>{setPass(event.target.value)}}/>
                    </label>
                    <br />
                    <button onClick={Register}>Add User</button>
                </div>
                <h2 className="or">OR</h2>
                <div className="adduserform">
                <h1 className="adduser-h1">Reset Password</h1>
                <label >Enter Email:
                    <input type="text" placeholder="someone@hotmail.com" value={restoredEmail} onChange={(event)=>{setRestoredEmail(event.target.value)}} />
                    </label>
                    <button onClick={ResetPass}>Reset Password</button>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className="footer">
            <p className="footer-p">Built A Designed By Muhhammad Waqas Qadir <br /> For Saylani ❤</p>
            </div>
        </>
    );
};


export default Adduser;