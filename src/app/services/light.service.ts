import { Injectable } from '@angular/core';
import { Light } from 'src/app/interfaces/light';


@Injectable({
  providedIn: 'root'
})
export class LightService {

  lights: Light[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.lights.push({
        id: i + 1,
        color: 'red',
        activate: true,
      })
    }
  }

  get() {
    return this.lights
  }

  create(color: string = 'blue', activate: boolean = true) {
    this.lights.sort(
      (a: Light, b: Light) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        } else {
          return 0;
        }
      }
    )

    var light = {
      id: this.lights[0].id + 1,
      color: color,
      activate : activate
    };
    this.lights.unshift(light);
    console.log(this.lights);
    return light;
  }

  update(data: Light): Light{
    var light: Light = this.lights.find(
      (light: Light) => {
        return light.id == data.id;
      }
    );
    light.color = data.color;
    return light;
  }

  delete(id: number): void{
    var light: number = this.lights.findIndex(
      (light: Light) => {
        return light.id == id;
      }
    );
    this.lights.splice(light, 1);
  }
}
