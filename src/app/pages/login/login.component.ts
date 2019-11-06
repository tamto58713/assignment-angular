import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { User } from '../../user'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup

  user: User = {
    email: '',
    password: ''
  };
  constructor(private title: Title, private authService: AuthService, private _router: Router, private fb: FormBuilder) { 
    this.createForm();
    title.setTitle("Login")
  }

  createForm() {
    this.ngForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  err = false;
  ngOnInit() {
    if (this.authService.isAuthenticated())
      this._router.navigate(['/'])
  }

  login(theUser: User) {
    this.authService.login(theUser).subscribe((data: any )=> {
        if (data.err) 
          this.err = true;
        else if (data.email) {
          this._router.navigate(['/'])
          localStorage.setItem('_id', JSON.stringify(data._id));
        }
    }, err => {
      console.log("err")
    });
  }

}
