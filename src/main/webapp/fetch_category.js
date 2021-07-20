/**
 * Fetches the given category of recipes when the category window is loaded.
 * 
 * @author tyjedz
 */
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
 * Finds every recipe in the list of jsonrecipes which contains the given category. 
 * 
 * @param {string} cat the category to find
 */
function search(cat) {
  let recipes = "";
  let count = "1";
  for (let i = 0; i < jsonrecipes.length; i++) {
    if (jsonrecipes[i].category == cat) {
      recipes = recipes + "Recipe "+count+")\n Title ->"+jsonrecipes[i].title + "\n\n"
      recipes = recipes + "Link ->" +jsonrecipes [i].link+ "\n\n\n\n"
      count++;
    }
  }
  return recipes
}

window.onload = function showRecipes(){
  const recipe = jsonrecipes[Math.floor(Math.random() * jsonrecipes.length)].link;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const categ = urlParams.get('category');
  this.console.log(categ);
  recipes = search(categ);
  this.console.log(recipes);
  // Add it to the page.
  const categoryContainer = document.getElementById('category-container');
  const headerContainer = document.getElementById('category-header');
  headerContainer.innerText = categ.substring(0,1).toUpperCase() + categ.substring(1,categ.length);
  categoryContainer.innerText = recipes;
}
