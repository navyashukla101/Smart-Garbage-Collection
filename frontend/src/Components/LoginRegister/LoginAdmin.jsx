import React, { useState }from 'react';
import './LoginAdmin.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const LoginAdmin = () => {
  const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };
     const loginLink = () => {
        setAction('');
    };

    return (
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="email"
                     placeholder='Email' required />
                     <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password"
                     placeholder='Password' required />
                     <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label>
                        <input type='checkbox'/>
                        Remember me?
                    </label>
                    <a href="/forgot-passwod" className='forgot-password-link'>
                    Forgot Password?
                    </a>
                </div>
    
                <button type="submit">Login</button>
                <div className='register-link'>
                <p>Don't have an account? 
                <a href='#' onClick={registerLink}> Sign up</a></p>  
                </div>
            </form>
        </div>
        <div className="form-box register">
            <form action=''>
                <h1>Sign up</h1>
                
                <div className='input-box'>
                    <input type="email"
                     placeholder='Email' required />
                     <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password"
                     placeholder='Password' required />
                     <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label>
                        <input type='checkbox'/>
                        I agree to the terms & conditions
                    </label>
                </div>
    
                <button type="submit">Sign up</button>
                <div className='register-link'>
                <p>Already have an account? 
                <a href='#' onClick={loginLink}> Login</a></p>  
                </div>
                                  
            </form>
        </div>
    </div>
  );
}

export default LoginAdmin
