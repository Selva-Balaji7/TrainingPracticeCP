import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-dash',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {
   productArray:any
  constructor(public dbobj:DbserviceService){

  }
  ngOnInit(){
    this.fetchData();
  }
  fetchData(){
    this.dbobj.getRecord('products').subscribe((res:any)=>{
      console.log(res);
      this.productArray=res;
    })
  }
  deleteData(id:any){
    if(window.confirm(`Are you sure to delte product with id:${id}`)){
      this.dbobj.deleteRecord("products",id).subscribe(()=>{
        window.alert("product deleted Successfully");
        this.fetchData();
      })
    }
  }

}
