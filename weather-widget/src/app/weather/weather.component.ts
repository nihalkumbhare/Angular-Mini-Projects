import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  city:string = '';
  weatherData:any;
   apiKey:string = '59ae259040254ede29c06d2284193e77';
  constructor(private http:HttpClient){

  }

  getWeather(){
    if(!this.city.trim()) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;


    this.http.get(url).subscribe({
      next:(data) => {
        this.weatherData = data;

      },
      error:(err) => {
        alert('City not found!');
        this.weatherData = null;
      }
    });
  }
}
