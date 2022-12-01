import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { TransactionDetails } from '../../Models/transaction-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePassQuery : any  = {
    customerId: 0,
    oldPassword:'',
    newPassword:''
  }
  confirmPass: string = ''

  constructor(private customerservice: CustomerserviceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.changePassQuery.customerId = TransactionDetails.customerId
    this.changePassQuery.oldPassword = TransactionDetails.password
    if(this.confirmPass != this.changePassQuery.newPassword) {
      alert("Entered passwords do not match")
      return
    }
    if(TransactionDetails.password == this.changePassQuery.newPassword) {
      alert("New Password is same as your Old Password, Try some new combination!")
      return
    }
    console.log(this.changePassQuery)

    this.customerservice.changePass(this.changePassQuery).subscribe(
      ()=>{
        alert("Password Changed Successfuly")
      }
    )
  }
}
