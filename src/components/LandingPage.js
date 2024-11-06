// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="content-container">
                <div className="intro-section">
                    <h1>Bontura</h1>
                    <p>The Social Hub for Healthy Indian Food & Weight Loss</p>
                    <p>Connect with enthusiasts, explore recipes, and support each other in a journey toward natural and nutritious living.</p>
                </div>
                <div className="auth-section">
                    <h2>Join the Community</h2>
                    <form className="login-form">
                        <input type="text" placeholder="Email or Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className="login-button">Log In</button>
                    </form>
                    <p className="signup-prompt">New to Bontura?</p>
                    <button className="signup-button">Create New Account</button>
                </div>
            </div>

            <section className="about-section">
                <h3>Why Bontura?</h3>
                <p>Join a community dedicated to the love of Indian food and wellness. Discover healthy recipes, track your journey, and connect with like-minded people passionate about natural, weight-conscious living.</p>
            </section>
        </div>
    );
};

export default LandingPage;
