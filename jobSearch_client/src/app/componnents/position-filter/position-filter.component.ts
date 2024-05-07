import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/Field'; // Importing Field model
import { positionService } from 'src/app/services/position.service'; // Importing positionService

@Component({
  selector: 'app-position-filter', // Component selector
  templateUrl: './position-filter.component.html', // Template URL
  styleUrls: ['./position-filter.component.scss'] // Styles URL
})
export class PositionFilterComponent implements OnInit { // Component class implementation, implementing OnInit interface

  constructor(private positionSVC: positionService) {
    // Constructor with dependency injection for positionService
  } 

  fieldsList :(string|Field) []=[] // Array to store list of fields
  field:string  =Field[Field.ALL].toLowerCase() // Default field value
  areasList :(string) []=[] // Array to store list of areas
  area:string = 'all' // Default area value

  ngOnInit(): void { // OnInit lifecycle hook, runs when component initializes
    // Fetching fields list from position service
    this.fieldsList = this.positionSVC.getFields(); 
    // Fetching areas list from position service
    this.positionSVC.getAreas().subscribe((res: any) => {
      this.areasList = res; // Assigning fetched areas list to areasList array
    });
  }

  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>(); // Event emitter for filter change

  // Method to emit filter change event
  filter() {
    this.filterChange.emit({ field: this.field, area: this.area }); // Emitting filter change event with field and area values
  }
}
