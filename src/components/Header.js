import { useState } from "react";
import { LOGO } from "../../utils/config";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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