import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  
  @Input() person :Person;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

interface Person {
  name :string
  position : string
  description : string,
  photo : string,
    details : Array<{ head : string, text : string }>

}
