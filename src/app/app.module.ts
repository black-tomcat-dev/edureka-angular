import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { Module2Component } from './components/module2/module2.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClockComponent } from './components/clock/clock.component';
import { ProductComponent } from './components/products/products.component';

import { ProductFilter } from './components/products/product-filter.pipe';
import { StarComponent } from './components/star/star.component';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'blog', component:BlogComponent},
  {path:'module2', component:Module2Component},
  {path:'product', component:ProductComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Module2Component,
    BlogComponent,
    ClockComponent,
    ProductFilter,
    ProductComponent,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
