import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper" style={{background: "purple"}}>
            <span className="brand-logo center">Block coding</span>
            <ul className="left hide-on-med-and-down">
                <li className="active"><Link to="/">Settings</Link></li>
                <li><Link to="/results">Results</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar