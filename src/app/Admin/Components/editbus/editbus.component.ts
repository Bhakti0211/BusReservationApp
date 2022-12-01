import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../../Services/busservice.service';
import { Ibus } from '../../Models/ibus';
import { Adminstore } from '../../Models/adminstore';

@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrls: ['./editbus.component.css']
})

export class EditbusComponent implements OnInit {
  busdata: Ibus = {
    busId:0,
    busNo: '',
    rows: 0,
    cols: 0,
    dTime: '',
    aTime: '',
    pickup: '',
    seatCost: 0,
    driverName: '',
    driverContact: 0,
    typeOfBus: '',
    source: '',
    destination: '',
    distance: 0,
  }

  busNo: string = ''
  seatAvb: any
  constructor(private busservice:BusserviceService, private activatedroute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const busNo = this.activatedroute.snapshot.paramMap.get('busNo')
    this.busNo = String(busNo)

    this.busservice.getBus(this.busNo).subscribe((data:Ibus)=>{
      this.busdata=data
      this.busservice.avbSeates(this.busNo).subscribe(
        (data:any)=>{
          this.seatAvb = data
        }
      )
    })
  }

  saveBus(bus:Ibus){
    this.busdata = bus
    this.busservice.editBus(this.busdata).subscribe(
      ()=>{
        this.router.navigate(['/nav'])
      }
    )
  }

  GoToList() {
    this.router.navigate(['/nav']);
  }
}
