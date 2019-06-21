import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'movie/:id/:pag', component: MovieComponent },
    { path: 'categoria/:cat', component: CategoriaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
