import React, { useEffect, useState } from "react";
import {auth,  signOut, db, collection, getDocs, doc } from "../../../config/firebase"
import {useNavigate} from "react-router-dom";
import "./pending.css"
import Logo from './LogoKhanaSabkliye-01.png'
import {Link} from "react-router-dom";

function Pending() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const dataRef = collection(db, "users")

    useEffect(()=>{
        const getUsers = async()=>{
            const data = await getDocs(dataRef);
            setUsers(data.docs.map((doc)=>({...doc.data(), id : doc.id})));
            console.log()
        }
        getUsers();
    },[])

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
            <div className="requests-tabs">
              <Link to="/pending"><button id="active" className="request-btn">Pending</button></Link>
               <Link to='/approved'><button className="request-btn">Approved</button></Link>
              <Link to='/decline' ><button className="request-btn">Declined</button></Link>
                  {users.map((user, index)=>{
                      return(
                          <div key={index} className="data-div">
                          <div className="data-info">
                          <h2>{user.name}</h2>
                          <br />
                          <p>{user.descrip}
                          </p>                          
                          </div>
                          <div className="choose-btns">
                          <button id="approve">Accept</button>
                          <br />
                          <button id="decline">Decline</button>
                          </div>
                          </div>
                      )
                  })}
            </div>
        </>
    );
}

export default Pending;
