import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
/* import { User } from './user'; */

const routes: Routes = [
  {path:"",redirectTo:"/register",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent,/* data:{data:'Kishor'} */},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
