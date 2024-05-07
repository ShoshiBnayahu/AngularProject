import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; // Importing necessary modules and dependencies
import { ActivatedRoute, Router } from '@angular/router'; // For routing functionality
import { Field } from 'src/app/models/Field'; // Importing Field model
import { Job } from 'src/app/models/Job'; // Importing Job model
import { positionService } from 'src/app/services/position.service'; // Importing positionService

@Component({
  selector: 'app-position', // Component selector
  templateUrl: './position.component.html', // Template URL
  styleUrls: ['./position.component.scss'] // Styles URL
})
export class PositionComponent implements OnInit { // Component class implementation, implementing OnInit interface
  
  details: boolean = false; // Boolean flag to indicate if details are displayed

  constructor(private positionSVC: positionService, private actRouter: ActivatedRoute, private router: Router) {
    // Constructor with dependency injection for positionService, ActivatedRoute, and Router
  }

  @Input() // Input property to receive job details from parent component
  job: Job | null = null; // Variable to store job details, initialized as null

  ngOnInit(): void { // OnInit lifecycle hook, runs when component initializes
    // Subscribe to route URL changes
    this.actRouter.url.subscribe(u => 
      u.forEach(u2 => { if (u2.path.indexOf('details') >= 0) this.details = true; })); // Checking if 'details' path is present in URL to set details flag

    if (this.details) { // If details are displayed
      this.actRouter.params.subscribe(params => { // Subscribe to route parameters
        let positionId = params['positionId']; // Get positionId parameter from route
        // Fetch job details from server based on positionId
        this.positionSVC.getJobFromServer(positionId).subscribe((res: any) => {
          this.job = res; // Assign fetched job details to job variable
          console.log(this.job); // Log job details to console
        });
      });
    }
  }

  getField() { // Method to get job field
    if (this.job) // If job details exist
      return Field[this.job.jobField].toLowerCase(); // Return job field in lowercase
    return ''; // Return empty string if job details are null
  }

  sendCvClick() { // Method to handle CV send click event
    // Update user's jobs sent CV in local storage and navigate to positions page
    this.positionSVC.updateUserJobsSentCV(
      JSON.parse(localStorage.getItem('user')!).id, this.job!.jobName)
      .subscribe({
        next: (res: any) => {
          res.password = 'secret'; // Modify password property for security reasons
          localStorage.setItem('user', JSON.stringify(res)); // Update user details in local storage
          alert('Your CV sent successfully!'); // Show success message
          this.router.navigate(['/positions']); // Navigate to positions page
        },
        error: (error) => {
          console.error('Error updating JobsSentCV: ', error); // Log error to console
        }
      });
  }
}
