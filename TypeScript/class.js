var person = /** @class */ (function () {
    //creating constructor
    function person(id, name, addr) {
        //data-member
        this.pid = 101;
        this.pname = "Tarun";
        this.paddress = "Chennai";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    //memeber function
    person.prototype.personDetails = function () {
        console.log("Id:".concat(this.pid, " Name:").concat(this.pname, " Address:").concat(this.paddress));
    };
    return person;
}());
//create object of class
var personObj = new person(102, "Rahul", "Mumbai");
console.log(personObj.pname);
personObj.personDetails();
var personObj1 = new person(103, "selva", "Tamilnadu");
personObj1.personDetails();
