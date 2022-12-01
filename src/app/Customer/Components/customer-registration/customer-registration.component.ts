import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Icustomer } from '../../Models/icustomer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  cdata: Icustomer = {
      customerId: 0,
      firstName: "",
      lastName: "",
      gender: "",
      mobile: "",
      email: "",
      password: "",
      dob:""
  }
  constructor(private customerservice: CustomerserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.customerservice.postCustomer(this.cdata).subscribe (
      ()=>{ 
        alert('Record saved successfully')
        this.router.navigate(['/sidebarcust', {custName: this.cdata.firstName}])    
      }
    )
  }
}//custName