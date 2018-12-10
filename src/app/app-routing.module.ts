import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', data: { name: 'ViibeNav' } },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule', data: { name: 'Navigationsziel suchen' } },
  { path: 'select', loadChildren: './select/select.module#SelectPageModule', data: { name: 'Raumliste' } },
  { path: 'search-results', loadChildren: './search-results/search-results.module#SearchResultsPageModule', data: { name: 'Suchergebnisse' } },
  { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationPageModule', data: { name: 'Navigation' } },
  { path: 'waypoints', loadChildren: './waypoints/waypoints.module#WaypointsPageModule', data: { name: 'Wegpunkte' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
