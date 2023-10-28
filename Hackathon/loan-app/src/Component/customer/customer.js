import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './customer.css';
import axios from 'axios';

function CustomerLogin({ setAuthStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let profile = {
      email: email,
      password: password,
    };
    let url = 'http://localhost:9099/api/login';

    try {
      const response = await axios.post(url, profile);

      if (response.status === 200) {
        // Successful login
        setAuthStatus(true); // Set authentication status
        navigate('/customerDashboard', { state: { userdata: response.data } });

      } else {
        // Handle other status codes if needed
        setErrorMessage('Incorrect email or password. Please try again.');
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h1>Customer Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email ID"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        Don't have an account?{' '}
        <Link to="/registerCustomer">Register as a new customer</Link>
      </p>
      <p>
        <Link to="/loginEmployee">Login as an Employee</Link>
      </p>
    </div>
  );
}

export default CustomerLogin;
