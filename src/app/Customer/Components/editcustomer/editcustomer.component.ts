import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Icustomer } from '../../Models/icustomer';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  cdata:Icustomer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    dob: ''
  }
 
 
  constructor(private customerservice:CustomerserviceService, private activateroute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.customerservice.getCustomer(TransactionDetails.customerId).subscribe((data:Icustomer)=>{this.cdata = data})
  }
saveCust(cust:Icustomer){
  console.log(this.cdata)
  this.cdata = cust
  this.customerservice.editCustomer(this.cdata).subscribe(
    ()=>{
      alert("Records Edited")
     this.router.navigate(['/profile'])
    }
  )
}
GoToList() {
  this.router.navigate(['/profile']);
}

}