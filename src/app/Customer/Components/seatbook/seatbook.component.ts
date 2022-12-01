import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusserviceService } from '../../../Admin/Services/busservice.service';
import { Ibus } from '../../../Admin/Models/ibus';
import { SeatserviceService } from '../../Services/seatservice.service';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-seatbook',
  templateUrl: './seatbook.component.html',
  styleUrls: ['./seatbook.component.css']
})

export class SeatbookComponent implements OnInit {
  seatdata: any[]=[]
  seatmap: any[] = []
  
  selectedSeatsCount: number = 0
  selectedSeats: string[] = []
  busNo:string = ''
  
  onClick(clickedSeat: string ) {
    this.seatmap.forEach(object => {
      if(object.available!=0 && object.seatNo == clickedSeat) object.available = object.available == 1 ? 2 : 1
    });
  }

  onSubmit() {
    // reset the selected seats on confirmation
    this.selectedSeats = []
    this.selectedSeatsCount = 0
    this.seatmap.forEach(object => {
      var seatNo = object.seatNo
      if(object.available==2) {
        this.selectedSeats.push(seatNo)
        this.selectedSeatsCount += 1
      }}
    )
  }

  onNext() {
      TransactionDetails.seatCount = this.selectedSeatsCount
      TransactionDetails.seats = this.selectedSeats
      this.router.navigate(['/passdetails'])
  }

  constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute, private router:Router, private busservice: BusserviceService) { 
  }

  ngOnInit(): void {
    const busNo = this.activatedroute.snapshot.paramMap.get('busNo')
    this.busNo = String(busNo)

    this.busservice.getBus(this.busNo).subscribe((busdata:Ibus)=>{
      TransactionDetails.busId = busdata.busId
      TransactionDetails.source = busdata.source
      TransactionDetails.destination = busdata.destination
      TransactionDetails.dTime = busdata.dTime
      TransactionDetails.aTime = busdata.aTime
      TransactionDetails.busNo = busdata.busNo
      TransactionDetails.driverContact = busdata.driverContact
      TransactionDetails.driverName = busdata.driverName
      TransactionDetails.distance = busdata.distance
      TransactionDetails.pickup = busdata.pickup
      TransactionDetails.typeOfBus = busdata.typeOfBus
      TransactionDetails.seatCost = busdata.seatCost

      this.seatservice.getseats(busdata.busId).subscribe(
        (data:any[]) => {
          this.seatdata = data
          this.seatdata.forEach(data => {
            var detseat = {
              seatNo: data.seatNo,
              available : data.available ? 1 : 0
            }
            this.seatmap.push(detseat)
          })
        }
      )
    }) 
  } 
}