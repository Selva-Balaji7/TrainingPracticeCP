import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:any;
  childData:any;
  // constructor(){
  //   this.parentData=0;
  //   this.childData=0;
  // }
   senData(val:any){
  console.log(val);
   this.parentData=val;
   }
}
