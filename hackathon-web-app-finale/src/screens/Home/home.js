import React from "react";
import {auth, signOut} from "../../config/firebase"
import {useNavigate} from "react-router-dom";
import "./home.css"
import Logo from './LogoKhanaSabkliye-01.png'
import {Link} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function LogOut() {
        signOut(auth).then(() => { // Sign-out successful.
            navigate("/")
        }).catch((error) => { // An error happened.
        });
    };

    return (
        <> {/* header */}
            <div className="header-container">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <img src={Logo}
                    alt="Khana Sab Keliye"
                    id="logo"/>
                <nav className="nav-bar">
                    <ul className="nav-ul">
                        <Link to="/" className="nav-link" id="active-a">
                            <li className="nav-li" id="active-li">Home</li>
                        </Link>
                        <Link to="/adduser" className="nav-link">
                            <li className="nav-li">Add Users</li>
                        </Link>
                        <Link to="/request" className="nav-link">
                            <li className="nav-li">
                                Requests</li>
                        </Link>
                        <button onClick={LogOut}
                            className="nav-li logout-btn">Log Out</button>
                    </ul>
                </nav>
            </div>
            {/* body */}
            <div className="home-div">
                <div className="banner-text">
                    <h1 className="home-h1">Proudly Present By Saylani!</h1>
                    <p className="home-p">A Public Service App</p>
                </div>
                <div className="col-2">
                    <img src={Logo}
                        alt="Logo"
                        className="home-banner"/>
                </div>
            </div>
            {/* footer */}
            <div className="footer">
                <p className="footer-p">Built And Designed By Muhhammad Waqas Qadir
                    <br/>
                    For Saylani ❤</p>
            </div>
        </>
    );
}

export default Home;
