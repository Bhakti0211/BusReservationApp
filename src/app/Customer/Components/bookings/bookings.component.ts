import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../../Services/transactionservice.service';
import { Itransactionres } from '../../Models/itransactionres';
import { TransactionDetails } from '../../Models/transaction-details';
import { Bookingpassenger } from '../../Models/bookingpassenger';
import { Passenger } from '../../Models/passenger';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {
  transactiondata:any[]=[]
  
  customerId:number = 0

  today = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  constructor(private transactionservice:TransactionserviceService, private activateroute:ActivatedRoute) {
     
  }
  
  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('customerId')
    this.customerId = Number(tid)
   
    this.transactionservice.getTransactiondet(TransactionDetails.customerId).subscribe(
      (data:any)=>{
        this.transactiondata = data 
    }) 
  }
}