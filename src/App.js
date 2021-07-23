
import "./App.css";
import { Recipe } from "./MyComponents/Recipe";
import React, { useEffect, useState , useCallback } from "react";
import Nav from "./MyComponents/Nav";


function App() {
  // Crerating url
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  // create a array for storing data
  const [recipes, setRecipes] = useState([]);



  const callback = useCallback(async function(value) {
    recipeReq(value);
  })

  const recipeReq = async (search) => {
    if (search === '') {
      alert("type something...........");
    }
    else {
      const responce = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await responce.json();
      setRecipes(data.hits);
    }
  };

  return (
    <>
      <Nav parentCallback={callback} />
      <div className="App">
        {recipes.map((item) => (
            <Recipe
              title={item.recipe.label}
              calorie={item.recipe.calories}
              src={item.recipe.image}
              ingredients={item.recipe.ingredients}
            />         
        ))}
      </div>
    </>
  );
}

export default App;
