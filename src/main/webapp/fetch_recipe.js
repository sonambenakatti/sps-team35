function addRandomRecipe() {
  
const responseServer = await fetch('/list-recipes');
    const resp = await responseServer.json();
    const message = document.getElementById('recipe-container');
    message.innerText = resp;

  // Pick a random greeting.
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];

  // Add it to the page.
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerText = recipe;
}
