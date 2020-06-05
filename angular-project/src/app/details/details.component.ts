import { Component, OnInit, Input } from '@angular/core';
import { DetailsModel} from '../model/DetailsModel'
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name:string;
  email:string;
  element:any;
  id: number;
  firstLetter:string;
  
  reciveElement($event:any){
    this.element=$event;
  }
  constructor(private dataService:DataService) {
  }
  ngOnInit(): void {
    let details = this.dataService.currentMessage.subscribe(m=>{
      this.id=m.id;
      this.name = m.name;
      this.email = m.email;
      this.firstLetter=this.name[0];
    });
    // this.id=history.state.data.id; ესეც იყოს
    // this.name = history.state.data.name;
    // this.email = history.state.data.email;
  }

}
