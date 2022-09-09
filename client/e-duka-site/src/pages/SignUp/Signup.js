import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"

const Login = ({onAddUser}) => {
  // state for controlled input fields
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // const history = useNavigate()
  // handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    // notify()
    // make post request
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    } )
        .then(res => res.json())
        .then( (newUser) => onAddUser(newUser))
        setUserName("") && setEmail("" ) && setPassword ("")
    
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <h2 class="title">Kindly Sign Up here</h2>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="input-box">
            <span class="details">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="button">SignUp</button>
        </div>
      </form>
      <div className="go-home">
        <a href="/">
          <button className="home-btn">Home</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
