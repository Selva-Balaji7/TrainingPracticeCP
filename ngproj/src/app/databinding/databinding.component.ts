import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
 myName:string="selva balaji";
 imgPath:string="./images/himalayas.jpg";
 imgName:string="mountain";
 inputData:string="samosa"

 greeting(val:string){
  window.alert("good moring");
  window.alert(`hi good morning ${val}`)
  console.log(`${this.inputData}`);
 }
}
