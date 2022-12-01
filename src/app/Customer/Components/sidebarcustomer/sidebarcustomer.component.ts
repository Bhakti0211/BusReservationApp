import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebarcustomer',
  templateUrl: './sidebarcustomer.component.html',
  styleUrls: ['./sidebarcustomer.component.css']
})
export class SidebarcustomerComponent implements OnInit {

  custName: string = ''
  tabIndex = 0
  constructor(private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    var data = this.activateroute.snapshot.paramMap.get('custName')
    if(data != null) this.custName = data.toString();
  }
  onPress(index:number){
    this.tabIndex = index;
  }
 

}
