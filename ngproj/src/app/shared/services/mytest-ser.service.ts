import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytestSerService {
 
  constructor() { }

  mul(val1:number,val2:number){
    return val1*val2;
  }
}
