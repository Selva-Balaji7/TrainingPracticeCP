import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';


@Component({
  selector: 'app-toggle-image',
  imports: [CommonModule],
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleImageComponent {
 imgPath1:string="./images/himalayas.jpg";
 imgName1:string="himalayas";
 imgPath2:string="./images/nature.jpg";
 imgName2:string="nature"; 

 isimgPath1: boolean = true;
 isimgPath2: boolean = false;


   myStyle1={
  
      display: this.isimgPath1 ? 'block' : 'none'
    }


   myStyle2={
      display: this.isimgPath2 ? 'block' : 'none'
  
  }

  toggleImage() {
    if(this.isimgPath1){
      
      this.myStyle1.display='none';
      this.myStyle2.display='block';
        
     }
    else
     {
      this.myStyle1.display='block';
      this.myStyle2.display='none';

     }
}
}
