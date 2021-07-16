const jsonrecipes = [
    {link:'https://www.allrecipes.com/recipe/74363/peanut-butter-popcorn/',
    title:'Peanut Butter Popcorn',
    likes: 0,
    category: 'lunch'
    },
    {link:'https://www.allrecipes.com/recipe/25432/simple-country-ribs/',
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
/**
 * Finds the recipe of the given title
 * 
 * @param {string} title title of the recipe
 */
function search(title) {
  let recipe = NaN;
  for (let i = 0; i < jsonrecipes.length; i++) {
    if (jsonrecipes[i].title == title) {
      recipe = jsonrecipes[i];
      break;
    }
  }
  if (recipe == NaN) {
      this.console.log("title not in recipe list");
  }
  return recipe;
}
window.onload = function showRecipe(){
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title');
  
  let recipe = search(title);
  this.console.log(recipe);
  // Add it to the page.
  // const categoryContainer = document.getElementById('category-container');
  const recipeInfo = '\n \n Link: '+ recipe.link +
                 ' \n \n Likes: '+ recipe.likes +
                 '\n \n Category: '+ recipe.category;
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerText = recipeInfo;
  this.document.getElementById('recipe-title').innerText = recipe.title;
}
