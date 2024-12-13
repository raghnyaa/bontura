import React from "react";
import "./signup.css";

export default function SignupPage() {
  return (
    <div className="main-container">
      <div className="">
        <h1 className="oswald-font brand-color">
          Indian Food is
          <br /> more than curry
        </h1>
        <p className="sans-font margin-p">
          Learn more about dishes, ingredients, cultures in <br />
          Indian cuisine.
        </p>
        <p className="oswald-font brand-color cta-txt">
          Stop wondering, Join now
        </p>
      </div>

      <div className="form-container">
        <img src="dish1.jpg" alt="logo" className="img-logo" />
        <h2>Welcome to Bontura</h2>
        <p className="small-font">Find new dishes to try</p>
        <form className="form">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>
        <div className="divider">OR</div>
        <button className="ctn-google">Continue with Google</button>
        <div>
          Already a member?{" "}
          <a href="/login" className="login-link">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
