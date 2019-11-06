import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-loggedin-bar',
  templateUrl: './loggedin-bar.component.html',
  styleUrls: ['./loggedin-bar.component.scss']
})
export class LoggedinBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
