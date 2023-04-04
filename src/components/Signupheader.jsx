import "../styles/signupheader.css"
import { Link } from "react-router-dom"

export default function Signupheader() {
    return (
        <div className="header">
            <Link to="/"><img src="https://i.ibb.co/WcW77DW/page-title-logo.png" alt=""/></Link>
        </div>
    )
}