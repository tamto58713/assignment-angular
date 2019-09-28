import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { AuthService } from "../../services/auth.service"
import { User } from '../../user' 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  }
  constructor(private _auth: AuthService, private title: Title) { 
    title.setTitle("Register")
  }

  ngOnInit() {
  }

  register(theUser: User) {
    console.log("Hey")
    this._auth.register(theUser).subscribe(data => {
      console.log(data)
    }, (err) => console.log(err))
  }

}
