import React, { useState } from 'react';
import './customerDashboard.css'; 
import LoanService from '../LoanService/LoanService';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

function CustomerDashboard() {
    const location = useLocation();
    const userData = location.state && location.state.userdata;    

  const [loans, setLoans] = useState(LoanService.getLoans());
  const navigate = useNavigate(); // Get the navigate function

  const applyForLoan = (index) => {
    const updatedLoans = [...loans];
    updatedLoans[index].status = 'Pending';
    setLoans(updatedLoans);
  };

  // Function to handle the logout
  const handleLogout = () => {
    // Navigate to the /customer route
    navigate('/customer');
  };

  return (
    <div className="customer-dashboard">
      <h1>Customer Dashboard</h1>
      {userData && <h5>Hi, {userData.lastname}</h5>}
      <h2>View Loans</h2>
      <div className="loan-list">
        {loans.map((loan, index) => (
          <div className="loan-item" key={index}>
            <span>{loan.type} Loan</span>
            <button
              onClick={() => applyForLoan(index)}
              className={loan.status === 'Not Applied' ? 'btn btn-primary' : 'btn btn-secondary'}
              disabled={loan.status !== 'Not Applied'}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      <h2>Loan Status</h2>
      <div className="loan-status">
        {loans.length === 0 ? (
          <p>No loans applied yet.</p>
        ) : (
          loans.map((loan, index) => (
            <p key={index}>
              {loan.type} Loan: <strong>{loan.status}</strong>
            </p>
          ))
        )}
      </div>
      {/* Logout button */}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}

export default CustomerDashboard;
