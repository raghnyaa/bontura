// src/components/LandingPage.js
import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero">
          <div className="div-content">
            <h1>
              Indian Food is <br /> more than curry
            </h1>
            <p className="margin">Try your next new recipe</p>
            <a href="#sign-up" className="start-button ">
              Get Started
            </a>
          </div>
          <div className="div-img">
            <img
              src="samosa.avif"
              alt="Samosas on wooden board"
              className="img-size img-left"
            />

            <img
              src="dosa.jpg"
              alt="Dosa with accompaniments"
              className="img-size img-right"
            />

            <img
              src="dish1.jpg"
              alt="Indian appetizer"
              className="img-size-bot img-left "
            />
            <img
              src="dish2.jpg"
              alt="Orange appetizers with chutney"
              className="img-size-bot img-right img-size-bot-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
