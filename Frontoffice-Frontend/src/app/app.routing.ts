import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {OurTeamComponent} from './our-team/our-team.component';
import {ProfilEmployeeComponent} from './profil-employee/profil-employee.component';
import {ProfilServiceComponent} from './profil-service/profil-service.component';
import {AppointmentListComponent} from './appointment-list/appointment-list.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'profil-employee/:id', component: ProfilEmployeeComponent},
    { path: 'profil-service/:id', component: ProfilServiceComponent},
    { path: 'liste-rendez-vous', component: AppointmentListComponent},
    { path: 'team', component: OurTeamComponent},
    { path: 'appointment', loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
