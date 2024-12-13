import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-image',
  imports: [FormsModule,CommonModule],
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleImageComponent {
 imgPath1:string="./images/himalayas.jpg";
 imgName1:string="himalayas";
 imgPath2:string="./images/nature.jpg";
 imgName2:string="nature"; 

isimgPath1:boolean=true;
isimgPath2:boolean=false;

myStyle1={
 display:'block'
}
myStyle2={
  display:'none'
}


 
ToggleImage(){
  
  if(this.isimgPath1)
  {
    console.log("if part");
    this.myStyle1.display='none';
    this.myStyle2.display='block';
    this.isimgPath1=!this.isimgPath1;
    // this.myStyle1.display="none";
    // this.myStyle2.display="block";
  }
  else
  {
    console.log("else part");
    this.myStyle1.display='block';
    this.myStyle2.display='none';
    this.isimgPath1=!this.isimgPath1;
    // this.myStyle1.display="block";
    // this.myStyle2.display="none";

  }
  
 

}


}
