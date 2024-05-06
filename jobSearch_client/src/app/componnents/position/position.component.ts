import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Field } from 'src/app/models/Field';
import { Job } from 'src/app/models/Job';
import { positionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position',

  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  details: boolean = false
  constructor(private positionSVC: positionService, private actRouter: ActivatedRoute, private router: Router) {
  }

  @Input()
  job: Job | null = null;

  ngOnInit(): void {
    this.actRouter.url.subscribe(u =>
      u.forEach(u2 => { if (u2.path.indexOf('details') >= 0) this.details = true }))
    if (this.details) {
      this.actRouter.params.subscribe(params => {
        let positionId = params['positionId']
        this.positionSVC.getJobFromServer(positionId).subscribe((res: any) => {
          this.job = res;
          console.log(this.job);
        })
      })
    }
  }

  getField() {

    if (this.job)
      return Field[this.job.jobField].toLowerCase()
    return ''
  }



  sendCvClick() {
    this.positionSVC.updateUserJobsSentCV(
      JSON.parse(localStorage.getItem('user')!).id, this.job!.jobName)
      .subscribe({
        next: (res: any) => {
          res.password = 'secret';
          localStorage.setItem('user', JSON.stringify(res));
          alert('your CV sent successfully!');
          this.router.navigate(['/positions']);
        },
        error: (error) => {
          console.error('Error updating JobsSentCV: ', error);

        }

      });

  }
}
