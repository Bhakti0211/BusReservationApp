import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


customerId:number = 0
  constructor() {
   
   }

  ngOnInit(): void {

}
 
 
 
}

// today :Date= new Date();

  // isDateEqual(dateOfBooking:Date) {
  //     if(dateOfBooking.getTime()>this.today.getTime())
  //       return true;
  //   return false;
     