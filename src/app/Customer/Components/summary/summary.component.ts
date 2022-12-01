import { Component, OnInit } from '@angular/core';
import { ICreatetransactionrequest } from '../../Models/icreatetransactionrequest';
import { Passenger } from '../../Models/passenger';
import { TransactionDetails } from '../../Models/transaction-details';
import { TransactionserviceService } from '../../Services/transactionservice.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  createTransactionRequest: ICreatetransactionrequest = {
    tId: 0,
    busId: 0,
    totalCost: 0,
    customerId: 0,
    dateOfBooking: '',
    seats: [],
    passengers: []
  }

  customerId: number = TransactionDetails.customerId
  busId: number = TransactionDetails.busId
  seatCount: number = TransactionDetails.seatCount
  seats: string[] = TransactionDetails.seats
  passengers: Passenger[] = TransactionDetails.passengers
  totalCost: number = TransactionDetails.totalCost

  source: string = TransactionDetails.source
  destination: string = TransactionDetails.destination
  dTime: string = TransactionDetails.dTime
  aTime: string = TransactionDetails.aTime
  busNo: string = TransactionDetails.busNo
  driverName: string = TransactionDetails.driverName
  driverContact: number = TransactionDetails.driverContact
  pickup: string = TransactionDetails.pickup
  typeOfBus: string = TransactionDetails.typeOfBus
  distance: number = TransactionDetails.distance

  cardNumber: string = TransactionDetails.cardNumber

  custFirstName: string = TransactionDetails.custFirstName
  custLastName: string = TransactionDetails.custLastName
  customerContact: string = TransactionDetails.customerContact
  email: string = TransactionDetails.email

  constructor(private transactionservice: TransactionserviceService) {}

  ngOnInit(): void {
    // create a transaction here
    this.createTransactionRequest.tId = TransactionDetails.tId
    this.createTransactionRequest.busId = TransactionDetails.busId
    this.createTransactionRequest.totalCost = TransactionDetails.totalCost
    this.createTransactionRequest.customerId = TransactionDetails.customerId

    this.createTransactionRequest.seats = TransactionDetails.seats
    // var date = new Date()
    // date.toDateString();
    this.createTransactionRequest.dateOfBooking = "2022-08-15T12:45:56"
    
    TransactionDetails.passengers.forEach(pass => {
      pass.tId = TransactionDetails.tId
      this.createTransactionRequest.passengers.push(pass)
    });
    
    this.transactionservice.createTransaction(this.createTransactionRequest).subscribe(
      () => alert('Transaction is Successfull!')
    )
  }
}