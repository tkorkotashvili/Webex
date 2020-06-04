import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuardGuard } from './sign-in/auth-guard.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "home",
    component:HomeComponent,
    canActivate:[AuthGuardGuard]
    
  },
  {
    path: "details/:id",
        component:DetailsComponent
  },
  {
    path: "",
    component:SignInComponent,

  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
