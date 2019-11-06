import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router ) { }
  isLoggedIn = false;
  isHome = false;
  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.isLoggedIn = true;
    
    if (this.router.url === "/")
      this.isHome = true;
  }

  onLogout() {
    this.authService.logout();
  }

  // onClickIcon() {
  //   this.isHidden = !this.isHidden
  // }

}
