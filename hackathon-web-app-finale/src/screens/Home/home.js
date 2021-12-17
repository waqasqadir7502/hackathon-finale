import React from "react";
import {auth , signOut} from "../../config/firebase"
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    function LogOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    };

    return(
        <div>
             <h1>This Is Home Page</h1>
             <button onClick={LogOut}>Log Out</button>
        </div>
    );
}

export default Home;