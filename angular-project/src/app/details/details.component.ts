import { Component, OnInit, Input } from '@angular/core';
import { ContextMenu } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details:any;
  element:any;
  reciveDelete($event){
    debugger
    this.details=$event;
  }
  reciveElement($event){
    this.element=$event;
  }


  constructor() { }

  ngOnInit(): void {
    
  }

}
