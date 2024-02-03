import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import './profilePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { refreshSession } from '../login/authSlice';

const ProfilePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.auth.username);
    const email = useSelector((state) => state.auth.email);

    const logoutUser = async () => {
            try {
        
                await signOut(auth);
                dispatch(refreshSession())
            }
            catch (error) {
                throw error;
            }
        navigate("/login")
    }

    return (
        <div className="container">
            <div className="card">
                <h1>My Profile</h1>

                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={logoutUser}>Logout</button>
            </div>
        </div>
    );
}

export default ProfilePage;