import { Component, OnInit, Input } from '@angular/core';
import { DetailsModel} from '../model/DetailsModel'
import { DataService } from '../services/DataService';
import { Data, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { delay, share } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  personId:any;
  name:string;
  email:string;
  element:any;
  id:any;
  firstLetter:string;

  person$ :Observable<{}>;
  reciveElement($event:any){
    this.element=$event;
  }
  
  constructor(private route:ActivatedRoute,private http:HttpClient) {
  }
  ngOnInit(): void {
    
    this.personId =this.route.snapshot.paramMap.get('id');
    this.person$=this.http.get('https://jsonplaceholder.typicode.com/users/'+this.personId).pipe(share());
      // this.id=m.id;
      // this.name = m.name;
      // this.email = m.email;
      // this.firstLetter=this.name[0];
    // });
    // this.id=history.state.data.id; ესეც იყოს
    // this.name = history.state.data.name;
    // this.email = history.state.data.email;
  }

}
