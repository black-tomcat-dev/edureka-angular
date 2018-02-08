import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { Module2Component } from './components/module2/module2.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClockComponent } from './components/clock/clock.component';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'blog', component:BlogComponent},
  {path:'module2', component:Module2Component},


]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Module2Component,
    BlogComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
