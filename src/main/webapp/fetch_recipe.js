const jsonrecipes = [
    {link:'https://www.allrecipes.com/recipe/74363/peanut-butter-popcorn/',
    title:'Peanut Butter Popcorn',
    likes: 0,
    category: 'lunch'
    },
    {link:'Link: https://www.allrecipes.com/recipe/25432/simple-country-ribs/',
    title:'Simple Country Ribs ',
    likes: 0,
    category: 'dinner'
    },
    {link:'https://www.allrecipes.com/recipe/270860/garlic-naan/',
    title:'Garlic-Naan',
    likes: 0,
    category: 'lunch'
    },
    {link:'https://www.allrecipes.com/recipe/95817/vanilla-crepes/',
    title:'Vanilla Crepes',
    likes: 0,
    category: 'breakfast'
    },
    {link:'https://www.allrecipes.com/recipe/12130/peanut-butter-pie-i/',
    title:'Peanut Butter Pie',
    likes: 0,
    category: 'dinner'
    },
    {link:'https://www.allrecipes.com/recipe/262533/chicken-apple-and-brussels-sprout-sheet-pan-dinner/',
    title:'Chicken, Apple, and Brussels Sprout Sheet Pan Dinner',
    likes: 0,
    category: 'dinner'
    }
]
function addRandomRecipe() {

  // Pick a random recipe.
  const recipe = jsonrecipes[Math.floor(Math.random() * jsonrecipes.length)].link;

  // Add it to the page.
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerText = recipe;
}
function showRecipes(category){
  
}