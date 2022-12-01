import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusserviceService } from '../../Admin/Services/busservice.service';
import { Isearchbus } from '../isearchbus';
import { TransactionDetails } from '../../Customer/Models/transaction-details';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {

  btn:boolean = TransactionDetails.showbtns

  searchquery: Isearchbus = {
    "source" : "",
    "destination" : "",
    "dDate" : "",
  }
  
  busNo:string = ''
  isShown:boolean =false;
  Buslist: any[] = []
  seatAvb: any[] = []

  constructor(private busservice: BusserviceService, private router: Router) { }

  ngOnInit(): void {
   
  }

  onSubmit() {
    this.busservice.searchBuses(this.searchquery).subscribe(
      data=> {  
        this.Buslist = data 
      }
    );
    // console.log(this.Buslist);
  }

  toggleshow() {
    this.isShown = !this.isShown;
  }
  
  onBook(busNo: string) {
    if(TransactionDetails.customerId == undefined) {
      alert("You have to Sign In to reserve your seat!")
      return
    }
    this.router.navigate(['/sbook/'+busNo]);
  }
}
