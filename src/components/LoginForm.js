// Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Mail, Lock } from "lucide-react"; // Import icons
import { auth } from "../config/firebase";
import './LoginForm.css';
import { useEffect, useRef } from "react";


const Login = () => {
  const emailRef = useRef(null); // Create a reference for the email input

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus(); // Focus on email input when component mounts
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  useEffect(() => {
      // Check if user is already logged in
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
              navigate('/home');
          }
      });

      // Cleanup subscription
      return () => unsubscribe();
  }, [navigate]);
  
  // Regular email/password login
  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      navigate("/home");
    } catch (error) {
      setError("Failed to sign in: " + error.message);
      console.error("Error signing in:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google sign in
  const signInWithGoogle = async () => {
    setError("");
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign in successful:", result.user);
      navigate("/home");
    } catch (error) {
      setError("Failed to sign in with Google: " + error.message);
      console.error("Google sign in error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginUser} autoComplete="off">
        <h2 className="login-title">Login</h2>
        
        <div className="input-group">
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            placeholder="Email"
            className="input-with-icon"
          />
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Password"
            className="input-with-icon"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        
        <button className="login-button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        
        <div className="divider">
          <span>OR</span>
        </div>

        <button 
          type="button" 
          className="google-button" 
          onClick={signInWithGoogle}
          disabled={loading}
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google icon" 
          />
          Sign in with Google
        </button>

        <div className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;