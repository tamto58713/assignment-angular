import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AboutComponent } from './pages/about/about.component';
import { ExamComponent } from './pages/exam/exam.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: "about", component: AboutComponent},
  { path: "contact", component: ContactComponent},
  { path: "setting/security", component: ChangePasswordComponent},
  { path: "test", component: ExamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
