import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit {
  positions: Array<string> = ['intro', 'aboutMe', 'eduExp', 'skills', 'contact'];
  currentPos: number = 0;
  constructor(private scroller:ViewportScroller) { }

  ngOnInit(): void {
    fromEvent(window,'mousewheel').pipe(debounceTime(300)).subscribe((event: any) => {
      if (event.deltaY >= 0){
          console.log('-1');
      } else {
          console.log('1');
      }
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    });
  }

  public scrollTo(pos: number): void {
    const newPlace = this.currentPos + pos;
    if (newPlace <= 4 && newPlace >= 0) {
      this.scroller.scrollToAnchor(this.positions[newPlace]);
    }
  }
}
