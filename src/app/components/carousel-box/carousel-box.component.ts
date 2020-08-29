import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as _ from 'lodash';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BreakpointService } from '../../services/breakpoint.service';

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}
@Component({
  selector: 'app-carousel-box',
  templateUrl: './carousel-box.component.html',
  styleUrls: ['./carousel-box.component.scss'],
  animations: [trigger('list1', [

    transition('void => *', [
      style({
        opacity: 0,
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(200, style({
        opacity: 0
      }))
    ])
  ])
  ]
})
export class CarouselBoxComponent implements OnInit {
  showItemPerPage = 4;
  isSmallScreen = false;
  SCREEN_SIZE :SCREEN_SIZE; 
  @Input() boxContents: { title: string, pane: Array<string>, data: Array<[]> }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenViewHandler(event.target.innerWidth, window.outerWidth);
  }


  screenViewHandler(innerWidth, outerWidth) {
    if (innerWidth <= 780 || outerWidth <= 780) {

      if (!this.isSmallScreen) {
        this.breakpointService.isSmallScreen = true;
        this.isSmallScreen = true;
      }
    } else if (innerWidth <= 1024 && innerWidth >= 780) {
      this.isSmallScreen = false;
      this.breakpointService.isSmallScreen = false;
      if (this.showItemPerPage != 3) {
        this.showItemPerPage = 3;
        this.selectedView = _.chunk(this.data[0], this.showItemPerPage);
      }

      // console.log(event.target.innerWidth);
    } else if (innerWidth > 1024) {
      this.isSmallScreen = false;
      this.breakpointService.isSmallScreen = false;
      if (this.showItemPerPage != 4) {
        this.showItemPerPage = 4;
        this.selectedView = _.chunk(this.data[0], this.showItemPerPage);
      }
    }
  }

  title = "";
  id = "";

  pane = [];
  // ["App development and maintenance", "Digital Marketing", "Statistics/USPs"];

  data = [];

  selectedView = [];

  constructor(private breakpointService: BreakpointService) { }

  selectedContent(e) {
    this.selectedView = _.chunk(this.data[e], this.showItemPerPage);
  }


  ngOnInit(): void {

    this.screenViewHandler(window.innerWidth, window.outerWidth);
    this.id = this.boxContents.title.replace(" ", "");
    this.title = this.boxContents.title;
    this.pane = this.boxContents.pane;
    this.data = this.boxContents.data; 

    this.selectedView = _.chunk(this.data[0], this.showItemPerPage);
  }

}
