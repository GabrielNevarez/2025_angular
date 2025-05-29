class Customer {
   //properties
   private firstName: string;
   private lastName: string; 

   //constructor
   constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
    //methods
    public getFirstName(): string {
      return this.firstName;
    }
    public getLastName(): string {
      return this.lastName;
    }
}
//compile//tsc --noEmitOnError Customer.ts
let myCustomer = new Customer("Gabriel", "Smith");

console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());