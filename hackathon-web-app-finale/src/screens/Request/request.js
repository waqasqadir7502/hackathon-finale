import React from "react";
import {auth, signOut} from "../../config/firebase"
import {useNavigate} from "react-router-dom";
import "./request.css"
import Logo from './LogoKhanaSabkliye-01.png'
import { Link } from "react-router-dom";

function Request(){
    const navigate = useNavigate();
    function LogOut() {
        signOut(auth).then(() => { // Sign-out successful.
            navigate("/")
        }).catch((error) => { // An error happened.
        });
    };
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
                        <Link to="/adduser" className="nav-link" >
                            <li className="nav-li" >Add Users</li>
                        </Link>
                        <Link to="/request" className="nav-link" id="active-a">
                            <li className="nav-li" id="active-li">
                                Requests</li>
                        </Link>
                        <button onClick={LogOut} className="nav-li logout-btn">Log Out</button>
                    </ul>
                </nav>
            </div>
            <div className="requests-tabs">
              <Link to="/pending"><button className="active">Pending</button></Link>
               <Link to='/approved'><button>Approved</button></Link>
              <Link to='/decline' ><button>Declined</button></Link>
            </div>
  {/* footer */}
  <div className="request-footer">
                <p className="footer-p">Built And Designed By Muhhammad Waqas Qadir
                    <br/>
                    For Saylani ❤</p>
            </div>

</>
    );
};

export default Request;