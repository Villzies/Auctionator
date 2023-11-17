import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Update with server endpoint later
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);

            setUsername('');
            setPassword('');
            } else {
                console.error('Login attemptfailed:', response.statusText);
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                    <input type="text" value={username} onChange={handleUsernameChange} required />
            </label>
            <br />
            <label>
                Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>    
            <br />
            <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;