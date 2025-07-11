import React, { useState } from 'react';
import '../styles/auth.css';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios'; 

function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister =  async e => {
    e.preventDefault();
     try {
    const response = await axios.post('http://192.168.1.38:5000/api/auth/register', form);

    localStorage.setItem('token', response.data.token);

    
    navigate('/planner');}
    catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    alert("Registration failed");
  }
  };
  

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <div className="link">
        Have an account? <a href="/">Login</a>
      </div>
    </div>
  );
}

export default RegisterForm;
