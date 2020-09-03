import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { ReadMoreComponent } from 'src/app/components/read-more/read-more.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenViewHandler(event.target.innerWidth, window.outerWidth);
  }


  screenViewHandler(innerWidth, outerWidth) {
    // console.log(innerWidth, outerWidth);
    
    if (innerWidth <= 550 || outerWidth <= 550) {

      if (this.showItemPerPage != 1) {
        this.showItemPerPage = 1;
        this.teamView = _.chunk(this.team, this.showItemPerPage);
      }
    } else if (innerWidth <= 1016 || outerWidth <= 780) {

      if (!this.isSmallScreen) {
        this.breakpointService.isSmallScreen = true;
        this.isSmallScreen = true;
      }
      if (this.showItemPerPage != 2) {
        this.showItemPerPage = 2;
        this.teamView = _.chunk(this.team, this.showItemPerPage);
      }
    } else if (innerWidth <= 1200 && innerWidth >= 780) {
      this.isSmallScreen = false;
      this.breakpointService.isSmallScreen = false;
      if (this.showItemPerPage != 3) {
        this.showItemPerPage = 3;
        this.teamView = _.chunk(this.team, this.showItemPerPage);
      }

      // console.log(event.target.innerWidth);
    } else if (innerWidth > 1024 && innerWidth >= 780) {
      this.isSmallScreen = false;
      // this.breakpointService.isSmallScreen = false;
      if (this.showItemPerPage != 3) {
        this.showItemPerPage = 3;
        this.teamView = _.chunk(this.team, this.showItemPerPage);
      }
    }
  }
  
  constructor(private breakpointService: BreakpointService, private modalService: NgbModal) { }

  showItemPerPage;
  teamView = [];
  isSmallScreen;
  showMore(p) {
    const modalRef = this.modalService.open(ReadMoreComponent, { size: 'lg' });
    modalRef.componentInstance.person = p;
  }

  team = [
    {
      "name": "Abhijit Sen",
      "position": "Founder & CEO",
      "description": "With 28+ years of Industry experience including heading Delivery of Industry segments across geographies.",
      "photo": "../assets/people/abhijit.jpg",
      "details" : [{ "head" : "Competencies", "text" :[ "Business Development ~ Strategic Planning ~  Application Development & Maintenance Services ~ Testing Services ~ Customer Relationship Management ~ Operations ~ Team Building & Mentoring ~ Communication and Interpersonal Skills, Assertive Leadership & Team Management" ]} ,
                     {"head" : "Experience", "text" : [  "28 years of IT experience playing various roles. Computer Science Engineer by education has been always working for top companies of repute. Grown in ranks from Systems and Application programmer to Delivery Leadership role working through all the life cycle of IT industry.", 
                                                         "Was Associate Vice President at Infosys before moving out for his own venture. Was the Delivery Head for the Manufacturing Vertical and was also Development Center Head at multiple locations.",
                                                         "Over the years worked in various Industry Sectors: ISV, Hi-Tech, Auto, Semicon, Resources, Financials, Healthcare and Retail.",
                                                         "Handled Diverse talents as well as drove growth in different Geographies: Have handled 2500+ people working across multiple Development centers within India, China, Brazil, Mexico and in client locations at US, Canada, Brazil and Australia." ]
                        
                        
                        }
                    ]
    },
     {
        "name" : "Parijat Roy",
        "position" : "CTO",
        "description" : "Gold medalist in Computer Science from Jadavpur University, Parijat is an avid Machine Learning enthusiast and is working in various team science areas in top multinational technology company.",
        "photo" : "../assets/people/Parijat.png",
        "details" : [{ "head" : "Competencies", "text" : ["Software Development ~ Algorithmic Design ~ Data Science ~ Web development frameworks",
            "Parijat’s mission is to empower students and executives to learn and grow in a target oriented and meaningful manner. He believes that success is a never ending journey and his objective is to be a key contributor to others’ success in a fast paced environment.  Currently he is working with Microsoft in Analytics and Web Experiences.  He has 2 research publications at International Journal of Security & Digital Forensics (IJESDF) and Applications & Innovations in Mobile Computing (AIMoC)."
        ]
        }
            ]
    },
    {
      "name": "Suman Sasmal",
      "position": "Management Adviser",
      "description": "Suman Sasmal champions change in high-impact space today, after having led a global corporate career, spanning across 30 years.",
      "photo": "../assets/people/Suman.png",
      "details" : [{ "head" : "", "text" : ["His stint with IT Services made him work with some of the finest companies across continents, including a 3-year stint of running a company in Europe. At Infosys, he held several senior level positions: Head of Global Delivery for a billion-$ Healthcare, Insurance & Pharma business vertical, Head of Bangalore Development Centre, Global Head of Quality among others. He was identified as a top mentor in Infosys and was acknowledged by none other than NR Narayana Murthy. He has driven enterprise-level complex change programs involving 100,000+ talents, led large teams (12000+) across continents.",
                                              "He has taken keen interest to develop entrepreneurs in the last 2 years. He mentors start-ups at IIM Bangalore’s NSRCEL, the first-of-its-kind incubator in India. He also advises growth-stage start-ups, including women entrepreneurs with Goldman Sachs 10K program. He consults for ExO Works, a global advisory firm which helps large corporates to transition to an exponential organisation. His clientele includes large national and trans-national corporations."
        ]
                    }]
    },
    {
      "name": "Rina Sen",
      "position": "Director - HR, Admin",
      "description": "Masters in Computer Science with experience in Training, Quality Assurance, Product and Application development.",
      "photo": "../assets/people/Rina.jpg",
      "details" : [{ "head" : "", "text" : [  "Rina completed her Graduation in Computer Science and later did her Masters from Jadavpur University. She has had 12 years of global experience in software and product development and testing before she pursued her passion in the education sector.",
                                               "Since then, she has been involved in imparting training in various Computer Science subjects and is also involved in overall growth of talents. With 10 years of teaching experience, she has had a shining track record of creating high quality minds with a strong hold on concepts in various Computer domains."
        ]
                    }
                   ]
    },
    
    {
      "name": "Sumit Misra",
      "position": "Technology Advisor",
      "description": "Sumit has 26 years of experience in delivering IT projects globally. His field of expertise includes software architecture, electronic payment systems, team science, analytics and mining team streams.",
      "photo": "../assets/people/Sumit.jpg",
      "details" : [{ "head" : "", "text" : ["Sumit has 26 years of experience in delivering IT projects globally. His field of expertise includes software architecture, electronic payment systems, data science, analytics and mining data streams. He is TOGAF 8.1 certified architect. He has guided high performance innovation teams that went on to deliver payment platform at national level – Unified Payment Interface (UPI) from NPCI, Bharat Bill Payment System (BBPS).",
                                              "He has written number of blogs on electronic payments. His current research interests include data science and data mining. His important publications in data analytics are:",
                                              "1. “A dynamic model for short-term prediction of stream attributes”, Innovations in Systems and Software Engineering, Springer, Volume 13, Issue 4, pp 261–269, Dec 2017",
                                              "2. “Performance Comparison of Hadoop Based Tools with Commercial ETL Tools – A Case Study” in 2nd International Conference Big Data Analytics 2013, LCNS 8032 Springer, Dec 2013."
        ]
            }]
    },
   
  ]



  ngOnInit(): void {
    this.screenViewHandler(window.innerWidth, window.outerWidth);
    this.teamView = _.chunk(this.team, this.showItemPerPage);
  }

}
