import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';


@Component({
  selector: 'app-mypipes',
  imports: [CommonModule,CubePipe,SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
  msg:string="Welcome you all in changepond, we are learning angular";
  emp={id:"100",name:"selva Balaji",salary:"100000",post:"full stackdeveloper"};
  dateObj=new Date();

}
