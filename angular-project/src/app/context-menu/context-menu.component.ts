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
  @Output() detailEvent = new EventEmitter<any>();
  @Output() isElement = new EventEmitter<any>();
  contextmenuX: any;
  contextmenuY: any;
  target: any;
  info:any;
  clickDetails = true;
  delete=0;


  constructor( private router: Router,private dataService:DataService) { }
  
  remove(){
    this.element.remove();
  } 

  onDetails(){
    this.clickDetails =false;
    this.info=this.data[this.element.id];
    this.clickDetails = true;
    this.isElement.emit(this.element);
    this.detailEvent.emit(this.info);
    this.dataService.changeMessage(this.info);
    this.router.navigateByUrl('details'+'/'+this.info.id);
    console.log(this.router);
    // this.router.navigateByUrl('details',{state: {data:this.info}});
    // this.router.navigateByUrl('details',{state: {data:this.info}}); ეს იყოს

    }
  ngOnInit(): void {
    }
  
  }
