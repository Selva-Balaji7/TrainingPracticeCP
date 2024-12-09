"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //creating constructor
    function Person(id, name, addr) {
        //data-member
        this.pid = 101;
        this.pname = "Tarun";
        this.paddress = "Chennai";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    //memeber function
    //polymorphim
    Person.prototype.personDetails = function () {
        console.log("Id:".concat(this.pid, " Name:").concat(this.pname, " Address:").concat(this.paddress));
    };
    return Person;
}());
exports.default = Person;
