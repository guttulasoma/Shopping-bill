// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BillCalculator from './BillCalculator';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav style={{
                backgroundColor: '#f4f4f4',
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h2>Sai Srinivasa Grocery Shop</h2>
                <button onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                }}>Logout</button>
            </nav>

            <h2>Welcome to the Shopping Bill Calculator</h2>
            <BillCalculator />
        </div>
    );
};

export default Dashboard;