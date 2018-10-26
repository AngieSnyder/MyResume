import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work-experience',
  templateUrl: './my-work-experience.component.html',
  styleUrls: ['./my-work-experience.component.css']
})
export class MyWorkExperienceComponent implements OnInit {

  experience = [
    'UC Health: Clinc Coordinator, 2012-2018',
    'Kroger: Cashier, 2018',
    'ProScan Imaging: Data Manager, 2006-20012',
    'Village of Evendale: Recreation Clerk, ',
    'Skilled Care Pharmacy'
  ]

  constructor() { }

  ngOnInit() {
  }

}
