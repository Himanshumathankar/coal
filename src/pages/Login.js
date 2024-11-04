import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig"; // Ensure you have your Firebase setup
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../styles/Login.css"; // Add your CSS styles here

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State for showing password
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard"); // Redirect to dashboard after login
        } catch (error) {
            // Handle specific error codes
            switch (error.code) {
                case "auth/invalid-email":
                    setError("Invalid email address.");
                    break;
                case "auth/user-disabled":
                    setError("This user has been disabled.");
                    break;
                case "auth/user-not-found":
                    setError("No user found with this email.");
                    break;
                case "auth/wrong-password":
                    setError("Incorrect password. Please try again.");
                    break;
                default:
                    setError("An error occurred. Please try again.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/dashboard"); // Redirect to dashboard after login
        } catch (error) {
            // Handle Google login errors
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    setError("Popup closed before completing login.");
                    break;
                default:
                    setError("An error occurred during Google sign-in. Please try again.");
            }
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleEmailLogin} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"} // Toggle input type based on state
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span 
                        className="toggle-password" 
                        onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                    >
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </span>
                </div>
                <button type="submit" className="btn login-btn">Login</button>
            </form>
            <div className="google-signin">
                <p>Or sign in with:</p>
                <button onClick={handleGoogleLogin} className="btn google-btn">Sign in with Google</button>
            </div>
            <div className="redirect-signup">
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
