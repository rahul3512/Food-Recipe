import React from "react";
import "./Recipe.css";

export const Recipe = (props) => {
  return (
    <div className="main-content">
      <div className="content">
        <h2>{props.title}</h2>
        <p>Calories : {props.calorie}</p>
        <img src={props.src} alt="Image coming" className="img" />
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {props.ingredients.map((ingrad) => (
            <li key={ingrad.foodID}>{ingrad.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
