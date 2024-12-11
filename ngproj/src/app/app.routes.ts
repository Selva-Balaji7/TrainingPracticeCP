import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { AngformComponent } from './form/angform/angform.component';
import { UtdfComponent } from './form/utdf/utdf.component';
import { RtfComponent } from './form/rtf/rtf.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { NavComponent } from './layout/nav/nav.component';

export const routes: Routes = [
    //default routing
    //{path:"",component:LoginComponent}
    //redirecting routing

    {path:"",redirectTo:"login",pathMatch:"full"},
    //naming routing
    {path:"login",component:LoginComponent},
    {path:"databinding",component:DatabindingComponent},
    //parameterize routing
    {path:"mypipe/:id",component:MypipesComponent},
    //child routing
    {path:"maindashboard",component:MaindashboardComponent,children:[
        
     
        
        // {path:"utdf",component:UtdfComponent},
        // {path:"rtf",component:RtfComponent}
    ]},
    //wild card routing
    {path:"**",component:PagenotfoundComponent}

];
   
