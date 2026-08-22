import { Component } from '@angular/core';

interface Highlight {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  highlights: Highlight[] = [
    {
      title: 'AI Infrastructure & ML Platforms',
      description: 'Architected and scaled AI infrastructure, ML experimentation platforms, model training and evaluation frameworks, telemetry analytics systems, and intelligent automation solutions leveraging Generative AI, LLMs, RAG, and cloud-native technologies to improve engineering productivity, deployment confidence, and production reliability.'
    },
    {
      title: 'Agentic AI & Developer Productivity',
      description: 'Built AI-powered developer tools, agentic workflows, MCP-enabled tool orchestration, and intelligent decision-support platforms that accelerated code review, root-cause analysis, experiment investigation, ML evaluation, and software delivery.'
    },
    {
      title: 'Full-Stack Platforms & Developer Experience',
      description: 'Designed and delivered end-to-end applications spanning frontend dashboards, analytics portals, visualization systems, APIs, distributed backend services, and cloud-native infrastructure. Built engineer-facing telemetry dashboards, healthcare command center UI tiles, design-system analysis platforms, and real-time operational reporting solutions serving thousands of users and large-scale enterprise environments.'
    },
    {
      title: 'Infrastructure & Platform Engineering',
      description: 'Designed and operated cloud-native infrastructure, internal developer platforms, CI/CD systems, Kubernetes environments, shared services, and automation frameworks across AWS, GCP, and Azure, enabling scalable, reliable, and efficient software delivery.'
    },
    {
      title: 'Distributed Systems & Cloud Architecture',
      description: 'Architected high-throughput distributed systems, microservices, and enterprise-scale cloud platforms supporting AI, machine learning, analytics, healthcare, financial, and other business-critical workloads.'
    },
    {
      title: 'Experimentation, Observability & Reliability',
      description: 'Developed large-scale experimentation platforms, A/B testing frameworks, performance canaries, traffic and cache shadowing systems, telemetry pipelines, anomaly-detection solutions, and operational tooling that improved deployment safety, regression detection, and system reliability.'
    },
    {
      title: 'Data Platforms & Workflow Orchestration',
      description: 'Built scalable ETL and telemetry-ingestion pipelines, real-time analytics platforms, workflow orchestration frameworks, and job-scheduling systems using BigQuery, Pub/Sub, SQL, Redis, and Cassandra.'
    },
    {
      title: 'High-Ownership Engineering Leadership',
      description: 'Led products and platforms from concept and architecture through implementation, deployment, adoption, and production operations across startup-style teams and large global organizations.'
    },
    {
      title: 'Technical Strategy & Organizational Impact',
      description: 'Defined technical roadmaps, influenced cross-organizational architectural decisions, established engineering standards, conducted design reviews, mentored engineers, and partnered with infrastructure, research, ML, product, and business teams to deliver measurable technical and business outcomes.'
    }
  ];
}
