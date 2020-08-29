import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements OnInit {

  @Input() items;
  @Output() active = new EventEmitter<number>();
  selected = 0;
  // items = ["Learning Services", "Enterprise Services"]
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(i) {
    this.active.emit(i);
    this.selected = i;
    
  }
}


