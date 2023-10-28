import React, { useState } from 'react';
import './employeeDashboard.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

function EmployeeDashboard() {
  const [applications, setApplications] = useState([]);
  const [selectedLoanStatus, setSelectedLoanStatus] = useState(''); 
  const [customerPan, setCustomerPan] = useState(''); 
  const navigate = useNavigate();
  const location = useLocation();
    const userData = location.state && location.state.userdata;

  
  const loadApplications = async () => {
    try {
      // Fetch loan applications from your API (replace 'your_api_url' with the actual API endpoint)
      const response = await axios.get('your_api_url');
      setApplications(response.data);
    } catch (error) {
      console.error('Error loading loan applications:', error);
    }
  }

  
  const updateLoanStatus = async (loanId) => {
    try {
      await axios.put('your_api_url', {
        loanId: loanId,
        status: selectedLoanStatus,
      });

      // Reload the loan applications after updating the status
      loadApplications();
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  }

  
  const viewCreditScores = async () => {
    try {
      // Fetch the credit score based on customer PAN (replace 'your_api_url' with the actual API endpoint)
      const response = await axios.get(`your_api_url?pan=${customerPan}`);
      // Display the credit score, you can customize the UI here
      alert(`Credit Score for PAN ${customerPan}: ${response.data.creditScore}`);
    } catch (error) {
      console.error('Error fetching credit score:', error);
    }
  }

  // Function to log out the employee and navigate to /employee
  const logoutEmployee = () => {
    navigate('/employee');
  }

  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>

      {userData && <h5>Hi, {userData.employeeName}</h5>}

      <div className="applications-section">
        <h2>View Applications</h2>
      </div>

      <div className="update-applications-section">
        <h2>Update Loan Applications</h2>
      </div>

      <div className="credit-scores-section">
        <h2>View Credit Scores</h2>
      </div>

      <div className="logout-section">
        <button
          className="btn btn-danger"
          onClick={logoutEmployee}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
