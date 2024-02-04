import AuthForm from './authForm.jsx';
import { handleLogin } from '../../logic/authLogic.js';
import { setIsAuthenticated, setUser } from './authSlice';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginSubmit = async (_, password, username, ) => {

        try {
            const email = await handleLogin(username, password, handleLoginSuccess);
            dispatch(setUser({ username: username, email: email}));
        } catch (error) {
            console.error('Error during login:', error);
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
                alert("Invalid username or password")
            }
            else if (error.code === "auth/too-many-requests") {
                alert("too many requests");
            }
            else {
                alert("Login error: " + error.message)
            }
        }
    };

    const handleLoginSuccess = () => {
        dispatch(setIsAuthenticated());

        navigate("/profile");
    };

    return (
        <div className="login-page-container">
            <AuthForm
                title="Are you already a member? Please log in"
                buttonText="Log in"
                login="true"
                onSubmit={handleLoginSubmit}
            />

        </div>
    );
}

export default LoginPage;