import {Link} from "react-router-dom";
import './Navbar.css'
import logo from '../../images/logo.jpeg'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </Link>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>

    );
}