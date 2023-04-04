import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from "./firebase";
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Restaurant from './components/Restaurant';
import Profile from './components/profile/profile'
import UpdatePassword from './components/changePassword/password.jsx'
import BookingHistory from './components/bookingHistory/booking.jsx'
import PermanentDrawerLeft from './components/sidebar/sidebar.jsx'
import Feedback from './components/feedback/feedback.component';


export default function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home name={userName} email={email}/>
    },
    {
      path: '/profile',
      element: <PermanentDrawerLeft name={userName}/>,
      children: [
        {
          path: '/profile',
          element: <Profile name={userName} email={email}/>,
        },
        {
          path: '/profile/password',
          element: <UpdatePassword />
        },
        {
          path: '/profile/booking',
          element: <BookingHistory />
        }
  
      ],
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/:city/:id",
      element: <Restaurant name={userName} email={email}/>
    },
    {
      path: "/feedback",
      element: <Feedback />
    }
  ]);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setEmail(user.email);
      } else{ 
      setUserName("");
        setEmail("");
    }
    });
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}