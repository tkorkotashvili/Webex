import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  @Input() check : boolean =true;
  target=undefined;
  contextmenu = false;
  contextmenuX : number = 0;
  contextmenuY : number = 0;
  temp:any;

  constructor(private http:HttpClient) { }


  //activates the menu with the coordinates
  onContextMenu(event){
    this.contextmenuX=event.clientX;
    this.contextmenuY=event.clientY;
    this.contextmenu=true;
    this.target = /*event.target || event.srcElement || */ event.currentTarget;
  
  }

//disables the menu
  disableContextMenu(){
  this.contextmenu= false;
  }
  
  ngOnInit(): void {
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      this.temp=data;
      
    });
  }

}
