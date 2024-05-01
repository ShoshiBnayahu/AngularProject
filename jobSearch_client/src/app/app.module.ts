import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.componnent';
import { PositionListComponent } from './componnents/position-list/position-list.component';
import { PositionDetailsComponent } from './componnents/position-details/position-details.component';
import { PositionComponent } from './componnents/position/position.component';
import { NotFoundComponent } from './componnents/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionFilterComponent } from './componnents/position-filter/position-filter.component';
import { PositionsPageComponent } from './componnents/positions-page/positions-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PositionListComponent,
    PositionComponent,
    PositionDetailsComponent,
    NotFoundComponent,
    PositionFilterComponent,
    PositionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
