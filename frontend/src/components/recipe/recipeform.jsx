import React, { useEffect, useState } from 'react'
import Recipe from './recipe.jsx';

const RecipeForm = () => {
  const APP_ID = "f643af62";
  const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch
      (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div>
      <form class="text-gray-400 bg-gray-900 body-font" onSubmit={getSearch}>
        <div class="container py-10 mx-auto">

          <div class="flex lg:w-1/2 w-full sm:flex-row mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="relative sm:mb-0 flex-grow w-full mr-10">
              <label for="full-name" class="leading-7 text-sm text-gray-400">Enter Ingredient (separate them using comma.)</label>
              <input type="text" id="full-name" name="full-name" value={search} onChange={updateSearch} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:bg-oink-tone focus:ring-2 focus:pink-tone focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <button type="submit" class="text-white pink-tone border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
          </div>
        </div>
      </form>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24">
          <div class="grid grid-cols-3 mx-auto">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                recipe={recipe.recipe}
                />
                ))}
               
                
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecipeForm;