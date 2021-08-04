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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
