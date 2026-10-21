export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strTags?: string | null;
  strYoutube?: string | null;
  strSource?: string | null;
  [key: string]: string | null | undefined;
}

export interface RecipeResponse {
  meals: Recipe[] | null;
}

export interface MealCategory {
  idCategory?: string;
  strCategory: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
}