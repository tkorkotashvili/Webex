import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit { 
  error=false;
  guard=false;
  loginValue:any;
  passValue:any;
  form = new FormGroup({
    login : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  
  //  value:boolean;
  // // onUpdateLogin(event:any){
  //   this.login=event.target.value;
  // }
  // onUpdatePassword(event:any){
  //   this.password=event.target.value;
    
  // }
  onSubmit(){
    this.guard=true;
    this.loginValue=(this.form.value.login);
    this.passValue=(this.form.value.password);
    debugger
    if (this.loginValue=="admin"&&this.passValue=="admin"){
      
      this.dataService.changeMessage(this.guard);
  
      this.router.navigateByUrl('home');
    }
    else{
      this.error=true;
    }
    
    // if(this.login=="admin"&&this.form.value.login.password==="admin"){
    //   this.value;
    //   
    //  
    // }
    // else{
    //   this.value=false;
    //   this.dataService.changeMessage(this.value);
      
    // }
  }
  constructor( private router :Router, private dataService:DataService) { }

  ngOnInit(): void {
  
  }
}


