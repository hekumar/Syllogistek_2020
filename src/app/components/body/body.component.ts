import { Component, OnInit } from '@angular/core';
import { carousalData1, carousalData2 } from '../../courses';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  pane1Items = ["Learning Services", "Enterprise Services"];
  subPane1 = ["School Students", "Under Graduates", "Technocrats"];
  subPane2 = ["App development and maintenance", "Digital Marketing"];
  selectedSubPane = this.subPane1;

  data1 = {
    title: this.pane1Items[0],
    pane: this.subPane1,
    data: carousalData1
 }
  data2 = {
    title: this.pane1Items[1],
    pane: this.subPane2,
    data: carousalData2
  }

  selectedContent(e) {

    if (e == 0) {
      this.selectedSubPane = this.subPane1;
    } else {
      this.selectedSubPane = this.subPane2;
    }

  }

}
