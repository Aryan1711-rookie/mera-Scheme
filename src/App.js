import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Contact from '../src/pages/Contact';
import Home from '../src/pages/Home';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProtectedRoute from './components/ProtectedRoute';
import ApplicationPage from './pages/ApplicationPage';
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// Separate component to use router hooks
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route 
          path="/" 
          element={
            <PageTransition>
              <LoginScreen />
            </PageTransition>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PageTransition>
              <RegisterScreen />
            </PageTransition>
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <PageTransition>
                <Home />

              </PageTransition>
            </ProtectedRoute>
          }
        />
        <Route path='/applicationPage' element = {<ProtectedRoute><PageTransition><ApplicationPage/></PageTransition></ProtectedRoute>} />
        <Route 
          path="/contact" 
          element={
            
              <PageTransition>
                <Contact />
              </PageTransition>
            
          }
        />
        
        {/* Redirect all unknown routes to login */}
        <Route 
          path="*" 
          element={
            <PageTransition>
              <Navigate to="/login" replace />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;