import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../../Services/transactionservice.service';

@Component({
  selector: 'app-bookingcancel',
  templateUrl: './bookingcancel.component.html',
  styleUrls: ['./bookingcancel.component.css']
})
export class BookingcancelComponent implements OnInit {
  tId: number = 0
  totalCost = 0
  constructor(private activatedroute: ActivatedRoute, private transactionservice: TransactionserviceService) { }

  ngOnInit(): void {
    var tId = this.activatedroute.snapshot.paramMap.get('tId')
    this.tId = Number(tId)
    
    this.transactionservice.cancelTransaction(this.tId).subscribe((data:any)=>{
      this.totalCost = data
      alert("Transaction is Calcelled and Refund of "+ this.totalCost+" is Initiated")
    })
  }
}
