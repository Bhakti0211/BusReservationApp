import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../Models/icustomer';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Router } from '@angular/router';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
  logindata:Icustomer={
    customerId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    dob: ''
  }
  constructor(private customerservice: CustomerserviceService,private router: Router ) { }


  ngOnInit(): void {
    TransactionDetails.showbtns = false
  }

  logincust(){
    this.customerservice.loginCustomer(this.logindata).subscribe(
      data=>{
        if(data)
        {
          alert("Welcome")
          TransactionDetails.customerId = data.customerId
          TransactionDetails.custFirstName = data.firstName
          TransactionDetails.custLastName = data.lastName
          TransactionDetails.customerContact = data.mobile
          TransactionDetails.email = data.email
          TransactionDetails.password = data.password
          this.router.navigate(['/sidebarcust', {custName: data.firstName}])
        }
        // console.log("Error")
      }
    )
  }

}
