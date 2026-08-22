import { Component } from '@angular/core';

interface Certification {
  name: string;
  date: string;
  detail: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      date: 'Jun 24, 2023',
      detail: 'Exam CLF-C01. Certification ID: KR6DTRX18MVQQKKJ.'
    },
    {
      name: 'Python for Data Science and Machine Learning Bootcamp',
      date: 'Sep 16, 2023',
      detail: 'Udemy. Completed coursework covering Python, data science, and machine learning.'
    }
  ];
}
