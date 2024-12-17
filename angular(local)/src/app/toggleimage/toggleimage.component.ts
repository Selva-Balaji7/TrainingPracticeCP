import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';


@Component({
  selector: 'app-toggle-image',
<<<<<<< HEAD
  imports: [FormsModule,CommonModule],
=======
  imports: [CommonModule],
>>>>>>> d7d31b78b50b16c5dcd3d0b22420a0b2a7062ad4
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleImageComponent {
 imgPath1:string="./images/himalayas.jpg";
 imgName1:string="himalayas";
 imgPath2:string="./images/nature.jpg";
 imgName2:string="nature"; 

<<<<<<< HEAD
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
  
 
=======
 isimgPath1: boolean = true;
 isimgPath2: boolean = false;


   myStyle1={
  
      display: this.isimgPath1 ? 'block' : 'none'
    }


   myStyle2={
      display: this.isimgPath2 ? 'block' : 'none'
  
  }
>>>>>>> d7d31b78b50b16c5dcd3d0b22420a0b2a7062ad4

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
