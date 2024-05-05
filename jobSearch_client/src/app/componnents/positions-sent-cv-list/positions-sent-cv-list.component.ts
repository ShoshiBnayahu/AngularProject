import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-positions-sent-cv-list',
  templateUrl: './positions-sent-cv-list.component.html',
  styleUrls: ['./positions-sent-cv-list.component.scss']
})
export class PositionsSentCVListComponent {
  @Input()
  positionsSentCv: string[] = []
}
