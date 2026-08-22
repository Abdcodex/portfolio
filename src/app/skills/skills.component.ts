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
    { category: 'Programming Languages', skills: ['Python', 'SQL', 'C/C++', 'Java'] },
    { category: 'Agentic & Generative AI', skills: ['Agentic AI', 'AI Agents', 'Multi-Agent Workflows', 'LLM Integration', 'Tool Calling', 'MCP', 'Prompt Engineering', 'Guardrails'] },
    { category: 'Backend Engineering', skills: ['Django', 'Flask', 'REST APIs', 'Service Design', 'Background Jobs', 'Asynchronous Workflows', 'Validation', 'Error Handling'] },
    { category: 'Machine Learning & AI', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'NLP', 'Computer Vision', 'Model Evaluation', 'K-Means'] },
    { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'SQL', 'Schema Design', 'Indexing', 'Transactions'] },
    { category: 'Cloud & Infrastructure', skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'YAML', 'Linux'] },
    { category: 'Testing & Developer Tools', skills: ['Pytest', 'Git', 'GitHub', 'Makefile', 'Visual Studio Code', 'PyCharm'] },
    { category: 'Data & Libraries', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Torchvision', 'Pillow'] }
  ];
}
