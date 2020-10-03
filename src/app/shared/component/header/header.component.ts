import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrollFormComponent } from 'src/app/components/enroll-form/enroll-form.component';
import { AboutComponent } from 'src/app/components/about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [trigger('fade', [

    transition('void => *', [
      style({
        opacity: 0,
        height: 0
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
  popover = false;
  viewSideBar: boolean = false;
  constructor(private router: Router, private modalService: NgbModal) { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // console.log(window.pageYOffset);

    if (window.pageYOffset > 550 && window.innerWidth > 890) {
      let element = document.getElementById('navbar');
      //  element.classList.remove('contain'); 
      element.classList.add('sticky');
    } else if (window.pageYOffset < 10 && window.innerWidth > 890) {
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
    this.router.navigate(['/']).then(res => {
      this.closeNav();
      document.scrollingElement.scroll({
        top: pos,
        behavior: 'smooth'
      })
    })
  }

  openmodel() {
    const modalRef = this.modalService.open(EnrollFormComponent, { size: 'lg', backdrop: "static" });
    // modalRef.componentInstance.person = p;
  }

  openAboutModal() {
    const modalRef = this.modalService.open(AboutComponent, { size: 'lg', backdrop: "static" });
  }

  
  scrollToPos(e) {
    let element, topPos;
    element = document.getElementById(e);
    this.closeNav();
    if(element) {
      topPos = element.getBoundingClientRect().top + window.scrollY - 140;
    }
     
    if(this.router.routerState.snapshot.url != '/') {
      console.log(this.router.routerState.snapshot.url);
      this.router.navigate(['/']).then(res => {
        element = document.getElementById(e);
        topPos = element.getBoundingClientRect().top + window.scrollY -140;
        document.scrollingElement.scroll({
          top: topPos,
          behavior: 'smooth'
        })
      });
    } else {
      document.scrollingElement.scroll({
        top: topPos,
        behavior: 'smooth'
      })
    } 
  }

  showPopOver() {
    this.popover = true;
}
   hidePopOver() {
    this.popover = false;
  }

}
