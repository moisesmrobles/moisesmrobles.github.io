// src/data/experience.ts

// Primero definimos cómo es la "forma" de nuestra experiencia para tener autocompletado y evitar errores
export interface Experience {
  id: string;
  company: string;
  roleKey: string;
  dateKey: string;
  descriptionKey: string;
  techStack: string[];
}

// Creamos el array con los datos universales
export const experiences: Experience[] = [
  {
    id: 'zaitec',
    company: 'Zaitec',
    roleKey: 'exp_zaitec_role',
    dateKey: 'exp_zaitec_date',
    descriptionKey: 'exp_zaitec_desc',
    techStack: ['PHP', 'JavaScript', 'AJAX', 'Bootstrap']
  },
  {
    id: 'megasur',
    company: 'Megasur',
    roleKey: 'exp_megasur_role',
    dateKey: 'exp_megasur_date',
    descriptionKey: 'exp_megasur_desc',
    techStack: ['Java', 'Android Studio', 'Ionic', 'MySQL', 'WebSockets']
  },
  {
    id: 'atarfe',
    company: 'Ayuntamiento de Atarfe',
    roleKey: 'exp_atarfe_role',
    dateKey: 'exp_atarfe_date',
    descriptionKey: 'exp_atarfe_desc',
    techStack: ['Hardware', 'Redes', 'Soporte IT']
  }
];