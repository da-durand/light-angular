import { Component, OnInit } from '@angular/core';
import { Light } from '../../interfaces/light';
import { LightService } from 'src/app/services/light.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lights: Light[] = [];

  constructor(private lightService : LightService) { }

  ngOnInit(): void {
    this.lights = this.lightService.get();
  }

}
