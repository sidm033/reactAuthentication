import React, { useContext } from "react";
import AuthContext from "../store/Auth-Contex";

import './Navigaton.css';

const Navigation = (props) => {

    const ctx = useContext(AuthContext);
    console.log(ctx)
    return(
        <div class="header-sub-title">
            <p class="active" > Home</p>
            <p> Contact</p>
            { ctx.isLoggedIn? <p onClick={ctx.onLogout} > Logout</p> :<p> Login</p>}
        </div>
    )   
}

export default Navigation;