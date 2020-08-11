import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

// const routes: Routes = [];

const routes: Routes = [
  {path : '', redirectTo:'movies', pathMatch:'full'},
  {path : 'movies', component:MoviesComponent},
  {path : 'movie-detail/:id' ,component:MovieDetailComponent},
  {path : '**', component:InvalidPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
