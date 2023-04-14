import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPage } from './pages/recipes/recipes.component';
import { CreateRecipePage } from './pages/create-recipe/create-recipe-page.component';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      { path: '', component: RecipesPage },
      { path: 'create', component: CreateRecipePage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
