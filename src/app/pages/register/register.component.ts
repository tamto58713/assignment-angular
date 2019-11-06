import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service"
import { User } from '../../user' 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  err
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  }
  constructor(private _router: Router, private _auth: AuthService, private title: Title) { 
    title.setTitle("Register")
  }

  ngOnInit() {
  }

  register(theUser: User) {
    this._auth.register(theUser).subscribe((data: any) => {
      this._router.navigate(['/login']);
    }, (err) => {
      this.err = true
    })
  }

}
