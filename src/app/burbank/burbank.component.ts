import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather/weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
burbank={};
  constructor(private _weatherService: WeatherService) { }

  ngOnInit()
  {
    this._weatherService.retrieveWeather('burbank').subscribe((data) =>
    {
      this.burbank = data;
      console.log(data);
    })
  }
}
