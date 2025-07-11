import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TravelForm({ setPlan }) {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    interests: '',
    days: 3
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://192.168.1.38:5000/api/plan',
        {
          ...formData,
          interests: formData.interests.split(',').map(i => i.trim())
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setPlan(response.data.plan);
      navigate('/itinerary'); 
    } catch (error) {
      console.error("Request failed:", error.response?.data || error.message);
      alert("Failed to generate travel plan.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="destination" placeholder="Destination" onChange={handleChange} required />
      <input name="budget" placeholder="Budget" onChange={handleChange} required />
      <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} required />
      <input type="number" name="days" placeholder="Days" onChange={handleChange} required />
      <button type="submit">Generate Plan</button>
    </form>
  );
}

export default TravelForm;
