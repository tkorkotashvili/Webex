import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Delete = false;
  contextmenu = false;
      contextmenuX = 0;
      contextmenuY = 0;
      //activates the menu with the coordinates
      onrightClick(event){
        this.contextmenuX=event.clientX;
        this.contextmenuY=event.clientY;
        this.contextmenu=true;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
      
        console.log(idAttr);
    }
    //disables the menu
    disableContextMenu(){
      this.contextmenu= false;
    }
  
  temp:any;
  constructor(private http:HttpClient) { }
  @Input() check=true;
  
//todo
  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      this.temp=data;
      this.Delete=this.check;
    });
  }
  
}
