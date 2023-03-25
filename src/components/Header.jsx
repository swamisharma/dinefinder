import "../styles/header.css";

export default function Header(){
    return (
        <header>
            <div className="header-container">
                <div className="page-title-logo">
                    <img src="../src/assets/page-title-logo.png"/>
                </div>
                <div className="profile">
                    <div className="person-name">
                        <h3>Login</h3>
                    </div>
                    <div className="person-logo">
                        <img src="../src/assets/person-icon.png" alt="Person Logo"/>
                    </div>
                </div>
            </div>
        </header>
    )
}