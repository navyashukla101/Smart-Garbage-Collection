import React, { useState } from 'react';
import './App.css';  
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import LandingPage from "./Components/LandingPage/LandingPage"; 

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true); 

  return (
    <div>
      <nav>
        <button 
          onClick={() => setShowLandingPage(true)} 
          className="nav-button"
        >
          Home
        </button>
        <button 
          onClick={() => setShowLandingPage(false)} 
          className="nav-button"
        >
          Sign Up / Login
        </button>
      </nav>
    

      {showLandingPage ? (
        <LandingPage />
      ) : (
        <LoginRegister />
      )}
    </div>
  );
}

export default App;
