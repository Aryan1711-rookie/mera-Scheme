import React, { useState } from "react";
import { auth } from "../config/firebase"; // Import your Firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterScreen.css"
import {Link} from "react-router-dom";
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Register user function
  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);

      // Redirect to home or login page after successful registration
      navigate("/home");
    } catch (error) {
      setError("Failed to register: " + error.message);
      console.error("Error registering:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <h2>Register</h2>

    <div className="register-container">
      
      <form onSubmit={registerUser}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="register" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
        <div className="login-link">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
    </>
  );

};

export default RegisterScreen; // integrate otp system here in firebase 