import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title="About"
  constructor(private titleService: Title ) { 
    titleService.setTitle("About")
  }
  myInfo = {
    firstName: "Tâm Tỏ",
    lastName: "Trần",
    birthday: "06/07/2000",
    phone: "355933881",
    email: "tamtotran5667@gmail.com",
    address: "Saigon",
  }
  ngOnInit() {
  }

}
