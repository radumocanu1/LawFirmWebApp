import AuthForm from './authForm.jsx';
import { handleSignup} from '../../logic/authLogic.js';
import { setIsAuthenticated } from './authSlice';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
    const dispatch = useDispatch();

    const handleSignUpSubmit = async (email, password) => {

        try {
            await handleSignup(email, password, handleSignUpSuccess);
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

    const handleSignUpSuccess = (user) => {
        dispatch(setIsAuthenticated());
    };

    return (
        <div className="login-page-container">
            <AuthForm
                title="Sign Up"
                buttonText="Sign Up"
                login="true"
                onSubmit={handleSignUpSubmit}
            />

        </div>
    );
}

export default SignUpPage;