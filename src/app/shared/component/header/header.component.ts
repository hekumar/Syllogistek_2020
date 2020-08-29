import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[trigger('fade', [

      transition('void => *', [
        style({
          opacity: 0,
          height:0
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(200, style({
          opacity: 0
        }))
      ])
    ])
    ]
})
export class HeaderComponent implements OnInit {

  viewSideBar : boolean = false;
  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // console.log(window.pageYOffset);
    
     if (window.pageYOffset > 550 && window.innerWidth > 890) {
       let element = document.getElementById('navbar');
      //  element.classList.remove('contain'); 
       element.classList.add('sticky');
     } else if(window.pageYOffset < 10 && window.innerWidth > 890){
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
        // element.classList.add('contain');
     }
  }

  ngOnInit(): void {
  }

  openNav() {
    this.viewSideBar = true;
  }
  closeNav() {
    this.viewSideBar = false;
  }

  scrollToPos_sm(pos) {
    // console.log(window.innerHeight, window.outerHeight);
    console.log(document.getElementById('EServices'));
    
    this.closeNav();
    document.scrollingElement.scroll({
      top: pos,
      behavior: 'smooth'
    })
  }
  scrollToPos(e) {
    this.closeNav();
    let element = document.getElementById(e);
    var topPos = element.getBoundingClientRect().top + window.scrollY - 140;
    document.scrollingElement.scroll({
      top: topPos,
      behavior: 'smooth'
    })
   
  }

}
