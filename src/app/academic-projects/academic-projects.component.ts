import { Component } from '@angular/core';

interface Award {
  name: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.scss']
})
export class AcademicProjectsComponent {
  awards: Award[] = [
    {
      name: 'Spot Bonus',
      year: '2023',
      description: 'Recognized for contributions to building the carbon compiler for xUIKit and ensuring long-term compatibility for components at Google.'
    },
    {
      name: 'Impact Award',
      year: '2021',
      description: 'Acknowledged by Susan Brauns, GE HealthCare Director, for focused commitment to delivering Duke Release 1.x at GE HealthCare.'
    },
    {
      name: 'Bravo Award',
      year: '2020',
      description: 'Commended by Jeff Terry, CEO GE Clinical Command, for versatile development work characterized by high-quality output, effective collaboration with business teams, and unwavering commitment to the cross-functional team at GE HealthCare.'
    },
    {
      name: 'SNAP Award',
      year: '2013',
      description: 'Team Excellence Award for outstanding demonstration of ownership, global team coordination, and extraordinary technical abilities in successfully executing feature development and support activities for TEKELEC PIC 7.x releases at Aricent Technology.'
    }
  ];
}
