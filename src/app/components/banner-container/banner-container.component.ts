import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrollFormComponent } from '../enroll-form/enroll-form.component';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-banner-container',
  templateUrl: './banner-container.component.html',
  styleUrls: ['./banner-container.component.scss'],
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
export class BannerContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

}
