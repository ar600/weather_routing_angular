import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather/weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
seattle ={};
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.retrieveWeather('seattle').subscribe((data) =>
    {
      this.seattle = data;
      console.log(data);
    })
  }
}
