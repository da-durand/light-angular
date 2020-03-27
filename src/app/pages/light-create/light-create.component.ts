import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { LightService } from 'src/app/services/light.service';
import { Router } from '@angular/router';
import { Light } from 'src/app/interfaces/light';



@Component({
  selector: 'app-light-create',
  templateUrl: './light-create.component.html',
  styleUrls: ['./light-create.component.css']
})
export class LightCreateComponent implements OnInit {

  createLight;

  @Input() light : Light;

  constructor( 
    private formBuilder : FormBuilder,
    private ls : LightService,
    private router : Router,
  ) { 
    this.createLight = this.formBuilder.group({
      color: 'blue',
      activate: true,
    })
  }

  ngOnInit(): void {
  }


  onSubmit(data){
    if (this.light){
      this.light.color = data.color;
      this.light.activate = data.activate;
      this.ls.update(this.light);
    }
    else{
      this.ls.create(data.color, data.activate);
    }
    this.router.navigate(['']);
  }

}
