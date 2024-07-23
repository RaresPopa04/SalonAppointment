import React, { useState } from 'react';
import '../css/SignUp.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password
    };

    axios.post('/user/login', user)
      .then((res) => {
        console.log(res);
        window.location = '/';
      })
      .catch((error) => {
        setError(error.response.data.msg);
      });
  };

  return (
    <div className="signup-container">
        <div className="title">
            <h1>Înregistrare</h1>
        </div>
        {error && <p>{error}</p>}
        <div className="form-section">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Parola:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                </div>
                <input type="submit" value="Înrehistrare"/>
            </form>
        </div>
        

        <div className="noaccount">
                <p>Nu ai cont? <a href="/signup">Înregistrează-te</a></p>
            </div>
    </div>
  );
};

export default Login;