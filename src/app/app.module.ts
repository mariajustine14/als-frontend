import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './users/topnav/topnav.component';
import { FooterComponent } from './users/footer/footer.component';
import { HomeComponent } from './users/home/home.component';
import { AboutComponent } from './users/about/about.component';
import { GetStartedComponent } from './users/get-started/get-started.component';
import { ApartmentDetailsComponent } from './users/apartment-details/apartment-details.component';
import { LoginComponent } from './admin/login/login.component';
import { ApartmentComponent } from './users/apartment/apartment.component';
import { GetFooterComponent } from './users/get-footer/get-footer.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AddApartmentComponent } from './admin/add-apartment/add-apartment.component';
import { SideNavComponent } from './admin/side-nav/side-nav.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { ApartmentListComponent } from './admin/apartment-list/apartment-list.component';
import { UpdateApartmentComponent } from './admin/update-apartment/update-apartment.component';
import {  RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
  { path: '', component:ApartmentComponent },
  { path:'update-apartment/:id', component:UpdateApartmentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GetStartedComponent,
    ApartmentDetailsComponent,
    LoginComponent,
    ApartmentComponent,
    GetFooterComponent,
    AddComponent,
    AddApartmentComponent,
    SideNavComponent,
    AdminProfileComponent,
    ApartmentListComponent,
    UpdateApartmentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
