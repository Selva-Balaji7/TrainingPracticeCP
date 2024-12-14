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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsservicesService } from './shared/services/itemsservices.service';
import { ProductDashComponent } from './Crud/product-dash/product-dash.component';
import { ItemComponent } from './item/item.component';
import { ProuductAddComponent } from './Crud/prouduct-add/prouduct-add.component';
import { ProductEdtComponent } from './Crud/product-edt/product-edt.component';

export const routes: Routes = [
    //default routing
    //{path:"",component:LoginComponent}
    //redirecting routing

    {path:"",redirectTo:"login",pathMatch:"full"},
    //naming routing
    {path:"login",component:LoginComponent},
   
    //parameterize routing
    {path:"mypipe/:id",component:MypipesComponent},
    //child routing
    {path:"maindashboard",component:MaindashboardComponent,children:[
        
        {path:"parent",component:ParentComponent},
        {path:"child",component:ChildComponent},
        {path:"databinding",component:DatabindingComponent},
        {path:"items",component:ItemComponent},
        {path:"productdash",component:ProductDashComponent},
        {path:"productadd",component:ProuductAddComponent},
        {path:"productedit/:id",component:ProductEdtComponent},

       {path:"angform",component:AngformComponent,children:[
        {path:"utdf",component:UtdfComponent},
         {path:"rtf",component:RtfComponent}
       ]},
    ]},
    //wild card routing
    {path:"**",component:PagenotfoundComponent}

];
   
