import { Component, Input} from '@angular/core';
import { Job } from 'src/app/models/Job';
@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent {
  @Input()
  jobList: Job[] = []
}
