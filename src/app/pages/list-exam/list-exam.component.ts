import { Component, OnInit } from '@angular/core';
import { subjects } from "../../subjects"

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements OnInit {

  constructor() { }
  listSubjects
  ngOnInit() {
    this.listSubjects = [...subjects]
  }

}
