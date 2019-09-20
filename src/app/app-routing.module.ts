import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: "contact", component: ContactPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
