function addRandomRecipe() {
  const recipes =
      ['\n \n Link: https://www.allrecipes.com/recipe/74363/peanut-butter-popcorn/\n \n Title: Peanut Butter Popcorn \n \n Likes: 0 \n \n Category: Appetizers and snacks',
       '\n \n Link: https://www.allrecipes.com/recipe/25432/simple-country-ribs/ \n \n Title: Simple Country Ribs \n \n Likes: 0 \n \n Category: BBQ and grilling',
       '\n \n Link:https://www.allrecipes.com/recipe/270860/garlic-naan/ \n \n Title: Garlic-Naan \n \n Likes: 0 \n \n Category: Bread',
       '\n \n Link: https://www.allrecipes.com/recipe/95817/vanilla-crepes/ \n \n Title: Vanilla Crepes\n \n Likes: 0 \n \n Category: Breakfast and brunch',
       '\n \n Link:https://www.allrecipes.com/recipe/12130/peanut-butter-pie-i/ \n \n Title: Peanut Butter Pie \n \n Likes: 0 \n \n Category: Desserts',
       '\n \n Link: https://www.allrecipes.com/recipe/262533/chicken-apple-and-brussels-sprout-sheet-pan-dinner/ \n \n Title: Chicken, Apple, and Brussels Sprout Sheet Pan Dinner \n \n Likes: 0 \n \n Category: Dinner'];

  // Pick a random greeting.
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];

  // Add it to the page.
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerText = recipe;
}