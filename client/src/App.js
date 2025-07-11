import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import TravelForm from './components/TravelForm';
import Itinerary from './components/Itinerary';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function PlannerPage({ setPlan }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace />;

  return (
    <div className="App">
      <h1>AI Travel Planner</h1>
      <TravelForm setPlan={setPlan} />
    </div>
  );
}

function ItineraryPage({ plan }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace />;

  return (
    <div className="App">
      <Itinerary plan={plan} />
    </div>
  );
}

function App() {
  const [plan, setPlan] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/planner" element={<PlannerPage setPlan={setPlan} />} />
        <Route path="/itinerary" element={<ItineraryPage plan={plan} />} />
      </Routes>
    </Router>
  );
}

export default App;
