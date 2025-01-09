import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule,CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
 myName:string="selva balaji";
 imgPath:string="./images/nature.jpg";
 imgName:string="mountain";
 inputData:string="software developer";

 greeting(val:string){
  window.alert("good moring");
  window.alert(`hi good morning ${val}`)
  console.log(`${this.inputData}`);
 }

 imgStyle={
  height: "200px",
  width:'200px'
 };
}
