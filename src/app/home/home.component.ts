import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather/weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // cities=[
  //   {_id : 1,  name:'sanjose'},
  //   {_id : 2, name:'seattle'},
  //   {_id : 3, name:'burbank'}
  // ];
  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) {

    this._route.params.subscribe((param) => {
      console.log('Home component loaded and url name given is: ', param.name);
      let dummyName = param.name;

      this._weatherService.retrieveWeather(dummyName).subscribe((data) => {
        console.log('data:', data);
      })
    })
  }


  ngOnInit() {
  }

}
