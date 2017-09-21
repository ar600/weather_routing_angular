import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {
  // cities=[];
  constructor(private _http : Http) { }

  retrieveWeather(dummyName){
    console.log('dummyname: ', dummyName);
    let myObservable = this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+dummyName+'&appid=aef6356ebffbd0b4f47044563572d2fe').map(data => data.json());
    return myObservable;
    //   (response) => {
    //     console.log("inside");
    //     this.cities = response.json();
    //     callback(this.cities);
    //   },
    //   (err) => {
    //
    //   console.log("error");
    // });
  }
}
