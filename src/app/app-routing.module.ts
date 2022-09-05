import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:SignUPComponent},
  // {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
