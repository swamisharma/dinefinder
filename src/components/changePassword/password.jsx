import React from "react";
// import "./profile.css"
import './password.css';
import {MdOutlinePassword} from 'react-icons/md';
import Solve from './passwordutility'


function UpdatePassword(){
    return(
        <div id="passwordData">
          {/* <div className="profileHeading"> */}
           <h1 className="profileHeading"> <MdOutlinePassword />
           <span className="passwordheadingName">Change Password</span> </h1>
        <form className="passwordForm" onSubmit={(e)=>{
           Solve(e);
        }}>
            <h2 className="currentPassword">Current Password</h2>
            <input className=" passwordInput" name="currentPassword" type="password" />
            <h2 className="passwordHeading">New Password</h2>
            <input className=" passwordInput" name="newPassword" type='password' placeholder=""/>
            <h2 className="passwordHeading">Confirm  Password</h2>
            <input className="passwordInput" type='password' name="confirmPassword" placeholder=""/>
            <button type="submit" className="passwordBtn">Submit</button>
        </form>
        </div>
    )
}
export default UpdatePassword;