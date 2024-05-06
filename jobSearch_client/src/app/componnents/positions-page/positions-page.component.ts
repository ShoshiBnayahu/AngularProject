import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Field } from 'src/app/models/Field';
import { Job } from 'src/app/models/Job';
import { positionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.scss']
})
export class PositionsPageComponent implements OnInit {
  constructor(private positionSvc: positionService, private actRouter: ActivatedRoute, private router: Router) {
  }
  jobsforView: Job[] | any= []
  positionsSentCv: string[] = []

   ngOnInit(): void {
    if (localStorage.getItem('user') === null) {
      alert('User not logged in! Please log in! ')
      this.router.navigate([`/login`])
    }
    this.actRouter.params.subscribe(params => {
      let field = params['field'] || 'all'
      console.log(field);
      this.positionSvc.filterJobs(field, 'all').then(res=>
        this.jobsforView=res
      )      
    }
    )
    

    this.positionsSentCv = JSON.parse(localStorage.getItem('user')!).jobsSentCV;
  }

  filterChange($event: any) {
    let filterDetails = $event
    console.log(filterDetails);

    this.positionSvc.filterJobs(filterDetails.field, filterDetails.area).then(res=>
      this.jobsforView=res
    )   
 
  }

}
