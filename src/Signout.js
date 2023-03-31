import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebase from "../firebase.js";
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

export default function signOut() {
  auth.signOut().then(() => {
    // Sign-out successful.
    alert("SignedOut Succesfully");
  }).catch((error) => {
    // An error happened.
    alert("Couldn't singout");
  });
}


// function SignOut() {
//   return (
//     firebase.auth().currentUser && (
//       <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
//     )
//   );
// }

// export default SignOut;

