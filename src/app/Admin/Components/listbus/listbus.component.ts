import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../../Services/busservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {
 
  Buslist: any[] = []
  constructor(private busservice:BusserviceService, public activatedroute:ActivatedRoute) {
    this.busservice.getBusList().subscribe(data=>{this.Buslist=data})
   }
  
  ngOnInit(): void {
    
  }
}
