import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminstore } from '../../Models/adminstore';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})

export class NavadminComponent implements OnInit {
  
  adminName: string = Adminstore.firstName
  
  constructor(private router: Router) {}
   
  ngOnInit(): void {}
}
