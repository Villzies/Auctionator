import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
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
        <Link to="/login" style={{ textDecoration: "none", color: "#387a4a" }}>
          ← Login Instead
        </Link>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
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
  
  export default Signup;