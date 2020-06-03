import { Component, OnInit, Input } from '@angular/core';
import { DetailsModel} from '../model/DetailsModel'
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  t=100;
  details=new DetailsModel(1,"qasd","asd");
  name:string;
  email:string;
  element:any;
  id: number;
 
  constructor(private dataService:DataService) {
  }
  reciveDelete($event){
    debugger;
    console.log("hiiiiiiiii")
    // this.details=new DetailsModel($event.id,$event.userName,$event.userEmail);
  }
  reciveElement($event){
    this.element=$event;
  }

  ngOnInit(): void {
    let details = this.dataService.currentMessage.subscribe(m=>{
      debugger;
      this.id=m.id;
      this.name = m.name;
      this.email = m.email;
    });
    // this.id=history.state.data.id; ესეც იყოს
    // this.name = history.state.data.name;
    // this.email = history.state.data.email;
  }

}
