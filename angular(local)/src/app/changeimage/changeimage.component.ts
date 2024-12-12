import { Component } from '@angular/core';

@Component({
  selector: 'app-changeimage',
  imports: [],
  templateUrl: './changeimage.component.html',
  styleUrl: './changeimage.component.css'
})
export class ChangeimageComponent {
  imgPath="../../assets/images/1_petra_jordan.jpeg";
  altName="Petra";
  imgName:string="Petra, Jordan";

  changeImage(value:number){

    if(value===1){
      this.imgPath= "./images/trees.jpg"; 
      this.altName = "trees";
      this.imgName="img1";
  }
    
      if(value===2){
          this.imgPath= "./images/nature.jpg" 
          this.altName = "nature";
          this.imgName="img2";
      }
      else if(value===3){
          this.imgPath = "./images/man.jpg" 
          this.altName = "man";
          this.imgName="img3";
      }
      else if(value===4){
          this.imgPath = "./images/himalayas.jpg" 
          this.altName = "mount";
          this.imgName="img4";
      }
}
}
