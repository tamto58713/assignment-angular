import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SideTopServerComponent } from './components/side-top-server/side-top-server.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoggedinBarComponent } from './components/loggedin-bar/loggedin-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AboutComponent } from './pages/about/about.component';
import { ListSubjectsComponent } from './components/list-subjects/list-subjects.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    HomeComponent,
    CarouselComponent,
    SideTopServerComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    LoggedinBarComponent,
    ChangePasswordComponent,
    AboutComponent,
    ListSubjectsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
