import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherService} from './weather/weather.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { Http, HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanjoseComponent,
    PagenotfoundComponent,
    SeattleComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
