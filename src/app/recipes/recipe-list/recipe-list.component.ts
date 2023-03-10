import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]=[
    new Recipe('a test recipe', 'this simple test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('a test recipe', 'this simple test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg')
  ];
 constructor() {

 }
 ngOnInit(): void {
  
 }
 onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
 }
}
