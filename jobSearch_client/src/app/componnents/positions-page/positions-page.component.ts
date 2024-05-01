import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { positionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.scss']
})
export class PositionsPageComponent implements OnInit{
  constructor(private positionSvc:positionService, private actRouter:ActivatedRoute,private router:Router){
  }
  jobsforView:Job[] =[]
  ngOnInit(): void {
    // jobsforView= positionService אחת מן הפומקציות שב 
  // לפי הפילטןר המתאים...
  
    if (localStorage.getItem('user') === null) {
      alert('User not logged in! Please log in! ')
      this.router.navigate([`/login`])
    }
  }
}
