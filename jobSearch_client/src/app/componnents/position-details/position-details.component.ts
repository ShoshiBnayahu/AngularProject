import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: [ './position-details.component.scss']
})
export class PositionDetailsComponent {
  @Input()
  jobDetails: any | null = null;
}
