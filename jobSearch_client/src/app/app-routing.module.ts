import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.componnent';
import { PositionDetailsComponent } from './componnents/position-details/position-details.component';
import { NotFoundComponent } from './componnents/not-found/not-found.component';
import { PositionComponent } from './componnents/position/position.component';
import { PositionsPageComponent } from './componnents/positions-page/positions-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'positions', component: PositionsPageComponent
  }, {
    path: 'positions/:field', component: PositionsPageComponent
  },
  {
    path: ':positionId/details', component: PositionComponent
    
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
