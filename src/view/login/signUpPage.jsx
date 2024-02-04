import AuthForm from './authForm.jsx';
import { handleSignup} from '../../logic/authLogic.js';
import { setIsAuthenticated, setUser } from './authSlice';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignUpSuccess = (user) => {
        dispatch(setIsAuthenticated());
        navigate("/profile");
    };
    const handleSignUpSubmit = async (email, password, username) => {
        try {
            await handleSignup(email, password, username, handleSignUpSuccess);
            dispatch(setUser({ username: username, email: email}));
        } catch (error) {
            console.error('Error during signUp:', error);
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
                alert("Invalid username or password")
            }
            else if (error.code === "auth/too-many-requests") {
                alert("too many requests");
            }
            else {
                alert("Signup error: " + error.message)
            }
        }
    };

   

    return (
        <div className="login-page-container">
            <AuthForm
                title="Want to become a member? Create a free account today!"
                buttonText="Sign Up"
                login="false"
                onSubmit={handleSignUpSubmit}
            />

        </div>
    );
}

export default SignUpPage;