import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "signIn",
    component:SignInComponent
  },
  {
    path: "details",
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
