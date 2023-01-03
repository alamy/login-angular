import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tempo = new Date()
  public hora!: number
  public minute!: number
  public day: number | undefined
  public month!: number
  public year!: number
  lat!: number
  long!: number
  constructor() { }

  ngOnInit() {
    this.getCurrentLocation();

    this.hora = this.tempo.getHours()
    this.minute = this.tempo.getMinutes()
    this.day = this.tempo.getDay()
    this.month = this.tempo.getMonth()
    this.year = this.tempo.getFullYear()
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
     });
    }
   else {
    alert("Geolocation is not supported by this browser.");
    }
   }
}

