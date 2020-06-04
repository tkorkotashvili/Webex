import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login="username"
  password="password";  

  onUpdateLogin(event:any){
    this.login=event.target.value;
  }
  onUpdatePassword(event:any){
    this.password=event.target.value;
    
  }
  onSubmit(){
    if(this.login=="admin"&&this.password=="admin"){
      this.router.navigateByUrl('home');
    }
  }
  constructor( private router :Router) { }

  ngOnInit(): void {
    
  }
  }
  


