import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  accStatus: Array<boolean> = [false, true, true];

  constructor() { }

  ngOnInit(): void {
  }

  public accordion(index: number): void {
    for (let i = 0; i < this.accStatus.length; i++) {
      if (index !== i) {
        this.accStatus[i] = true;
      }
      else {
        this.accStatus[i] = !this.accStatus[i];
      }
    }
    console.log(this.accStatus);
  }
}
