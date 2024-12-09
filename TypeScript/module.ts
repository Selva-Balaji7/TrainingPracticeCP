import Person from "./Inheritance";
class Company extends Person{
    cName:string;
    empContact:number;
    empPost:string;

    constructor(id:number, name:string, addr:string, compname:string, econtact:number, epost:string)
    {
        super(id,name,addr);
        this.cName=compname;
        this.empContact=econtact;
        this.empPost=epost;

    }
    //polymorphism
    personDetails()
    {
        console.log(`EmpId;${this.pid} EmpName: ${this.pname} Post:${this.empPost} Company:${this.cName} Address:${this.paddress} Contact:${this.empContact}`);
    
    }
}
let compObj=new Company(101,"selva balaji","cheenai","changepond",7812805662,"developer");
compObj.personDetails();