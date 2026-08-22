import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    { category: 'Programming Languages', skills: ['Python', 'Java', 'C++', 'Go', 'TypeScript', 'JavaScript', 'SQL', 'PowerShell', 'Shell'] },
    { category: 'Agentic & Generative AI', skills: ['AI Agents', 'GenAI', 'LLMs', 'RAG', 'MCP', 'Tool Orchestration', 'Context Retrieval', 'Claude', 'DevMate', 'LangGraph-style Workflows'] },
    { category: 'Machine Learning & NLP', skills: ['PyTorch', 'RoBERTa', 'Vertex AI', 'Azure ML', 'AutoML', 'NLP', 'Model Training/Evaluation', 'Tuning', 'Anomaly Detection'] },
    { category: 'Backend Engineering', skills: ['FastAPI', 'Spring Boot/MVC', 'REST', 'GraphQL', 'gRPC', 'Protobuf', 'Microservices', 'Web Services'] },
    { category: 'Distributed Systems', skills: ['Distributed Architecture', 'High-Throughput/Event-Driven Systems', 'Orchestration', 'Scheduling', 'Multithreading', 'HA/FT'] },
    { category: 'Cloud & Infrastructure', skills: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'EKS', 'Borg', 'CI/CD', 'Infrastructure Automation', 'GPU/TPU'] },
    { category: 'Data Engineering', skills: ['ETL', 'Telemetry Ingestion', 'Real-Time Analytics', 'Data Processing', 'Feature Engineering', 'Statistical Analysis', 'Experiment Stores'] },
    { category: 'Databases & Data Platforms', skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'Cassandra', 'Redis', 'DynamoDB', 'BigQuery', 'Hive', 'Presto', 'Pub/Sub', 'Scuba', 'ODS'] },
    { category: 'Frontend Development', skills: ['React', 'Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'JSP', 'Power BI'] },
    { category: 'Experimentation Platforms', skills: ['A/B Testing', 'Performance Canary', 'Experimentation', 'ML Evaluation', 'Traffic/Cache Shadowing', 'Fixed-Workload Testing', 'Variance Reduction'] },
    { category: 'Observability & Reliability', skills: ['Prometheus', 'Grafana', 'Splunk', 'Telemetry', 'Logging', 'Monitoring', 'Alerting', 'Crash/Incident/RCA Analysis'] },
    { category: 'Developer Productivity', skills: ['Developer Platforms', 'AI Code Review', 'Code Analysis', 'Automated Validation', 'Tooling', 'Self-Service Platforms'] },
    { category: 'DevOps & Tools', skills: ['Git', 'Maven', 'Bamboo', 'Jira', 'Unix/Linux', 'Shell'] }
  ];
}
