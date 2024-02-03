import React, { useState } from 'react';
import './authForm.css';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, login, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [showPasswordMatchText, setShowPasswordMatchText] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [error, setError] = useState(null);
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChangePassword = (value) => {
        setPassword(value);
        evaluatePasswordStrength(value);
        if (showPasswordMatchText) {
            setPasswordMatch(checkIfFieldsAreEqual(value, verifyPassword));
        }
    };

    const handleChangeVerifyPassword = (value) => {
        setVerifyPassword(value);
        setShowPasswordMatchText(true);
        setPasswordMatch(checkIfFieldsAreEqual(password, value));
    };

    const getMeterColor = () => {
        if (passwordStrength < 30) {
            return 'red';
        } else if (passwordStrength < 70) {
            return 'orange';
        } else {
            return 'green';
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passwordMatch && password !== '') {
            onSubmit(email, password, username, setError);
        }
    };

    const checkIfFieldsAreEqual = (field1, field2) => {
        return field1 === field2;
    };

    const evaluatePasswordStrength = (value) => {
        const strength = calculatePasswordStrength(value);
        setPasswordStrength(strength);
    };

    const calculatePasswordStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const digitCriteria = /\d/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const strength = (lengthCriteria + digitCriteria + specialCharCriteria + uppercaseCriteria + lowercaseCriteria) / 5;
        return strength * 100; 
    };

    return (
        <div className="auth-form-background">
            <div className="auth-form-container">
                <h2 className="auth-form-header">{title}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                {login !== 'true' && (
                        <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    )}
                    
                    <label>
                        Username:
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => handleChangePassword(e.target.value)}
                            required
                        />
                    </label>
                    {login !== 'true' && (
                        <div className="password-strength-meter">
                        {passwordStrength > 0 && (
                            <div className="little-bars-container">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="little-bar"
                                        style={{
                                            width: `${100 / 6}%`,
                                            backgroundColor: passwordStrength > (index + 1) * (100 / 6) ? getMeterColor() : 'transparent'
                                        }}
                                    ></div>
                                ))}
                            </div>
                        )}
                        {passwordStrength > 0 && (
                            <p style={{ color: getMeterColor(), fontWeight: 'bold' }}>
                                Password Strength: {passwordStrength.toFixed(2)}%
                            </p>
                        )}
                    </div>
                    )}
                    
                    {login !== 'true' && (
                        <label>
                            Verify Password:
                            <input
                                type="password"
                                value={verifyPassword}
                                onChange={(e) => handleChangeVerifyPassword(e.target.value)}
                                required
                            />
                        </label>
                    )}
                    {showPasswordMatchText && (
                        <p style={{ color: passwordMatch ? 'green' : 'red' }}>
                            {passwordMatch ? 'Passwords are matching' : "Passwords don't match"}
                        </p>
                    )}
                    <button type="submit">{buttonText}</button>
                    <p>
                        {login === 'true' ? (
                            <>
                                <span>Don't have an account? </span>
                                <a href="/signup">Sign up here</a>
                            </>
                        ) : (
                            <>
                                <span>Already have an account? </span>
                                <Link to="/login">Log in here</Link>
                            </>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
