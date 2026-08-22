import { Component } from '@angular/core';

interface ExperienceBullet {
  title?: string;
  text: string;
}

interface Experience {
  company: string;
  location?: string;
  dates: string;
  role: string;
  project: string;
  bullets: ExperienceBullet[];
  environment: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Biba Apparels Pvt. Ltd.',
      dates: 'Jun 2024 – Present',
      role: 'Software Engineer | Backend & Agentic AI',
      project: 'Agentic Inventory & Replenishment Platform',
      bullets: [
        {
          title: 'Agentic AI Inventory & Replenishment Platform',
          text: 'Designed and developed an autonomous inventory workflow that continuously evaluates store and warehouse stock, SKU availability, sales velocity, reorder thresholds, and operational constraints to identify shortage and overstock conditions and recommend the next replenishment action.'
        },
        {
          title: 'Multi-Agent Workflow Orchestration',
          text: 'Implemented specialized monitoring, planning, validation, and action-execution agents that share workflow state and coordinate through an Observe → Analyze → Decide → Act pattern for inventory decisions.'
        },
        {
          title: 'LLM Integration & Tool Orchestration',
          text: 'Integrated LLM-assisted reasoning and tool calling with inventory, catalog, and replenishment APIs so agents can query stock, compare alternate locations, generate transfer recommendations, create replenishment requests, and return structured explanations for decisions.'
        },
        {
          title: 'Backend Microservices & REST APIs',
          text: 'Designed Python/Django/Flask backend services and REST APIs for inventory lookup, catalog access, stock updates, replenishment requests, workflow status, and internal operational tools, applying reusable service layers and clear API contracts.'
        },
        {
          title: 'Guardrails, Human Approval & Safe Automation',
          text: 'Added business-rule validation, confidence thresholds, human-in-the-loop approval for higher-risk actions, role-based workflow boundaries, and audit trails to keep automated decisions controlled and reviewable.'
        },
        {
          title: 'Reliable Workflow Execution',
          text: 'Implemented input validation, retries, idempotency checks, transactional updates, persisted workflow state, failure recovery, and duplicate-action prevention to improve reliability across asynchronous and scheduled inventory workflows.'
        },
        {
          title: 'Database Design & Data Access',
          text: 'Designed and maintained PostgreSQL/MySQL schemas, indexes, queries, and data-access layers for inventory, catalog, replenishment, workflow-state, and audit data, with emphasis on consistency and query performance.'
        },
        {
          title: 'Background Processing & Scheduling',
          text: 'Developed background jobs and scheduled services for inventory synchronization, periodic stock checks, notifications, workflow retries, and asynchronous processing, with structured failure handling and operational logging.'
        },
        {
          title: 'Cloud-Native Deployment & DevOps',
          text: 'Containerized backend services with Docker and supported deployment on Kubernetes and AWS, including environment configuration, health checks, secrets handling, release workflows, and service-level troubleshooting.'
        },
        {
          title: 'Testing, Quality & Production Support',
          text: 'Built unit, integration, and API tests with Pytest; participated in Git-based code reviews, debugging, refactoring, CI/CD, defect resolution, and performance troubleshooting to improve maintainability and production readiness.'
        },
        {
          title: 'Observability & Cross-Functional Delivery',
          text: 'Implemented application logging and operational monitoring, documented APIs and design decisions, and partnered with product, operations, and business stakeholders to convert inventory processes into reliable software workflows.'
        }
      ],
      environment: 'Python, Django, Flask, REST APIs, Agentic AI, AI Agents, Multi-Agent Workflows, LLM Integration, Tool Calling, MCP, Guardrails, PostgreSQL, MySQL, Pytest, Docker, Kubernetes, AWS, Git, GitHub, CI/CD, YAML, Linux'
    }
  ];
}
