import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-testimonial-slide',
  templateUrl: './testimonial-slide.component.html',
  styleUrls: ['./testimonial-slide.component.scss'],
  
})
export class TestimonialSlideComponent implements OnInit {

  constructor() { }

  testimonials = [
    {
      name: "Shikha Selot",
      imageUrl: "../../../assets/user.png",
      designation: "Project engineer in an IT firm",
      comment: "I like the way trainer explained taking real time examples and took extra time to make us understand few topics that makes things  very easy to understand",
      course: "Python"
    },
    {
      name: "Hemant Kumar",
      imageUrl: "../../../assets/user.png",
      designation: "Software engineer in an IT firm",
      comment: "I like the way trainer explained taking real time examples and took extra time to make us understand few topics that makes things  very easy to understand",
      course: "Java"
    },
    {
      name: "Parijat Roy",
      imageUrl: "../../../assets/user.png",
      designation: "Project Manager in an IT firm",
      comment: "I like the way trainer explained taking real time examples and took extra time to make us understand few topics that makes things  very easy to understand",
      course: "Java Script"
    }
  ];

  ngOnInit(): void {
  }

}
