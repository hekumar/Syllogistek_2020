import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery = [];
  activeId = "1";
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 21; index++) {
     this.gallery.push(String(index + 1))
      }
  }

  view(id) {
this.activeId=id;
  }

  // gallery1 = [];
  // gallery2 = [];
  // gallery3 = [];
  // constructor() { }

  // ngOnInit(): void {
  //   for (let index = 0; index < 7; index++) {
  //    this.gallery1.push(String(index + 1));
  //    this.gallery2.push(String(index + 2));
  //    this.gallery3.push(String(index + 3));
  //     }
  // }

  

}
