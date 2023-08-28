import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import Navbar from '../layout/Navbar';

const Dashboard = () => {
  const location = useLocation();
  const selectedOption = location.state ? location.state.selectedOption : '';

  return (
    <div>
      <Navbar/>
      <h1 className='test'>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
