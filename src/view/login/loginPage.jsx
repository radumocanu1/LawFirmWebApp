import AuthForm from './authForm.jsx';
import { handleLogin } from '../../logic/authLogic.js';
import { setIsAuthenticated } from './authSlice';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLoginSubmit = async (email, password) => {

        try {
            await handleLogin(email, password, handleLoginSuccess);
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

    const handleLoginSuccess = (user) => {
        dispatch(setIsAuthenticated());
    };

    return (
        <div className="login-page-container">
            <AuthForm
                title="Log in"
                buttonText="Log in"
                login="true"
                onSubmit={handleLoginSubmit}
            />

        </div>
    );
}

export default LoginPage;