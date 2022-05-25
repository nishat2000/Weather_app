import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private WeatherService: WeatherService){

  }
  ngOnInit(): void {
    this.WeatherService.getWeatherData('Vadodara').subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
  }
}
