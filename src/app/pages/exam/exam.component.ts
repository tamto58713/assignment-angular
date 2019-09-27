import { Component, OnInit } from '@angular/core';
import { ADAV } from "../../Quizs/ADAV"
import { formatTime } from "../../services/formatTime"
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  listSubjects = [...ADAV]
  constructor() { }
  id = "ADAV"
  listChoose = []

  changed(choose, index) {
    this.listChoose[index] = choose
  }

  time = 60 * 60

  format(time) {
    return formatTime(time)
  }
  ngOnInit() {
    this.listChoose = this.listSubjects.map((subjects) => {
      return 0
    })

    setInterval(() => {
      --this.time 
    }, 1000)
  }

}
