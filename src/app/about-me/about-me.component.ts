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
      title: 'Agentic AI & Inventory Automation',
      description: 'Built an agentic inventory and replenishment workflow that monitors store and warehouse stock, evaluates shortage and overstock risk, recommends inter-store transfers, and creates replenishment requests through backend tools and APIs.'
    },
    {
      title: 'Multi-Agent Orchestration & Tool Calling',
      description: 'Implemented specialized inventory-monitoring, planning, and action agents with shared workflow state, LLM/tool-calling steps, business-rule validation, confidence-based decisions, and human approval for sensitive actions.'
    },
    {
      title: 'Backend Services & API Engineering',
      description: 'Designed Python/Django/Flask services and REST APIs for inventory, catalog, replenishment, and internal operations, with reusable service boundaries, validation, error handling, and maintainable application architecture.'
    },
    {
      title: 'Reliability, Guardrails & Auditability',
      description: 'Applied retries, idempotency controls, transactional updates, persisted workflow state, audit logging, confidence checks, and human-in-the-loop guardrails to make autonomous workflows safe and traceable.'
    },
    {
      title: 'Cloud-Native Engineering & DevOps',
      description: 'Containerized services with Docker and supported Kubernetes/AWS deployment workflows, environment configuration, health checks, CI/CD, testing, logging, and production troubleshooting.'
    },
    {
      title: 'Machine Learning & Applied AI',
      description: 'Hands-on with PyTorch, Scikit-learn, TensorFlow, Hugging Face, computer vision, clustering, recommendation systems, model evaluation, and real-time ML application development through academic and professional projects.'
    }
  ];
}
