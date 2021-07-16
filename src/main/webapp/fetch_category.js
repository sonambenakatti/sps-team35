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
 * @returns {array} a list of recipes in the given category
 */
function search(cat) {
  let recipes = [];
  for (let i = 0; i < jsonrecipes.length; i++) {
    if (jsonrecipes[i].category == cat) {
      recipes.push(jsonrecipes[i]);
    }
  }
  return recipes;
}

window.onload = function showRecipes(){
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const categ = urlParams.get('category');
  this.console.log(categ);
  let recipes = search(categ);
  this.console.log(recipes);
  // Add it to the page.
  // const categoryContainer = document.getElementById('category-container');
  const categoryList = document.getElementById('category_list');
  const headerContainer = document.getElementById('category-header');
  for (let i = 0; i < recipes.length; i++){
    let linode = this.document.createElement('li');
    let anchor = this.document.createElement('a');
    let title = document.createTextNode(recipes[i].title);
    anchor.appendChild(title);
    anchor.title = recipes[i].title;
    anchor.href = "/recipe.html?title=" + recipes[i].title;
    linode.appendChild(anchor);
    categoryList.appendChild(linode);

  }
  
    
  headerContainer.innerText = categ.substring(0,1).toUpperCase() + categ.substring(1,categ.length);
}
