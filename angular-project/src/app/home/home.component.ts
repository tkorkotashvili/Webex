import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {DataModel} from '../model/DataModel'
import { Data } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  @Input() check : boolean =true;
  target=undefined;
  temp$ :Observable<{}>;
  contextmenu = false;
  contextmenuX : number = 0;
  contextmenuY : number = 0;

  constructor(private http:HttpClient) { }


  onContextMenu(event){
    this.contextmenuX=event.clientX;
    this.contextmenuY=event.clientY;
    this.contextmenu=true;
    this.target = /*event.target || event.srcElement || */ event.currentTarget;
    
  }

  disableContextMenu(){
  this.contextmenu= false;
  }
  
  ngOnInit(): void {
  this.temp$=this.http.get<{}>("https://jsonplaceholder.typicode.com/users");
  }

}
