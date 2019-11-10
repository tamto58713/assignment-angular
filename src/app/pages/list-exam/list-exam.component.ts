import { Component, OnInit } from '@angular/core';
import { subjects } from "../../subjects"

import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements OnInit {

  constructor(private _router: Router, private _auth: AuthService) { }
  listSubjects
  ngOnInit() {
    if (localStorage.getItem("_id"))
      this.listSubjects = [...subjects]
    else 
      this._router.navigate(["/login"]);
  }

}
