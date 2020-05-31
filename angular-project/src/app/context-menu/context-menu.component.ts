import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @Input()  x=0;
  @Input()  y=0;
  @Input() element:any;
  @Input() data;
  contextmenuX: any;
  contextmenuY: any;
  target: any;
  
  constructor() { }

  remove(){
    this.element.remove();
  }
  onDetails(){
    let info=this.data[this.element.id]
    console.log(info.id,info.name,info.email)
  }

  
  ngOnInit(): void {

    }
  
  }
