import React from "react";
import "./profile.css";
import Solve from './profileUtility'

function Profile(props){
    return(
        <div id="profileData">
          {/* <div className="profileHeading"> */}
           <h1 className="profileHeading"> <i className="fa-solid fa-user"></i>  
           <span className="headingName">Profile Detail</span> </h1>
          {/* </div> */}
          {/* <form></form> */}
        <form onSubmit={(e)=>{
              Solve(e);
        }} className="userProfileForm">
            <div id="profileForm">
            <div>
            <h2 className="userprofileHeading">Username</h2>
            <input className="userprofileInput1 " type="text" name='profileName' placeholder=" Enter userName  eg : rahul28"/>
            <h2 className="userprofileHeading">Contact Number</h2>
            <input className="userprofileInput1" type='number' name='profileNumber' placeholder="Enter Contact Number eg : 9828829239"/>
            </div>
            <div>
            <h2 className="userprofileHeading">Email</h2>
            <input className="userprofileInput1" type="email" name='profileEmail' value={props.email} disabled/>
            <h2 className="userprofileHeading">Gender</h2>
            <select className="userprofileInput1" name="profileGender">
                <option >Male</option>
                <option>Female</option>
            </select>
            </div>
            </div>
            <button type="submit" className="profileBtn">Submit</button>
        </form>
        </div>
    )
}
export default Profile;