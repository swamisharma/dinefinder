import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header(props){
    let username;

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
                    <img src="../src/assets/page-title-logo.png"/>
                </div>
                <div className="my-profile">
                    <div className="my-person-name">
                        <h3>{username}</h3>
                    </div>
                    <div className="my-person-logo">
                        <img src="../src/assets/person-icon.png" alt="Person Logo"/>
                    </div>
                </div>
            </div>
        </header>
    )
}