import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoadImgDirective } from './load-img.directive';



@NgModule({
  declarations: [LoadImgDirective],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
