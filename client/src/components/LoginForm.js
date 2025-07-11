import React, { useState } from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
  
     try {
      const response = await axios.post('http://192.168.1.38:5000/api/auth/login', {
        email,
        password
      });

     
      localStorage.setItem('token', response.data.token);

     
      navigate('/planner');
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <div className="link">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default LoginForm;
