import { Component, OnInit, Input } from '@angular/core';
import {ShContextMenuModule} from 'ng2-right-click-menu'

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  delete=false;
  remove(){
    this.delete=true;
  }
  constructor() { }
  @Input()  x=0;
  @Input()  y=0;
  ngOnInit(): void {

    }
  
  }
