import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './users/topnav/topnav.component';
import { HomeComponent } from './users/home/home.component';
import { AboutComponent } from './users/about/about.component';
import { GetStartedComponent } from './users/get-started/get-started.component';
import { LoginComponent } from './admin/login/login.component';
import { FooterComponent } from './users/footer/footer.component';
import { ApartmentDetailsComponent } from './users/apartment-details/apartment-details.component';
import { ApartmentComponent } from './users/apartment/apartment.component';
import { GetFooterComponent } from './users/get-footer/get-footer.component';
import { ApartmentListComponent } from './admin/apartment-list/apartment-list.component';
import { AddApartmentComponent } from './admin/add-apartment/add-apartment.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full'},
  { path: 'topnav', component: TopnavComponent, pathMatch: 'full'},
  {path:'home', component: HomeComponent,pathMatch:'full'},
  {path:'about', component: AboutComponent,pathMatch:'full'},
  {path:'get-started', component: GetStartedComponent,pathMatch:'full'},
  {path:'login', component: LoginComponent,pathMatch:'full'},
  {path:'footer', component: FooterComponent,pathMatch:'full'},
  {path:'apartment', component: ApartmentComponent,pathMatch:'full'},
  {path:'get-footer', component: GetFooterComponent,pathMatch:'full'},
  {path: 'apartment-list' , component: ApartmentListComponent, pathMatch: 'full'},
  {path: 'add-apartment' , component:  AddApartmentComponent , pathMatch: 'full'},
  {path: 'admin-profile' , component:   AdminProfileComponent , pathMatch: 'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
}
