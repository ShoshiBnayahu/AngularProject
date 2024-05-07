import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.componnent';
import { NotFoundComponent } from './componnents/not-found/not-found.component';
import { PositionComponent } from './componnents/position/position.component';
import { PositionsPageComponent } from './componnents/positions-page/positions-page.component';
import { WellcomeComponent } from './componnents/wellcome/wellcome.component';


// Define routes configuration
const routes: Routes = [
  {
    path: '', // Root path
    component: HomeComponent, // HomeComponent is the main component for root path
    children: [ // Child routes for HomeComponent
      { path: '', component: WellcomeComponent }, // Default route for HomeComponent, displays WellcomeComponent
      { path: 'positions', component: PositionsPageComponent }, // Route for displaying positions page without filtering
      { path: 'positions/:field', component: PositionsPageComponent }, // Route for displaying positions page with filtering based on field
      { path: ':positionId/details', component: PositionComponent } // Route for displaying details of a specific position
    ]
  },

  { path: 'login', component: LoginComponent }, // Route for login page
  { path: '**', component: NotFoundComponent }, // Wildcard route for handling unknown routes, displays NotFoundComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
