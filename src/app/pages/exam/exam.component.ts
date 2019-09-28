import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Location } from '@angular/common'; 
import { formatTime } from "../../services/formatTime"

import { ADBS } from "../../Quizs/ADBS"
import { ADAV } from "../../Quizs/ADAV"
import { ADTE } from "../../Quizs/ADTE"
import { ADUI } from "../../Quizs/ADUI"
import { ASNE } from "../../Quizs/ASNE"
import { CLCO } from "../../Quizs/CLCO"
import { DBAV } from "../../Quizs/DBAV"
import { DBBS } from "../../Quizs/DBBS"
import { GAME } from "../../Quizs/GAME"
import { HTCS } from "../../Quizs/HTCS"
import { INMA } from "../../Quizs/INMA"
import { JAAV } from "../../Quizs/JAAV"
import { JABS } from "../../Quizs/JABS"
import { JSPR } from "../../Quizs/JSPR"
import { LAYO } from "../../Quizs/LAYO"
import { MOWE } from "../../Quizs/MOWE"
import { PHPP } from "../../Quizs/PHPP"
import { PMAG } from "../../Quizs/PMAG"
import { VBPR } from "../../Quizs/VBPR"
import { WEBU } from "../../Quizs/WEBU"

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute, private location: Location, private _router: Router) {
    title.setTitle("Test")
  }

  listChoose = []
  listSubjects = []
  changed(choose, index) {
    this.listChoose[index] = choose
  }

  time = 60 * 60
  // Format: hh:mm:ss
  format(time) {
    return formatTime(time)
  }

  ngOnInit() {
    // Get id from url
    this.route.paramMap.subscribe(params => {
      let id = params.get('id').toLocaleUpperCase()
      switch (id) {
        case "ADAV": this.listSubjects = [...ADAV]
        break

        case "ADBS": this.listSubjects = [...ADBS]
        break

        case "ADTE": this.listSubjects = [...ADTE]
        break
        
        case "ADUI": this.listSubjects = [...ADUI]
        break
        
        case "ASNE": this.listSubjects = [...ASNE]
        break
        
        case "CLCO": this.listSubjects = [...CLCO]
        break
        
        case "DBAV": this.listSubjects = [...DBAV]
        break
        
        case "DBBS": this.listSubjects = [...DBBS]
        break
        
        case "GAME": this.listSubjects = [...GAME]
        break
        
        case "HTCS": this.listSubjects = [...HTCS]
        break
        
        case "INMA": this.listSubjects = [...INMA]
        break
        
        case "JAAV": this.listSubjects = [...JAAV]
        break
        
        case "JABS": this.listSubjects = [...JABS]
        break
        
        case "JSPR": this.listSubjects = [...JSPR]
        break
        
        case "LAYO": this.listSubjects = [...LAYO]
        break
        
        case "MOWE": this.listSubjects = [...MOWE]
        break
        
        case "PHPP": this.listSubjects = [...PHPP]
        break
        
        case "PMAG": this.listSubjects = [...PMAG]
        break
        
        case "VBPR": this.listSubjects = [...VBPR]
        break
        
        case "WEBU": this.listSubjects = [...WEBU]
        break
        default: this._router.navigate(["/"])
      }

    })

    this.listChoose = this.listSubjects.map((subjects) => {
      return 0
    })

    // decrease seconds
    setInterval(() => {
      --this.time 
    }, 1000)
  }

}
