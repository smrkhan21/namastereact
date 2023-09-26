import { useState } from "react";
import { LOGO } from "../../utils/config";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/"><img className='logo' src={LOGO}/></Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/about">Cart</Link>
                    </li>
                    <button onClick={() => {
                        btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                        }
                    }>{btnReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;