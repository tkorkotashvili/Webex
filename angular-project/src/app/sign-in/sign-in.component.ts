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
  
  onSubmit(){
    debugger;
    this.loginValue=(this.form.value.login);
    this.passValue=(this.form.value.password);
    if (this.loginValue=="admin" && this.passValue=="admin"){
      localStorage.setItem("token","admin");
      debugger
      this.router.navigate(["home"]);
    }
    else{
      this.error=true;
    }
  }
  constructor( private router :Router, private dataService:DataService) { }

  ngOnInit(): void {
  
  }
}


