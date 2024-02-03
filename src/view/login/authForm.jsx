import React, { useState } from 'react';
import './authForm.css';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, login, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(email, password, setError);
    };

    return (
        <div className="auth-form-background">
            <div className="auth-form-container">
                <h2 className="auth-form-header">{title}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>
                        Email address:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">{buttonText}</button>
                    <p>
                        {login === "true"
                            ? (
                                <>
                                    <span>Don't have an account? </span>
                                    <a href="/signup">Sign up here</a>
                                </>
                            )
                            : (
                                <>

                                    <span>Already have an account? </span>
                                    <Link to="/login">Log in here</Link>
                                </>
                            )
                        }
                    </p>
                </form>
                {error && <p className="auth-form-error">{error}</p>}
            </div>

        </div>

    );
};

export default AuthForm;