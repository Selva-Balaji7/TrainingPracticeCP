import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uid:any;
  upass:any;
  userData:any;
  constructor(private _dbServ:DbserviceService,private _router:Router){

  }
  checkUser(){
    this._dbServ.getRecord("users").subscribe((res)=>{
      // console.log(res);
      this.userData=res;
      console.log(this.uid, this.upass);
      const currentUser=this.userData.filter((val:any,index:any)=>{return val.userid===this.uid && val.userpass===this.upass});

      if(currentUser.length>0){
        sessionStorage.setItem("users",this.uid);
        window.alert("Login successfully");
        this._router.navigate(["/maindashboard"])
      }else{
        window.alert("wrong credential inserted");
        this.uid="";
        this.upass="";
      }
    })
  }


}
