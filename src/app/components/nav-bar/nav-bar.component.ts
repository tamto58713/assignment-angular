import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isLoggedIn = false;
  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.isLoggedIn = !this.isHidden;

    
  }

  isHidden = true

  onClickIcon() {
    this.isHidden = !this.isHidden
  }

}
