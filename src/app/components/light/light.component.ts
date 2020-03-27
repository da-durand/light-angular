import { Component, OnInit, Input } from '@angular/core';
import { Light } from "src/app/interfaces/light";
import { LightService } from 'src/app/services/light.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LightCreateComponent } from "src/app/pages/light-create/light-create.component"

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {


  @Input() light: Light;
  constructor(
    private lightService: LightService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openEditModal(): void{
    var modal = this.modalService.open(LightCreateComponent);
    modal.componentInstance.light = this.light;
  }

  updateState(){
    this.light.activate = !this.light.activate;
    this.lightService.update(this.light);
  }

  delete(){
    this.lightService.delete(this.light.id)
  }

}
