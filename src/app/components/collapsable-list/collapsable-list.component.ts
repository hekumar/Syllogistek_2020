import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapsable-list',
  templateUrl: './collapsable-list.component.html',
  styleUrls: ['./collapsable-list.component.scss']
})
export class CollapsableListComponent implements OnInit {
@Input() pane;
@Input() data;
@Input() id;

 carouselView = [];
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    this.carouselView = _.chunk(this.data[0], this.data);
 
    
  }

  openCourseModal(item) {
   
    const modalRef = this.modalService.open(CourseDetailsComponent, { size: 'xl', backdrop: "static" });
    modalRef.componentInstance.item = item;
}

}
