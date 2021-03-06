import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  headerComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './recipes/share/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app.routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
