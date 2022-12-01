import { Component, OnInit } from '@angular/core';
import { Icard } from '../../Models/icard';
import { Router } from '@angular/router';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})

export class CarddetailsComponent implements OnInit {
  tId: number = 0
  carddetails : Icard = {
    "cardNumber" : '',
    "cvv" : '',
    "expiry" : ""
  }
  seatcost: number=0
  totcost : number=0

  constructor(private router:Router) { }

  Show(card:Icard){
    alert("Payment Done Successfully..!")
    TransactionDetails.cardNumber = this.carddetails.cardNumber
    TransactionDetails.tId = this.tId

    this.router.navigate(['summary']);
  }

  ngOnInit(): void {
    this.totcost = TransactionDetails.seatCost*TransactionDetails.seatCount;
    TransactionDetails.totalCost = this.totcost
  }
}