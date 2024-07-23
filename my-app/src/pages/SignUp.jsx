import React, { useState } from 'react';
import '../css/SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      password
    };

    
    axios.post('/user/register', newUser)
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
                    <label htmlFor="lastname" >Nume:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  value={email} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefon:</label>
                    <input type="text" id="phone" name="phone"  value ={phone} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Parola:</label>
                    <input type="password" id="password" name="password"  value ={password} onChange={handleChange}/>
                </div>
                <input type="submit" value="Înrehistrare"/>
            </form>
        </div>
        <div className="noaccount">
                <p>Ai cont? <a href="/login">Logheză-te</a></p>
            </div>
    </div>
  );
};

export default SignUp;