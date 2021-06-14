import logo from "./logo.svg";
import "./App.css";
import { Recipe } from "./MyComponents/Recipe";
import React, { useEffect, useState } from "react";

function App() {
  // Crerating url
  const API_ID = "e5ec77b7";
  const API_KEY = "d019d6784923d7e3fa0adcc3b5e3a310";

  // create a array for storing data
  const [recipes, setRecipes] = useState([]);

  // create variable for search
  const [search, setSearch] = useState("Chicken");

  const recipeReq = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await responce.json();
    setRecipes(data.hits);
  };

  // using useEffect to render the things on page load
  useEffect(() => {
    recipeReq();
  }, []);


  // fucntion for submit
  const submit = (e) => {
    e.preventDefault();
    recipeReq();
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={submit} className="form">
        <input
          className="search-bar"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          placeholder='Choose a food'
        />
        <button className="search-button">Search</button>
      </form>
      {recipes.map((item) => (
        <div key={item.recipe.ingredients.foodId} className="main-content">
          <Recipe
            title={item.recipe.label}
            calorie={item.recipe.calories}
            src={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
