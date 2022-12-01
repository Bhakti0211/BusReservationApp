import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../../Models/passenger';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passdetails: Passenger = {
    pId: 0, 
    tId: 0, 
    pName: '', 
    age: 0,
    adhaar: '',
    gender: ''
  }
  // seat_arr: string[] = TransactionDetails.seats
  seat_arr: string[] = TransactionDetails.seats
  cnt:number=0
  BusId:number=0
  seats:string[]=[]
  count:number=0
  passengerArray: Passenger[] = []
  constructor(private router:Router, private activateroute: ActivatedRoute ) {}

  ngOnInit(): void {
  }
  show(passdet:Passenger) {
    // alert("Submitted Successfully..!")
    
    // this.passdetails = passdet;
    console.log(this.passdetails)
    this.passengerArray.push(new Passenger(this.passdetails.pId, this.passdetails.tId, this.passdetails.pName, this.passdetails.age, this.passdetails.adhaar, this.passdetails.gender))
    this.cnt++;

    // resetting the passenger
    this.passdetails.pId=0 
    this.passdetails.tId=0 
    this.passdetails.pName=''
    this.passdetails.age=0
    this.passdetails.adhaar=''
    this.passdetails.gender=''

    if(this.cnt==this.seat_arr.length){
      TransactionDetails.passengers = this.passengerArray
      this.router.navigate(["/card"]);
    }
    else{
      //call the service to add passenger details in Passenger Table
      this.router.navigate(["/passdetails"]);
      // console.log(this.cnt)
    }
  }
}
