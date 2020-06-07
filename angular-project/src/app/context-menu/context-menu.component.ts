import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})


export class ContextMenuComponent implements OnInit {
  @Input() x=0;
  @Input() y=0;
  @Input() element:any;
  @Input() data;
  contextmenuX: number;
  contextmenuY: number;
  info:any;

  constructor( private router: Router,private dataService:DataService) { }

  remove(){
    this.element.remove();
  } 

  onDetails(){
    this.info=this.data[this.element.id];
    this.router.navigateByUrl('details'+'/'+this.info.id);
    console.log(this.router);
    }
  ngOnInit(): void {
    }
  
  }
