import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prouduct-add',
  imports: [FormsModule],
  templateUrl: './prouduct-add.component.html',
  styleUrl: './prouduct-add.component.css'
})
export class ProuductAddComponent {
  constructor(public _dbObj:DbserviceService,public _router:Router){}
  addData(data:any){
    console.log(data);
    this._dbObj.addRecord("products",data).subscribe(()=>{
      window.alert("Product added successfully");
      this._router.navigate(["/maindashboard/productadd"])
    })
  }

}
