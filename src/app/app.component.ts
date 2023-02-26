import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { ViewportScroller, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit, AfterViewInit {
  positions: string[] = ['first', 'second', 'third', 'forth', 'fiveth', 'sixth'];
  currentPos: number = 0;
  @ViewChild('body') body: ElementRef | undefined;

  constructor(private scroller: ViewportScroller, @Inject(DOCUMENT) document: Document) {
  
  }
  ngAfterViewInit(): void {
    console.log(this.body);
  }


  
  ngOnInit(): void {
    fromEvent(window,'mousewheel').subscribe((event: any) => {
      if (event.deltaY >= 0){
        this.scrollUD(1);
      } else {
        this.scrollUD(-1);
      }
      //event.stopImmediatePropagation();
      //event.stopPropagation();
      //event.preventDefault();
    });
  }

  public scrollUD(pos: number): void {
    const newPlace:number = this.currentPos + pos;
    if (newPlace <= 5 && newPlace >= 0) {
      //this.scroller.scrollToAnchor(this.positions[newPlace]);
      const coord = document.getElementById(this.positions[newPlace])?.offsetTop;
      this.currentPos = newPlace;
      console.log(coord);
      if (this.body) {
        this.body.nativeElement.scrollTop = coord;
      }
    }
    console.log(this.positions[newPlace]);
    console.log(newPlace);
  }
}
