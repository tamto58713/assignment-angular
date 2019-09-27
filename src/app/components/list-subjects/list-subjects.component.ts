import { Component, OnInit } from '@angular/core';
import { subjects } from '../../subjects'

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {

  config: any;
  constructor() { 
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: 10
    }
  }
  
  listSubjects
  onGetFirstPage() {
    this.config = {...this.config, currentPage: 1}
  }

  onPrevPage() {
    if (this.config.currentPage > 1)
      this.config = {...this.config, currentPage: --this.config.currentPage}
  }
  onNextPage() {
    if (this.config.currentPage < (this.config.totalItems / this.config.itemsPerPage))
      this.config = {...this.config, currentPage: ++this.config.currentPage}
  }

  onGetLastPage() {
    this.config = {...this.config, currentPage: (this.config.totalItems / this.config.itemsPerPage)}
  }
  
  ceil(number) {
    return Math.ceil(number)
  }
  ngOnInit() {
    this.listSubjects = [...subjects]
  }

}
