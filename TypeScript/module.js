"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Inheritance_1 = require("./Inheritance");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, addr, compname, econtact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cName = compname;
        _this.empContact = econtact;
        _this.empPost = epost;
        return _this;
    }
    //polymorphism
    Company.prototype.personDetails = function () {
        console.log("EmpId;".concat(this.pid, " EmpName: ").concat(this.pname, " Post:").concat(this.empPost, " Company:").concat(this.cName, " Address:").concat(this.paddress, " Contact:").concat(this.empContact));
    };
    return Company;
}(Inheritance_1.default));
var compObj = new Company(101, "selva balaji", "cheenai", "changepond", 7812805662, "developer");
compObj.personDetails();
