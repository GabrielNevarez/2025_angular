"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.getFullName());
