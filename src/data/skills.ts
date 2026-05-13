// src/data/skills.ts
export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    titleKey: 'skills_backend',
    skills: ['Java', 'PHP', 'Python', 'Spring Boot']
  },
  {
    id: 'frontend',
    titleKey: 'skills_frontend',
    skills: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AJAX']
  },
  {
    id: 'database',
    titleKey: 'skills_db',
    skills: ['MySQL', 'SQL Server', 'MariaDB', 'SQLite']
  },
  {
    id: 'tools',
    titleKey: 'skills_tools',
    skills: ['Prompt Engineering', 'IA aplicada al código', 'Git/GitHub']
  },
  {
    id: 'methodologies',
    titleKey: 'skills_methodologies',
    skills: ['Scrum', 'Metodologías Ágiles']
  }
];