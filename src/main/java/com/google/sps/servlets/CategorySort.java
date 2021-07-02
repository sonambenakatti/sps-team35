package teamproject;
import java.util.ArrayList;
public class CategorySort implements TestData {
	//This method is for testing purposes.
	//Coded with Strings for the time being to focus on the algorithm. Will later switch to structures that include actual recipes.
	public static void main(String[] args) {
		String[] recipesToDisplay = sortCategory();
		for(int i = 0; i < recipesToDisplay.length; i++) {
			System.out.println(recipesToDisplay[i]);
		}
	}
	//Gets the recipe array.
	public static String[][] getRecipes() {
		return test;
	}
	//Gets the category the user wishes to browse.
	public static String getCategory() {
		return testCat;
	}
	//Uses ArrayList to shorten the full array to just the desired results.
	public static String[] sortCategory() {
		String[][] recipes = getRecipes();
		String category = getCategory();
		ArrayList<String> recipesToSort = new ArrayList<String>();
		for(int i = 0; i < recipes.length; i++) {
			if(recipes[i][1].equals(category)) {
				recipesToSort.add(recipes[i][0]);
			}
		}
		String recipesSorted[] = recipesToSort.toArray(new String[recipesToSort.size()]);
		return recipesSorted;
	}
	
}
