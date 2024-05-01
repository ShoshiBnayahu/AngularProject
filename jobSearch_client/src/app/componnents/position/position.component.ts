import { Component, Input } from '@angular/core';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-position',
 
  templateUrl: './position.component.html',
  styleUrls: [ './position.component.scss']
})
export class PositionComponent {

@Input()
job:Job |null = null;
}
