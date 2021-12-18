import React, {useState, useEffect} from "react";
import {auth, signOut, db, collection, getDocs, doc} from "../../../config/firebase"
import {useNavigate} from "react-router-dom";
import "./decline.css"
import Logo from './LogoKhanaSabkliye-01.png'
import {Link} from "react-router-dom";

function Decline() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const dataRef = collection(db, "declined")
    
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
              <Link to="/pending"><button >Pending</button></Link>
               <Link to='/approved'><button>Approved</button></Link>
              <Link to='/decline' ><button id="active">Declined</button></Link>
              {
                  users.map((user, index)=>{
                      return(
                      <div key={index} className="decline-div">
                      <h2 className="declined-h1">{user.name}</h2>
                      <p className="declined-p">declined</p>
                      </div>
                      )
                  })
              }
            </div>
        </>
    );
}

export default Decline;
