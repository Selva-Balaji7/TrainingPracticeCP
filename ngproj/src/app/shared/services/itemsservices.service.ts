import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsservicesService {

  constructor() {}
   welcome(name:any,comp:any){
    window.alert(`Welcome Your ${name} in${comp}`)
   }
}
