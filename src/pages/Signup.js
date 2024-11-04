import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig"; // Ensure you have your Firebase setup
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../styles/Signup.css"; // Add your CSS styles here

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmailSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard"); // Redirect to dashboard after signup
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/dashboard"); // Redirect to dashboard after signup
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleEmailSignup} className="signup-form">
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
                <button type="submit" className="btn signup-btn">Sign Up</button>
            </form>
            <div className="google-signin">
                <p>Or sign up with:</p>
                <button onClick={handleGoogleSignup} className="btn google-btn">Sign up with Google</button>
            </div>
            <div className="redirect-login">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
