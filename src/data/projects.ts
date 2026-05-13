// src/data/projects.ts
export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'profeweb',
    titleKey: 'proj_profeweb_title',
    descriptionKey: 'proj_profeweb_desc',
    techStack: ['PHP 8', 'MVC', 'MySQL', 'Vanilla JS', 'Fetch API']
  },
  {
    id: 'gestfincas',
    titleKey: 'proj_gestfincas_title',
    descriptionKey: 'proj_gestfincas_desc',
    techStack: ['PHP', 'JavaScript', 'AJAX', 'Bootstrap']
  }
];