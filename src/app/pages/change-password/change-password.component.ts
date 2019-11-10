import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private title: Title, private _router: Router) { 
    title.setTitle("Change Password")
  }

  ngOnInit() {
  }
  onClick() {
    alert("Updated!");
    this._router.navigate(["/"]);
  }

}
