import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

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
  constructor() { }

  ngOnInit(): void {
    this.carouselView = _.chunk(this.data[0], this.data);
 
    
  }

}
