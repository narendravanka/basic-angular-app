import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path : '', component: LoginComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'home' , component: HomeComponent , children:[
    {
      path:'profile',
      component: ProfileComponent
    },
    {
      path : 'images',
      component:ImagesComponent
    },
    {
      path : 'table',
      component : TableComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
