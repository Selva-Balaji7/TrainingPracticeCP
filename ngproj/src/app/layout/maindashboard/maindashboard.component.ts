import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ParentComponent } from '../../parent/parent.component';
import { ChildComponent } from '../../child/child.component';
import { ProductDashComponent } from '../../Crud/product-dash/product-dash.component';
import { ProductEdtComponent } from '../../Crud/product-edt/product-edt.component';


@Component({
  selector: 'app-maindashboard',
  imports: [RouterOutlet,NavComponent,FooterComponent,ParentComponent,ChildComponent,ProductDashComponent,ProductEdtComponent],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class MaindashboardComponent {

}
