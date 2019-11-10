import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { SideTopServerComponent } from './components/side-top-server/side-top-server.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedinBarComponent } from './components/loggedin-bar/loggedin-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AboutComponent } from './pages/about/about.component';
import { ListSubjectsComponent } from './components/list-subjects/list-subjects.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExamComponent } from './pages/exam/exam.component';
import { ChangeProfileComponent } from './pages/change-profile/change-profile.component';
import { QandAComponent } from './pages/qand-a/qand-a.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListExamComponent } from './pages/list-exam/list-exam.component';
import { ResultComponent } from './pages/result/result.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    HomeComponent,
    SideTopServerComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    LoggedinBarComponent,
    ChangePasswordComponent,
    AboutComponent,
    ListSubjectsComponent,
    PaginationComponent,
    ExamComponent,
    ChangeProfileComponent,
    QandAComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    ListExamComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
