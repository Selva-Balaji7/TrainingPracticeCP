import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  imports: [CommonModule,FormsModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {
  bikes:string[]=[
    "Ktm","honda-shine","Discover","ducati"
  ]

  cars:string[]=[
    "lambogni","tesla","Ford","benz","bmw","audi"
  ]

  isCond1=true;
  displayData(value:any){
    if(value===2){
      this.isCond1=true;
    }
    else if(value===1){
      this.isCond1=false;
    }
  }

  bike:string="";
  car:string="";

  isCond2:boolean=true;

  getClickBike(value:any){
    this.bike=value;
    this.isCond2=false;
  }

  getClickCar(value:any){
    this.car=value;
    this.isCond2=true;
  }
  
}
