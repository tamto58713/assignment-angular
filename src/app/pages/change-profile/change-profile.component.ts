import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent implements OnInit {

  constructor(private title: Title, private _http: HttpClient) { 
      title.setTitle("Your Profile")
   }

  ngOnInit() {
    this._http.put("/users", {}).subscribe((data: any) => {
      console.log(data)
    })
  }

}
