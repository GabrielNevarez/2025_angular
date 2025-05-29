var Customer = /** @class */ (function () {
    //constructor
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //methods
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer;
}());
//compile//tsc --noEmitOnError Customer.ts
var myCustomer = new Customer("Gabriel", "Smith");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
