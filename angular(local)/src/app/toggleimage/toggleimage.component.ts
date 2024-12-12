import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-image',
  imports: [FormsModule],
  templateUrl: './toggle-image.component.html',
  styleUrl: './toggle-image.component.css'
})
export class ToggleImageComponent {
 imgPath1:string="./images/himalayas.jpg";
 imgName1:string="himalayas";
 imgPath2:string="./images/nature.jpg";
 imgName2:string="nature"; 

 isFirstImage:boolean=true;
 

 myStyle1={
   display:this.isFirstImage ? 'block' : 'none'
 }
 myStyle2={
   display:this.isFirstImage ? 'none' : 'block'
 }
 

ToggleImage(){
  
  this.isFirstImage=!this.isFirstImage;
  

}


}
