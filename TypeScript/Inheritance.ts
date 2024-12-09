class Person{
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
    //polymorphim
    personDetails()
    {
        console.log(`Id:${this.pid} Name:${this.pname} Address:${this.paddress}`);

    }
}
export default Person;


