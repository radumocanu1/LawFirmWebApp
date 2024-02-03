import {Link} from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logo.jpeg'

export const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
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
                {isAuthenticated ? (
                    <>
                        <li><Link to="/profile">My Profile</Link></li>
                    </>
                ) : null}
                 {!isAuthenticated ? (
                    <>
                        <li><Link to="/login">Log in</Link></li>
                    </>
                ) : null}
            </ul>
        </nav>

    );
}