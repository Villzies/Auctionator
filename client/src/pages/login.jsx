import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1" style={{ maxWidth: "400px", margin: "auto" }}>
      <Link to="/signup" style={{ textDecoration: "none", color: "#387a4a" }}>
        ← Go to Signup
      </Link>

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            placeholder="**"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text" style={{ color: "red" }}>
              The provided credentials are incorrect
            </p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button
            type="submit"
            style={{
              backgroundColor: "#387a4a",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              margin: "10px 150px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
