import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '././../../services/course.service'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
@Input() item;
  constructor(public activeModal: NgbActiveModal, private courseService: CourseService) {}

  ngOnInit(): void {
  }

  getCourseContent(doc) {
  this.courseService.getDocument(doc).subscribe((data) => {
  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = 'document.pdf';
  link.click();
})
  }

}
