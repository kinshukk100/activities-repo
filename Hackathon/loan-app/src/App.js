import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Customer from './Component/customer/customer';
import Employee from './Component/employee/employee';
import RegisterCustomer from './Component/registerCustomer/registerCustomer';
import CustomerDashboard from './Component/customerDashboard/customerDashboard';
import EmployeeDashboard from './Component/employeeDashboard/employeeDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Callback function to set authentication status
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/customer"
          element={<Customer setAuthStatus={setAuthStatus} />}
        />
        <Route
          path="/employee"
          element={<Employee setAuthStatus={setAuthStatus} />}
        />
        <Route path="/employee" element={<Employee />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        {isAuthenticated ? (
          <Route
            path="/customerDashboard"
            element={<CustomerDashboard />}
          />

        ) : (
          <Route path="/customerDashboard" element={<Navigate to="/customer" />} />
        )}

        {isAuthenticated ? (
          <Route
            path="/employeeDashboard"
            element={<EmployeeDashboard />}
          />

        ) : (
          <Route path="/employeeDashboard" element={<Navigate to="/employee" />} />
        )}
        <Route index element={<Navigate to="/customer" />} />
      </Routes>
    </Router>
  );
}

export default App;
