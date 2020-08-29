import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';
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
    console.log(innerWidth, outerWidth);
    
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
      if (this.showItemPerPage != 4) {
        this.showItemPerPage = 4;
        this.teamView = _.chunk(this.team, this.showItemPerPage);
      }
    }
  }
  constructor(private breakpointService: BreakpointService) { }

  showItemPerPage;
  teamView = [];
  isSmallScreen;

  team = [
    {
      "name": "Abhijit Sen",
      "position": "Founder & CEO",
      "description": "With 28+ years of Industry experience including heading Delivery of Industry segments across geographies.",
      "photo": "../assets/people/abhijit.jpg"
    },
     {
        "name" : "Parijat Roy",
        "position" : "CTO",
        "description" : "Gold medalist in Computer Science from Jadavpur University, Parijat is an avid Machine Learning enthusiast and is working in various team science areas in top multinational technology company.",
        "photo" : "../assets/people/Parijat.png"
    },
    {
      "name": "Rina Sen",
      "position": "Director - HR, Admin",
      "description": "Masters in Computer Science with experience in Training, Quality Assurance, Product and Application development.",
      "photo": "../assets/people/Rina.jpg"
    },
    {
      "name": "Suman Sasmal",
      "position": "Management Adviser",
      "description": "Suman Sasmal champions change in high-impact space today, after having led a global corporate career, spanning across 30 years.",
      "photo": "../assets/people/Suman.png"
    },
    {
      "name": "Sumit Misra",
      "position": "Technology Advisor",
      "description": "Sumit has 26 years of experience in delivering IT projects globally. His field of expertise includes software architecture, electronic payment systems, team science, analytics and mining team streams.",
      "photo": "../assets/people/Sumit.jpg"
    },
   
  ]



  ngOnInit(): void {
    this.screenViewHandler(window.innerWidth, window.outerWidth);
    this.teamView = _.chunk(this.team, this.showItemPerPage);
  }

}
