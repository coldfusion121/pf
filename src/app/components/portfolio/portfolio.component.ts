import { AfterViewInit, Component, ViewChildren, QueryList } from '@angular/core';
import {faGithub, faLinkedin, faGoogle, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  faWhatsapp = faWhatsapp
  faGithub   = faGithub   ;
  faLinkedin = faLinkedin ;
  faGoogle = faGoogle;
  
  @ViewChildren("progressbar, count, intro, expEd, spaceEven, aboutMeText") private childrens!: QueryList<any>;
  
  constructor() { }

  ngAfterViewInit(): void {

    let i = 0;
    let throttle = 1; // 0-1
    let htmlElements = this.childrens.map(element => element);
    let intro = htmlElements[0];
    let progressbar = htmlElements[1];
    let count = htmlElements[2];
    let expEd = htmlElements[3];
    let aboutMeText = htmlElements[4];
    let spaceEven = htmlElements[5];


    (function draw(this: any) {
      if (i <= 100) {
        let r = Math.random();
        requestAnimationFrame(draw);
        progressbar.nativeElement.style.width = i + '%';
        count.nativeElement.innerHTML = Math.round(i) + '%';
        if (r < throttle) { // Simulate d/l speed and uneven bitrate
          i = i + r;
        }
      } else {
        progressbar.nativeElement.className += " done";
        count.nativeElement.className = "hide";
        spaceEven.nativeElement.className = "show";
        aboutMeText.nativeElement.className = "aboutMeText container";
        setTimeout(() => {
          progressbar.nativeElement.className = "hide";
          intro.nativeElement.className = "show";
          expEd.nativeElement.className = "spaceEven d-flex";
        }, 400);
      }
    })();
  }
}