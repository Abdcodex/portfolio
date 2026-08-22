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
      company: 'Meta (Facebook)',
      location: 'Menlo Park, CA',
      dates: 'Aug 2024 – Present',
      role: 'Senior Software Engineer (E5)',
      project: 'Ads Infrastructure – Efficiency Systems Team (Performance Canary for AdRetriever, AdRanker, AdFinder)',
      bullets: [
        {
          title: 'Agentic AI-Powered Experiment Analysis & Root Cause Investigation',
          text: 'Designed and built an AI-driven experiment investigation platform that automated canary analysis, failure triage, and deployment decision-making. Developed MCP-enabled tool orchestration and distributed microservices exposing telemetry, logs, experiment metadata, deployment history, crash dumps, and runtime diagnostics as AI-consumable tools. Leveraged Meta DevMate, Claude-based LLMs, Retrieval-Augmented Generation (RAG), and contextual reasoning workflows to automatically correlate regressions with code changes, identify newly introduced failures, generate root-cause hypotheses, summarize crash investigations, and produce actionable deployment recommendations. Reduced investigation time from hours to minutes, significantly improving rollout confidence and engineering productivity.'
        },
        {
          title: 'Performance Experimentation & Validation Platform',
          text: 'Architected and led Meta\'s large-scale performance experimentation platform supporting Ads Retrieval and Ranking systems, enabling online experimentation, A/B testing, model validation, and infrastructure performance analysis under production-scale workloads. Executed canary experiments across 6,000+ production hosts, improving regression detection sensitivity from 0.5% to 0.1% CPU utilization changes (5× improvement). Enabled identification of micro-regressions before production rollout, supporting infrastructure efficiency initiatives where each 0.1% improvement translated to approximately $1M in annualized savings.'
        },
        {
          title: 'Telemetry Analytics, Observability & ML-Based Anomaly Detection',
          text: 'Architected and scaled distributed telemetry ingestion, ETL pipelines, observability platforms, statistical analysis frameworks, and anomaly-detection systems supporting approximately 100 concurrent experiments across 100K+ production hosts. Each experiment generated roughly 50–200 GB of structured telemetry and terabytes of logs, traces, crash data, and runtime diagnostics. Improved operational visibility and reduced incident detection time by 90%, enabling faster identification of performance regressions, infrastructure issues, and experiment anomalies.'
        },
        {
          title: 'Frontend & Experiment Monitoring Dashboards',
          text: 'Built React and TypeScript-based internal dashboards for canary monitoring, experiment comparison, anomaly visualization, failure triage, AI-generated root-cause summaries, and rollout decision-making.'
        },
        {
          title: 'Experimentation Reliability & Statistical Validation',
          text: 'Developed automated variance-reduction and noise-detection frameworks that identified unstable host pairs, shard-level variance, traffic instability, warm-up effects, crash-induced metric contamination, and counter inconsistencies. Established experimentation standards, statistical methodologies, and reproducible evaluation workflows that significantly reduced false-positive regressions while increasing deployment confidence across Ads Infrastructure.'
        },
        {
          title: 'High-Fidelity Validation Infrastructure',
          text: 'Defined the technical strategy for fixed-workload testing, traffic shadowing, cache shadowing, and production-representative validation frameworks. Enabled safe, reproducible, and large-scale evaluation of retrieval, ranking, and machine learning systems, improving confidence in infrastructure and model rollouts while reducing deployment risk.'
        },
        {
          title: 'Developer Productivity & Platform Engineering',
          text: 'Built self-service experimentation platforms, shared infrastructure services, and intelligent automation tooling that streamlined performance validation, diagnostics, regression analysis, and experiment reporting. Reduced operational overhead and accelerated engineering velocity across multiple Ads Infrastructure teams.'
        },
        {
          title: 'Technical Leadership & Organizational Impact',
          text: 'Partnered with ML researchers, infrastructure engineers, and product organizations to define experimentation standards, model evaluation methodologies, and deployment best practices. Influenced architecture and rollout strategies across Ads Infrastructure, drove adoption of performance validation frameworks, and mentored engineers across multiple teams.'
        }
      ],
      environment: 'Python (FastAPI), Java, TypeScript, React, GraphQL, C++, SQL (Presto, MySQL), Data and NoSQL Platforms (Hive, Scuba, ODS), Distributed Systems, Ads Infrastructure, AI Agents, Agentic Workflows, Confucius (LangGraph-style orchestration), MCP (Model Context Protocol), Tool Orchestration, Context Retrieval, Generative AI, Claude, DevMate, LLM Applications, Observability, Telemetry Analytics, ETL Pipelines, Experiment Store, Performance Canary, ML Evaluation, Statistical Analysis, Cache Shadowing'
    },
    {
      company: 'Google',
      location: 'Mountain View, California',
      dates: 'Jul 2022 – Jun 2024',
      role: 'Senior Software Engineer',
      project: 'Search Design System (SDS) team, improving Search UI Development',
      bullets: [
        {
          title: 'SDS Analyzer & Intelligent Code Review Platform',
          text: 'Led development of SDS Analyzer and SDS Linter, an AI-assisted code review platform that analyzed code changes, rendered templates, and production UI data to detect hardcoded values, accessibility violations, coding issues, and Search Design System non-compliance. Generated contextual errors, warnings, and remediation recommendations using Machine Learning and Generative AI, reducing guideline-related coding errors by 70% and improving deployment quality across Search products.'
        },
        {
          title: 'Developer Productivity & Design System Platform',
          text: 'Built xUIKit tools and developer applications that enabled engineers to discover design tokens, color mappings, typography standards, and component usage patterns. Developed intelligent validation and recommendation workflows that improved UI consistency, accessibility compliance, and developer productivity across Search.'
        },
        {
          title: 'Agentic Developer Workflow',
          text: 'Designed an AI-powered developer assistant following an Observe → Analyze → Decide → Act workflow, continuously evaluating code submissions, reasoning about change impact, generating remediation recommendations, and re-evaluating updates through automated feedback loops.'
        },
        {
          title: 'Developer AI Platform & Tool Orchestration',
          text: 'Architected a platform integrating source repositories, rendering systems, ML models, BigQuery datasets, dashboards, and developer tooling through standardized APIs, enabling intelligent tool invocation, contextual analysis, automated recommendation generation, and developer workflow automation across Search engineering systems.'
        },
        {
          title: 'ML Training & Evaluation Infrastructure',
          text: 'Built Vertex AI and AutoML-based training, evaluation, and validation workflows for detecting Search Design System violations, enabling automated model experimentation, recommendation generation, and continuous improvement of code quality.'
        },
        {
          title: 'ML Error Detection & Generative AI Recommendations',
          text: 'Developed machine learning models and Vertex AI-powered workflows to identify UI development issues and automatically generate guideline-compliant code fixes, accessibility improvements, and Search Design System token recommendations.'
        },
        {
          title: 'Distributed Analysis & Validation Platform',
          text: 'Built distributed analysis pipelines processing code changes, rendered UI artifacts, production metadata, and developer signals to enable automated compliance validation, recommendation generation, and quality assurance across Search products.'
        },
        {
          title: 'Cloud Deployment & Kubernetes Infrastructure',
          text: 'Led integration and Kubernetes deployment of Piper API and xUIKit Compiler on Google Cloud, improving CI/CD automation, platform scalability, deployment reliability, and operational efficiency.'
        },
        {
          title: 'Operational Excellence & Technical Leadership',
          text: 'Participated in GWS-UI-Interrupts on-call rotation, troubleshooting production issues, resolving UI regressions, improving service reliability, and influencing engineering standards across Search development workflows.'
        }
      ],
      environment: 'Python (FastAPI), Java, Go, TypeScript, Machine Learning, Generative AI, LLM Applications, Vertex AI, AutoML, AI Infrastructure, Google Cloud Platform (GCP), Borg, Kubernetes, Docker, BigQuery, Pub/Sub, Memorystore, Protobuf, gRPC, Distributed Systems, CI/CD, Developer Platforms, GPU, PLX-SQL, PLX Workflow, PLX Dashboard'
    },
    {
      company: 'Microsoft',
      dates: 'Sep 2021 – Jul 2022',
      role: 'Senior Software Engineer',
      project: 'Windows Servicing and Delivery team, analyzing social posts for Windows Update regressions',
      bullets: [
        {
          title: 'AI-Powered Regression Analysis Platform',
          text: 'Architected and developed an AI-powered regression analysis platform for Windows OS, Microsoft 365, and major software launches, ingesting and analyzing large-scale social feedback, telemetry, and product signals to proactively detect customer-impacting regressions.'
        },
        {
          title: 'End-to-End ML Pipeline Development',
          text: 'Built end-to-end ML pipelines on Azure ML, including data ingestion, preprocessing, feature engineering, model training, hyperparameter tuning, evaluation, deployment, and monitoring of RoBERTa-based NLP models for large-scale regression detection.'
        },
        {
          title: 'Distributed Training & Evaluation Frameworks',
          text: 'Established parallel training and evaluation frameworks using Azure ML workspaces and RoBERTa endpoints, enabling large-scale experimentation, automated validation, model versioning, and production deployment workflows.'
        },
        {
          title: 'NLP Model Optimization',
          text: 'Improved NLP model accuracy from 83% to 91% through advanced feature engineering, data quality improvements, PyTorch-based model optimization, and systematic experimentation.'
        },
        {
          title: 'ML Data Platform & Telemetry Analytics',
          text: 'Designed and implemented enterprise-scale ETL and data-processing pipelines for ingesting, transforming, and analyzing billions of telemetry events and customer feedback signals to support machine learning, analytics, and model-training workloads.'
        },
        {
          title: 'AI Platform Integration & Orchestration',
          text: 'Built a platform integrating data sources, ML models, analytics pipelines, dashboards, and notification systems through standardized APIs, enabling automated data retrieval, model execution, analysis, and reporting workflows.'
        },
        {
          title: 'Automated Insights & Intelligent Alerting',
          text: 'Developed automated analytics and alerting systems that aggregated model predictions, identified emerging regressions and trending issues, generated actionable insights, and provided engineering teams with prioritized remediation recommendations.'
        },
        {
          title: 'Cloud-Native ML Infrastructure',
          text: 'Collaborated with cross-functional engineering, data science, and product teams to deploy and scale cloud-native machine learning workloads on Azure, improving platform reliability, operational efficiency, and production readiness.'
        }
      ],
      environment: 'Python (FastAPI), C#, Azure Machine Learning, PyTorch, RoBERTa, Azure Cloud, REST APIs, ETL Pipelines, NLP, Machine Learning, SQL Server, Power BI, Angular, TypeScript, GPU/TPU, PowerShell, Git, Distributed Systems, Data Analytics, Web Services'
    },
    {
      company: 'GE HealthCare',
      dates: 'Jul 2019 – Sep 2021',
      role: 'Staff Software Engineer',
      project: 'Command Center project, enhancing patient safety through analytics',
      bullets: [
        {
          title: 'High-Ownership Healthcare Platform Development',
          text: 'Played a key role in rapidly designing, building, and scaling mission-critical analytics platforms during the COVID-19 pandemic, enabling healthcare administrators across 100+ hospitals to make data-driven decisions on patient census, ICU capacity, staffing, and resource allocation. Delivered end-to-end solutions under aggressive timelines while partnering directly with clinicians, healthcare leaders, and engineering teams. The platform supported data-driven decisions for patient care, resource allocation, and emergency response.'
        },
        {
          title: 'Healthcare ETL & Data Platform',
          text: 'Architected scalable ETL and healthcare data ingestion pipelines processing HL7 data streams from 100+ hospitals, enabling near real-time analytics, operational visibility, and clinical decision support across large healthcare networks.'
        },
        {
          title: 'Distributed Healthcare Analytics',
          text: 'Designed distributed data-processing frameworks for healthcare telemetry and patient analytics, providing automated reporting, operational insights, and performance monitoring across multiple hospital systems.'
        },
        {
          title: 'Platform Engineering & Developer Productivity',
          text: 'Built automated CI/CD pipelines, validation systems, internal developer tooling, and shared platform services that accelerated developer workflows, improved release quality, enabled scalable experimentation, and automated model evaluation and code quality analysis.'
        },
        {
          title: 'Cloud-Native Microservices Platform',
          text: 'Led modernization of healthcare applications through microservices architecture and Amazon EKS integration, improving scalability, deployment velocity, and system reliability.'
        },
        {
          title: 'High-Performance HL7 Processing Engine',
          text: 'Led the design and implementation of a Master-Slave architecture for the HL7 Processor, significantly improving throughput, processing efficiency, and reliability for mission-critical healthcare workflows.'
        },
        {
          text: 'Implemented observability and operational tooling to improve service reliability, performance monitoring, and incident response.'
        },
        {
          title: 'Cross-Functional Technical Leadership',
          text: 'Partnered with clinicians, healthcare administrators, product teams, and engineering organizations to deliver critical analytics capabilities during COVID-19 while driving architectural improvements, resolving production challenges, and improving platform reliability.'
        }
      ],
      environment: 'Spring MVC, Java, TypeScript, Spring Boot, Maven, Redis, Cassandra, AngularJS, Prometheus, Grafana, MS SQL relational database (indexing, sharding, denormalization), Docker, Kubernetes, Jira, REST APIs, Microservices, Web Services, MS Studio, Unix, Shell Script'
    },
    {
      company: 'CME Group',
      dates: 'Oct 2018 – Jun 2019',
      role: 'Senior Java Developer',
      project: 'CME Scheduler, automating job scheduling on UC4',
      bullets: [
        { text: 'Modernized critical scheduling and workload automation systems using Java, Spring MVC, Spring Boot, and microservices, improving scalability, maintainability, and operational efficiency.' },
        { text: 'Developed enterprise scheduling solutions supporting automated execution of trading, market data, settlement, clearing, risk-management, and batch-processing workflows across distributed financial systems.' },
        { text: 'Designed and optimized workflow orchestration pipelines for dependent jobs, event-driven scheduling, SLA monitoring, failure recovery, and workload prioritization in high-availability production environments.' },
        { text: 'Implemented automated alerting, logging, and operational monitoring using Splunk, improving visibility into business-critical financial processing workflows and reducing incident resolution time.' },
        { text: 'Enhanced reliability and fault tolerance through automated retry mechanisms, dependency management, workflow validation, and failure-handling strategies for mission-critical financial operations.' },
        { text: 'Designed and maintained enterprise-scale job scheduling and workflow orchestration platforms supporting thousands of daily business-critical workloads.' },
        { text: 'Implemented dependency management, automated recovery, SLA monitoring, scheduling automation, and operational observability across distributed systems.' }
      ],
      environment: 'Spring MVC, Java (JDK 8), Spring Boot, DynamoDB, Bamboo, Splunk, REST APIs, Web Services, JSP, Unix, Shell Script'
    },
    {
      company: 'Biba Apparels Pvt. Ltd.',
      dates: 'Dec 2013 – Jul 2016',
      role: 'Lead Software Engineer / Full-Stack',
      project: 'Led architecture and development of enterprise eCommerce, payment processing, inventory management, and manufacturing tracking platforms supporting retail, supply chain, and customer-facing operations',
      bullets: [
        {
          title: 'Internal Startup Leadership',
          text: 'Helped build Biba\'s digital commerce organization from the ground up, designing and delivering the company\'s early eCommerce, payment, inventory, and supply-chain platforms while partnering directly with business stakeholders to drive digital transformation initiatives. Owned the technical architecture and roadmap for customer-facing eCommerce platforms, enabling online product catalog management, order processing, payment integration, and fulfillment workflows.'
        },
        { text: 'Spearheaded integration of third-party payment gateways, designing secure transaction processing, payment authorization, reconciliation, and order management systems that improved customer purchasing experience and operational efficiency.' },
        { text: 'Architected scalable backend services and data models that unified eCommerce, inventory, manufacturing, and supply chain systems, providing end-to-end visibility across the order lifecycle.' },
        { text: 'Partnered with business leaders, product owners, and operations teams to define technical strategy, prioritize investments, and deliver solutions aligned with revenue growth and operational objectives.' },
        { text: 'Established engineering best practices, code review standards, and development processes, improving software quality, maintainability, and team productivity.' }
      ],
      environment: 'Java, J2EE, AngularJS, Spring MVC, JSP, REST APIs, CSS, Git, JavaScript, PL/SQL, MySQL, Oracle, XML, HTML5, Apache, Apache Tomcat, Hibernate, AWS'
    },
    {
      company: 'Aricent Group',
      dates: 'Sep 2010 – Nov 2013',
      role: 'Senior Software Developer',
      project: 'Networking and telecommunications software development',
      bullets: [
        {
          title: 'Robust Network Platform',
          text: 'Developed a robust Network Mediation Platform supporting IP, UMTS, LTE, and GSM networks, showcasing interdisciplinary expertise and advanced network principles including TCP/UDP protocols.'
        },
        {
          title: 'Integration Expertise',
          text: 'Successfully integrated the platform into large-scale distributed systems, efficiently managing petabytes of shared data storage, demonstrating advanced system scalability and data handling capabilities.'
        },
        {
          title: 'Issue Resolution',
          text: 'Efficiently resolved xDR builders\' issues (SS7, UMTS, GSM, LTE) in a distributed, multi-threaded Linux environment using C++, addressing builder crashes and coding/debugging problems.'
        },
        {
          title: 'Performance Optimization',
          text: 'Enhanced Network Mediation Platform performance by optimizing the Linux kernel, focusing on memory management, process scheduling, and I/O operations. Implemented advanced techniques like short polling and multithreading for efficient resource utilization and responsive system behavior.'
        }
      ],
      environment: 'C++, Multithreading, Linux/UNIX, Network (TCP/UDP), Linux Kernel, Windows, Shell Script, PL/SQL, Oracle, MySQL, Git'
    }
  ];
}
