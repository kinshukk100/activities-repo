import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registerCustomer.css';
import axios from 'axios';

function RegisterCustomer() {
    const navigate = useNavigate(); // Get the navigate function
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        emailId: '',
        password: '',
        dob: '',
        phone: '',
        pan: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request with the registration data
            const response = await axios.post('http://localhost:9099/api/saveCustomer', formData);

            if (response.status === 201) {
                // Successful registration
                window.alert('Registration successful!');
                // Redirect to the login page
                navigate('/customer');
            } else {
                // Handle other status codes if needed
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="registration-page">
            <h1>Register as a New Customer</h1>
            <form onSubmit={handleRegistration}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        required
                        minLength="3"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        required
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email ID"
                        name="emailId"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Please enter a valid email address (e.g., abc@abc.com)"
                        value={formData.emailId}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$"
                        title="Password must contain at least 8 characters, including 1 digit, 1 uppercase letter, 1 lowercase letter, and 1 special character."
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number."
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="PAN"
                        name="pan"
                        required
                        value={formData.pan}
                        onChange={handleChange}
                    />
                </div>
                <p className="required-info">
                    Red box is a required field.
                </p>
                <button type="submit">Register</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>
                Already have an account?{' '}
                <Link to="/customer">Login as a customer</Link>
            </p>
        </div>
    );
}

export default RegisterCustomer;