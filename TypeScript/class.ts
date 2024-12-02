class person{
    //data-member
    pid:number=101;
    pname:string="Tarun";
    paddress:string="Chennai";
    //creating constructor
    constructor(id:number,name:string,addr:string){
        this.pid=id;
        this.pname=name;
        this.paddress=addr;
    }

    //memeber function
    personDetails()
    {
        console.log(`Id:${this.pid} Name:${this.pname} Address:${this.paddress}`);

    }
}
//create object of class
let personObj=new person(102,"Rahul","Mumbai");
console.log(personObj.pname);
personObj.personDetails();

let personObj1=new person(103,"selva","Tamilnadu");
personObj1.personDetails();
