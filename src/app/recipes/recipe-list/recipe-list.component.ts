import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Soft-boiled Eggs',
      'Eggs boiled in shell with melted yolk',
      'https://www.cookipedia.co.uk/wiki/images/2/24/5_minute_hard_boiled_egg.jpg'
    ),
    new Recipe(
      'Polenta',
      'A corn porridge',
      'https://live.staticflickr.com/65535/50643182893_766dfe97ac_b.jpg'
    ),
  ];

  constructor() {}
}
