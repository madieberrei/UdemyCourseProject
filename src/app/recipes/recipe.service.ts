import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://www.31daily.com/wp-content/uploads/2014/07/md_chicken-schnitzel.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fry', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else do you need to say?', 
            'https://bigseventravel.com/wp-content/uploads/2019/11/flip-1920x1280.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];
    
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}