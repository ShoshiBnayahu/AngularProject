import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/Field';
import { positionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position-filter',
  templateUrl: './position-filter.component.html',
  styleUrls: ['./position-filter.component.scss']
})
export class PositionFilterComponent implements OnInit{
  constructor(private positionSVC: positionService) {

  } 

  fieldsList :(string|Field) []=[]
  field:string  =Field[Field.ALL].toLowerCase()
  areasList :(string) []=[]
  area:string = 'all'

  ngOnInit(): void {
    this.fieldsList=this.positionSVC.getFields();
    this.positionSVC.getAreas().subscribe((res: any) => {
    this.areasList=res;
  })
  
  }
  @Output ('filterChange') filterChange : EventEmitter<any> = new EventEmitter<any>()

  filter(){
    this.filterChange.emit( {field: this.field, area: this.area});
  }
 

}
