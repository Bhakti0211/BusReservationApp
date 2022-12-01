import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../../Services/busservice.service';
import { ActivatedRoute } from '@angular/router';
import { Ibus } from '../../Models/ibus';
import { Router } from '@angular/router';
import { Adminstore } from '../../Models/adminstore';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
  busdata: any = {
    busNo: '',
    rows: 10,
    cols: 4,
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

  constructor(private busservice:BusserviceService, private router:Router, private activateroute: ActivatedRoute) {}

  saveBus(bus:Ibus) {
    this.busdata = bus
    this.busservice.addBus(this.busdata).subscribe(
      ()=>{ 
        this.router.navigate(['/nav/list'])
      }
    )
  }

  ngOnInit(): void {
  }
}
