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
      this.isLoggedIn = !this.isHidden;
    
    if (this.router.url === "/")
      this.isHome = true;
  }

  isHidden = true

  onClickIcon() {
    this.isHidden = !this.isHidden
  }

}
