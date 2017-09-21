import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather/weather.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  sanJose= {};
  constructor(private _weatherService: WeatherService) { }

  ngOnInit()
  {
    this._weatherService.retrieveWeather('sanjose').subscribe((data) =>
    {
      this.sanJose = data;
      console.log(data);
    })
  }
}
