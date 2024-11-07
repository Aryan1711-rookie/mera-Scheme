import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';   
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { FiLogOut } from 'react-icons/fi'; 
import './LoginScreen.css';
import "./Home.css"
const Home = () => {

  const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const handleApplyNow = () =>{
      navigate('/applicationPage');
    }
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <ul>
            <li>
            
              <Link to="/contact">Contact</Link>
              <FiLogOut onClick={handleLogout} className="logout-icon" />
              
            </li>
          </ul>

        </nav>
        <div className="title">
          <span className="welcome">mera scheme, </span>
          <span className="portal">mera Bharat!</span>
        </div>
        
        <button className="login"  onClick={handleApplyNow}>
          Apply Now
        </button>   
          
        
      </div>
    </>
  );
};

export default Home;