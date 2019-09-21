import { Component, OnInit } from '@angular/core';
import { subjects } from '../../subjects'

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {

  constructor() { }
  listSubjects
  ngOnInit() {
    this.listSubjects = [...subjects]
  }

}
