import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  baseUrl:string="http://localhost:8888";

  constructor(public httpObj:HttpClient) {

   }
   // code for get request
   getRecord(tableName:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}`);
   }
   //code for delete request
   deleteRecord(tableName:any,id:any){
    return this.httpObj.delete(`${this.baseUrl}/${tableName}/${id}`);
   }
   //code for add request
   addRecord(tableName:any,body:any){
    return this.httpObj.post(`${this.baseUrl}/${tableName}`,body);
   }
   //get request for single
   getSingleRecord(tableName:any,id:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}/${id}`);
   }
   //oode for put request
   UpdateRecord(tableName:any,id:any,body:any){
    return this.httpObj.put(`${this.baseUrl}/${tableName}/${id}`,body);
   }
}
