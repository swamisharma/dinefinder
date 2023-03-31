import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header(props){
    let username;
    const navigate = useNavigate();

    function navToProfile() {
        navigate("/profile/booking")
    }

    function navToHome() {
        navigate("/")
    }

    if (props.login.name === ""){
        username = <Link to="/login">Please Login</Link>;
    }
    else {
        username = `Hello ${props.login.name}`;
    }
    return (
        <header>
            <div className="my-header-container">
                <div className="my-page-title-logo">
                    <img src="https://i.ibb.co/WcW77DW/page-title-logo.png" onClick={navToHome}/>
                </div>
                <div className="my-profile">
                    <div className="my-person-name">
                        <h3>{username}</h3>
                    </div>
                    <div className="my-person-logo">
                        <img src="https://i.ibb.co/vsg8QYg/person-icon.png" alt="Person Logo" onClick={navToProfile}/>
                    </div>
                </div>
            </div>
        </header>
    )
}