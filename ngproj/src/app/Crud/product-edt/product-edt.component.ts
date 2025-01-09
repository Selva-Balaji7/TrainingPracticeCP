import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edt',
  imports: [FormsModule],
  templateUrl: './product-edt.component.html',
  styleUrl: './product-edt.component.css'
})
export class ProductEdtComponent {
  id:any;
  prodData:any;
  constructor(private _actRoute:ActivatedRoute,private _dbObj:DbserviceService,private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      //console.log(param);
      this.id=param.id;
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        //console.log(res);
        this.prodData= res})
    })
  }
  addData(value:any){
    
    this._dbObj.UpdateRecord("products",this.id,value).subscribe(()=>{
      window.alert("Product added successfully");
      this._router.navigate(["/maindashboard/productadd"])
    })
  }
}
