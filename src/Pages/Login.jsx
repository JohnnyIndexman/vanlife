import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { authentication } from '../Components/authentication';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

function Login() {
  const message = useLoaderData();
  const navigate = useNavigate(); 

  const [objects, setObjects] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setObjects((prevObjects) => ({
      ...prevObjects,
      [name]: value,
    }));
  };

  let isValid = false;
  const [mailError, setMailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validation = () => {
    if (!objects.email.includes('@') || objects.email === '' || !objects.email.endsWith('.com')) {
      isValid = false;
      setMailError('Field is required!');
    } else if (objects.password === '') {
      isValid = false;
      setPasswordError(`Field is required!`);
    } else {
      isValid = true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();

    try {
      let isAuthenticated = await authentication(); // Pass the navigate function
      if (isValid && isAuthenticated.isLoggedIn) {
        
        showToastMessage();
        navigate('/vans');

      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const showToastMessage = () => {
    if (isValid) {
      toast.success('Successfully logged in', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="login">
      <h1>Sign in to your account</h1>
      {message && <h4>{message}</h4>}
      <form action="submit" onSubmit={handleSubmit}>
        <div className="login-input">
          <input
            type="text"
            placeholder="Email address"
            name="email"
            value={objects.email}
            onChange={handleChange}
          />
          <span>{mailError}</span>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={objects.password}
            onChange={handleChange}
          />
          <span>{passwordError}</span>
        </div>

        <button onClick={showToastMessage} type="submit">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
