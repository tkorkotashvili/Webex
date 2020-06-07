import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DetailsComponent } from './details/details.component'
import * as common from '@angular/common';
import { DataService } from './services/DataService';
import { AuthGuardGuard } from './sign-in/auth-guard.guard';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    ContextMenuComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContextMenuModule,
    common.CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:  [DataService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
