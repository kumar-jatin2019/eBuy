import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:ProductInfoComponent},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUPComponent},
   {path:'home', component:HomeComponent},
   {path:'cart', component:CartComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
