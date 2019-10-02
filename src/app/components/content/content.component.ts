import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }
  subjects = [
    {
      id: 1,
      name: "Android",
      class: "devicon-android-plain-wordmark",
    },
    {
      id: 2,
      name: "ASP.NET",
      class: "devicon-dot-net-plain-wordmark"
      
    },
    {
      id: 3,
      name: "Java",
      class: "devicon-java-plain-wordmark"
    },
    {
      id: 4,
      name: "HTML5",
      class: "fab fa-html5"
    },
    {
      id: 5,
      name: "CSS3",
      class: "fab fa-css3"
    },
    {
      id: 6,
      name: "PHP",
      class: "fab fa-php"
    },
    {
      id: 7,
      name: "Database",
      class: "fas fa-database"
    }
  ]
  ngOnInit() {
  }

}
