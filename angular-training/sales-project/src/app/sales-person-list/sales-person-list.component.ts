import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  // Sample data
  salesPersons: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'JohnDoe@gmail.com', 10000),
    new SalesPerson('Jane', 'Smith', 'JaneSmith@yahoo.com', 15000),
    new SalesPerson('Alice', 'Johnson', 'AliceJohnson@gmail.con', 20000),
    new SalesPerson('Bob', 'Brown', 'BobBrown@gmail.com', 12000) ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
