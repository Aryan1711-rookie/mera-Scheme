import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './LoginScreen.css';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  const loginFormRef = useRef(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const login = () => {
    setShowLoginForm(true);
    if (loginFormRef.current) {
      loginFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="title">
          <span className="welcome">Welcome to, </span>
          <span className="portal">mera Scheme portal !</span>
        </div>
        <button className="login" onClick={login}>
          Login
        </button>
      </div>

      <CSSTransition
        in={showLoginForm}
        timeout={300}
        classNames="login-form"
        unmountOnExit
        nodeRef={loginFormRef}
      >
        <div ref={loginFormRef}>
          <LoginForm />
        </div>
      </CSSTransition>
    </>
  );
};

export default LoginScreen;