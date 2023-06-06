import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = async(e) => {
    e.preventDefault();

  try {
    const response = await axios.post('/register', { email, password });
    console.log(response.data); // Log the response data or handle it accordingly

    // Optionally, you can redirect the user to another page upon successful login
    // For example:
    // history.push('/dashboard');
  } catch (error) {
    console.log(error);
    // Handle the error response or display an error message to the user
    if (error.response) {
      console.log(error.response.data); // Log the response data from the server
      console.log(error.response.status); // Log the response status code
      console.log(error.response.headers); // Log the response headers
    } else {
      console.log(error.message); // Log the error message if there is no response from the server
    }
  }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', {
        name,
        email,
        password,
      });
      console.log(response.data); // Assuming the response contains a success message or user data
      // Handle successful registration, such as displaying a success message or redirecting the user
    } catch (error) {
      console.error(error); // Handle error response, such as displaying an error message
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleFormSubmit}>
        <h2 className="register-heading">Create an Account</h2>
        <input
          type="text"
          className="register-input"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          className="register-input"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="register-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="register-button">Register</button>
        <div className="login-link">
          Already have an account? <a href="/">Log in</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
