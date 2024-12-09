import IEmployee from "./Interface";
class Organization implements IEmployee{
    empId: number;
    empName: string;
    empContact: number;
    
    constructor(id:number,name:string,contact:number){
        this.empId=id;
        this.empName=name;
        this.empContact=contact;
    }
    employeeDetails(): string {
        return`Id:${this.empId} Name:${this.empName} Contact:${this.empContact}`
    }
}
let organizationObj=new Organization(583,"selva balaji",100000);
console.log(organizationObj.employeeDetails());