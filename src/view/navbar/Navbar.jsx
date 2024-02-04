import {Link} from "react-router-dom";
import './Navbar.css'
import { useSelector } from 'react-redux';
import logo from '../../images/logo.jpeg'

export const Navbar = () => {
    const isUserSignedIn = useSelector((state) => state.auth.isUserSignedIn);
    return (
        
        <nav className="navbar">
            <Link to="/">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </Link>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/question">Ask a question</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {isUserSignedIn ? (
                    <>
                        <li><Link to="/questions">Public questions</Link></li>
                        <li><Link to="/profile">My Profile</Link></li>
                    </>
                ) : null}
                 {!isUserSignedIn ? (
                    <>
                        <li><Link to="/login">Log in</Link></li>
                    </>
                ) : null}
            </ul>
        </nav>

    );
}