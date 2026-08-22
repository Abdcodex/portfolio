import { Component } from '@angular/core';

interface Project {
  name: string;
  bullets: { title: string; text: string }[];
  environment: string;
}

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.scss']
})
export class AcademicProjectsComponent {
  projects: Project[] = [
    {
      name: 'IntelliMetro — Smart Monitoring System',
      bullets: [
        {
          title: 'Real-Time Occupancy Detection',
          text: 'Fine-tuned YOLOv3 on public and custom datasets to achieve 90% accuracy in metro occupancy estimation while improving processing speed 15× by analyzing every 15th frame.'
        },
        {
          title: 'Facial Recognition & Threat Detection',
          text: 'Integrated FaceNet facial recognition with 95% accuracy to identify persons of interest and automate real-time security alerts.'
        },
        {
          title: 'Monitoring Dashboard',
          text: 'Built a Streamlit dashboard for real-time tracking of coach occupancy up to 300 passengers per coach and automated alerts for overcrowding and security flags.'
        }
      ],
      environment: 'Python, PyTorch, YOLOv3, FaceNet, Computer Vision, Streamlit, OpenCV-style video processing'
    },
    {
      name: 'Music Recommendation System',
      bullets: [
        {
          title: 'Recommendation Modeling',
          text: 'Implemented K-Means clustering over audio features, achieving 85%+ cluster consistency and improving recommendation relevance.'
        },
        {
          title: 'Personalized Recommendation Pipeline',
          text: 'Designed a recommendation workflow that selected songs from top-matching clusters and improved discovery efficiency by 40% compared with random selection.'
        }
      ],
      environment: 'Python, Scikit-learn, K-Means, Pandas, NumPy, Machine Learning'
    }
  ];
}
