import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../../Services/busservice.service';
import { Adminstore } from '../../Models/adminstore';

@Component({
  selector: 'app-removebus',
  templateUrl: './removebus.component.html',
  styleUrls: ['./removebus.component.css']
})

export class RemovebusComponent implements OnInit {

  busNo: string = ''
  
  constructor(private busservice:BusserviceService, private activatedroute:ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const busNo = this.activatedroute.snapshot.paramMap.get('busNo')
    this.busNo = String(busNo)

    this.busservice.deleteBus(this.busNo).subscribe(
      ()=> this.router.navigate(['/list'])
    )
  }
}