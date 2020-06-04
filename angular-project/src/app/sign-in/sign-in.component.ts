import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login="username"
  password="password";  
  value:boolean;
  onUpdateLogin(event:any){
    this.login=event.target.value;
  }
  onUpdatePassword(event:any){
    this.password=event.target.value;
    
  }
  onSubmit(){
    debugger
    if(this.login=="admin"&&this.password=="admin"){
      this.value=true;
      this.dataService.changeMessage(this.value);
      this.router.navigateByUrl('home');
    }
    else{
      this.value=false;
      this.dataService.changeMessage(this.value);
    }
  }
  constructor( private router :Router, private dataService:DataService) { }

  ngOnInit(): void {
    
  }
  }
  


