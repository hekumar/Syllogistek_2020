import { Component, OnInit } from '@angular/core';
import { EnrollFormComponent } from '../enroll-form/enroll-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enterprise-services',
  templateUrl: './enterprise-services.component.html',
  styleUrls: ['./enterprise-services.component.scss']
})
export class EnterpriseServicesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openmodel() {
    const modalRef = this.modalService.open(EnrollFormComponent, { size: 'lg', backdrop: "static" });
    // modalRef.componentInstance.person = p;
  }

}
