import React, { useState } from 'react';
import './App.css';
import AdminLogin from "./Components/LoginRegister/LoginAdmin"; // Component for Admin login
import LoginRegister from "./Components/LoginRegister/LoginRegister"; // Component for User login/register
import RiderLoginRegister from "./Components/LoginRegister/LoginRegRider"; // Component for Rider login/register
import LandingPage from "./Components/LandingPage/LandingPage"

function App() {
  const [selectedRole, setSelectedRole] = useState(''); // State to manage selected role

  const renderContent = () => {
    switch (selectedRole) {
      case 'Admin':
        return <AdminLogin />;
      case 'User':
        return <LoginRegister/>;
      case 'Rider':
        return <RiderLoginRegister />;
      default:
        return <LandingPage/>;
    }
  };

    return (
    <div>
      <nav>
        {selectedRole !== 'Home' ? (
          <button 
            onClick={() => setSelectedRole('Home')} 
            className="nav-button"
          >
            Home
          </button>
        ) : (
          <>
            <button 
              onClick={() => setSelectedRole('Admin')} 
              className="nav-button"
            >
              Admin
            </button>
            <button 
              onClick={() => setSelectedRole('User')} 
              className="nav-button"
            >
              User
            </button>
            <button 
              onClick={() => setSelectedRole('Rider')} 
              className="nav-button"
            >
              Rider
            </button>
          </>
        )}
      </nav>

      {renderContent()}
    </div>
  );
}

export default App;
