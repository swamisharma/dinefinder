import { auth } from '../../firebase'
import { updateProfile, updateEmail } from 'firebase/auth';
import { useState } from 'react';


function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}
function validation(emailValue, userValue, passwordValue) {
    let emailCheck = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    // let emailCheck = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let userCheck = /^[a-zA-Z0-9]{5,}$/;

    if (isEmptyOrSpaces(emailValue) || isEmptyOrSpaces(userValue)) {
        alert("You cannot left any field empty");
        return false;
    }

    if (!emailCheck.test(emailValue)) {
        alert("enter a valid email");
        return false;
    }

    if (!userCheck.test(userValue)) {
        alert("-username can only be alphanumeric \n -usernamemust be atleast 5 characters")
        return false;
    }
    if (passwordValue.length < 10) {
        alert("please Enter the correct number");
        return false;
    }

    return true;
}

//

function Solve(e) {
    e.preventDefault();
    //  const data = new FormData(e.target);
    const data = new FormData(e.target);
    const userName = data.get('profileName');
    const userEmail = data.get('profileEmail');
    const userNumber = data.get('profileNumber');
    const userGender = data.get('profileGender');



    console.log(userEmail, userName, userNumber);

    if (!validation(userEmail, userName, userNumber)) {

    } else {

        updateProfile(auth.currentUser, {
            displayName: userName,
            email: userEmail,
        }).then(() => {
            alert("You have successfully update your profile")
        }).catch((error) => {
            console.log(1, error)
        });

        console.log(auth.currentUser);

        data.set('profileName', "");
        data.set('profileEmail', "");
        data.set('profileNumber', "");
        data.set('profileGender', "");
    }
}

export default Solve;