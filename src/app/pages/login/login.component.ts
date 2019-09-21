import { Component, OnInit } from '@angular/core';
import { User } from '../../user'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(theUser: User) {
    console.log(theUser)
    this.authService.login(theUser).subscribe(data => {
      this._router.navigate(['/contact']);
      localStorage.setItem('user', JSON.stringify(data));
    });
  }

}
