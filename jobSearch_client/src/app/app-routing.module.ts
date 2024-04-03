import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.componnent';
import { PositionListComponent } from './componnents/position-list/position-list.component';
import { PositionDetailsComponent } from './componnents/position-details/position-details.component';
import { NotFoundComponent } from './componnents/not-found/not-found.component';
import { PositionComponent } from './componnents/position/position.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'positions/:field?', component: PositionListComponent, children: [
      {
        path: 'position', component: PositionComponent, children: [
          { path: 'details', component: PositionDetailsComponent }]
      }]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
