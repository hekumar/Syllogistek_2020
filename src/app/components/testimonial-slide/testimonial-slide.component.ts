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
      name: "Hema Rangarajan",
      imageUrl: "../../../assets/testimony/Hema.jpg",
      designation: "Senior Analyst, Deloitte",
      comment: "Trainer was crisp and very patient to answer all the questions I had. It's surely a useful and very needful session where I could brush-up my skills.",
      course: "SQL"
    },
    {
      name: "Arindam Guha",
      imageUrl: "../../../assets/testimony/Arindam.jpg",
      designation: "AVP, Genpact",
      comment: "Excellent delivery and patience. All my best wishes for your future endeavor. Fortunate to get in touch with you (the trainer).",
      course: "Data Science"
    },
    {
      name: "Shikha Selot",
      imageUrl: "../../../assets/testimony/shikha.jpg",
      designation: "Project, Engneer, Wipro",
      comment: "I like the way trainer explained taking real time examples and took extra time to make us understand few topics that make things very easy to understand.",
      course: "Python"
    },
    {
      name: "Dinesh Loganathan",
      imageUrl: "../../../assets/testimony/dinesh.jpg",
      designation: "Job Seeker",
      comment: "There are too many good points to list. The course was very relevant to my job and will help me in more aspects of my work. I was really impressed by the trainer who made python so simple and teaching was awesome.",
      course: "Python"
    },
    {
      name: "Dipanjan Biswas",
      imageUrl: "../../../assets/testimony/Diapanjan.jpg",
      designation: "Technical Architect,Kolkata",
      comment: "Excellent and unique course! Just the right combination of the three elements - statistics, computer science and domain. Really a very enriching experience. Outstanding trainer.",
      course: "Data Science"
    },
    {
      name: "Prasanna Khobragade",
      imageUrl: "../../../assets/testimony/Prasanna-1.jpg",
      designation: "VP, Leading US Bank",
      comment: "Very good and great coverage! Overall very good and friendly. Liked all the attention.",
      course: "Data Science"
    },
    {
      name: "K Siddhartha Reddy",
      imageUrl: "../../../assets/testimony/Siddharth.jpg",
      designation: "B Tech 2nd Year Student",
      comment: "The sessions were very interactive and the best thing about the trainer was on spot doubt clarifications. Hope it would have lasted longer.",
      course: "Python Internship"
    },
    {
      name: "K Rahul",
      imageUrl: "../../../assets/testimony/Rahul.jpg",
      designation: "B Tech 4th Year Student",
      comment: "The trainer was very active and gave attention to each and every student. Very good support from the staff.",
      course: "Data Science"
    }
  ];

  ngOnInit(): void {
  }

}
