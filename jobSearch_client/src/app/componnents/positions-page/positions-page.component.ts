// Import necessary dependencies and modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // For routing functionality
import { Field } from 'src/app/models/Field'; // Importing models
import { Job } from 'src/app/models/Job';
import { positionService } from 'src/app/services/position.service'; // Importing service

// Component decorator with metadata
@Component({
  selector: 'app-positions-page', // Component selector
  templateUrl: './positions-page.component.html', // Template URL
  styleUrls: ['./positions-page.component.scss'] // Styles URL
})
export class PositionsPageComponent implements OnInit { // Component class implementation, implementing OnInit interface
  
  constructor(private positionSvc: positionService, private actRouter: ActivatedRoute, private router: Router) { // Constructor with dependency injection for services and router
    
  }

  jobsforView: Job[] | any= [] // Array to store jobs for view
  positionsSentCv: string[] = [] // Array to store positions where CVs were sent

  ngOnInit(): void { // OnInit lifecycle hook, runs when component initializes
    
    // Check if user is logged in using local storage
    if (localStorage.getItem('user') === null) {
      alert('User not logged in! Please log in! ')
      this.router.navigate([`/login`]) // Redirect to login page if user is not logged in
    }

    // Subscribe to route parameters to get filter details
    this.actRouter.params.subscribe(params => {
      let field = params['field'] || 'all' // Get field parameter from route or set it to 'all' by default
      console.log(field);
      
      // Call filterJobs method from position service to filter jobs based on field
      this.positionSvc.filterJobs(field, 'all').then(res =>
        this.jobsforView=res // Assign filtered jobs to jobsforView array
      )      
    });

    // Retrieve positions where CVs were sent from local storage
    this.positionsSentCv = JSON.parse(localStorage.getItem('user')!).jobsSentCV; // Parsing stored JSON string and assigning to positionsSentCv array
  }

  // Method to handle filter change event
  filterChange($event: any) {
    let filterDetails = $event // Get filter details from event
    console.log(filterDetails);

    // Call filterJobs method from position service to filter jobs based on filter details
    this.positionSvc.filterJobs(filterDetails.field, filterDetails.area).then(res =>
      this.jobsforView=res // Assign filtered jobs to jobsforView array
    )   
 
  }

}
