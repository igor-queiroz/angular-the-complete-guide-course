import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPage } from './pages/recipes/recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ComponentsComponent } from './components/components.component';
import { CreateRecipePage } from './pages/create-recipe/create-recipe-page.component';

@NgModule({
  declarations: [RecipesPage, ComponentsComponent, CreateRecipePage],
  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}
