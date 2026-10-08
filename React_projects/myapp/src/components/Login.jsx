import React, { useState } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit

    // Check credentials as per assignment requirement
    if (username === 'Ram' && password === 'Ram123') {
      setMessage('Welcome Ram!');
    } else {
      setMessage('Invalid Credentials!!');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Enter Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Enter Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
}

export default Signin;