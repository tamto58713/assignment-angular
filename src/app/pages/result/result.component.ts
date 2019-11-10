import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private _router: Router, private _http: HttpClient) { }

  public pieChartLabels = ["Wrong", 'Right'];
  public pieChartData = [localStorage.getItem("wrong"), localStorage.getItem("right")];
  public pieChartType = 'pie';
  public pieChartOptions= {
    borderWidth: 100
  }
  ngOnInit() {
  
  }

}
