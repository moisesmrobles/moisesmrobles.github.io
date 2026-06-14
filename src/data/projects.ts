// src/data/projects.ts

// Importaciones de las 24 imágenes de ProfeWeb
import pw1 from '../assets/ProfeWeb/profeweb- (1).jpeg';
import pw2 from '../assets/ProfeWeb/profeweb- (2).jpeg';
import pw3 from '../assets/ProfeWeb/profeweb- (3).jpeg';
import pw4 from '../assets/ProfeWeb/profeweb- (4).jpeg';
import pw5 from '../assets/ProfeWeb/profeweb- (5).jpeg';
import pw6 from '../assets/ProfeWeb/profeweb- (6).jpeg';
import pw7 from '../assets/ProfeWeb/profeweb- (7).jpeg';
import pw8 from '../assets/ProfeWeb/profeweb- (8).jpeg';
import pw9 from '../assets/ProfeWeb/profeweb- (9).jpeg';
import pw10 from '../assets/ProfeWeb/profeweb- (10).jpeg';
import pw11 from '../assets/ProfeWeb/profeweb- (11).jpeg';
import pw12 from '../assets/ProfeWeb/profeweb- (12).jpeg';
import pw13 from '../assets/ProfeWeb/profeweb- (13).jpeg';
import pw14 from '../assets/ProfeWeb/profeweb- (14).jpeg';
import pw15 from '../assets/ProfeWeb/profeweb- (15).jpeg';
import pw16 from '../assets/ProfeWeb/profeweb- (16).jpeg';
import pw17 from '../assets/ProfeWeb/profeweb- (17).jpeg';
import pw18 from '../assets/ProfeWeb/profeweb- (18).jpeg';
import pw19 from '../assets/ProfeWeb/profeweb- (19).jpeg';
import pw20 from '../assets/ProfeWeb/profeweb- (20).jpeg';
import pw21 from '../assets/ProfeWeb/profeweb- (21).jpeg';
import pw22 from '../assets/ProfeWeb/profeweb- (22).jpeg';
import pw23 from '../assets/ProfeWeb/profeweb- (23).jpeg';
import pw24 from '../assets/ProfeWeb/profeweb- (24).jpeg';

// Importaciones de las 17 imágenes de GestFincas
import gf1 from '../assets/GestFincas/gestfincas- (1).png';
import gf2 from '../assets/GestFincas/gestfincas- (2).png';
import gf3 from '../assets/GestFincas/gestfincas- (3).png';
import gf4 from '../assets/GestFincas/gestfincas- (4).png';
import gf5 from '../assets/GestFincas/gestfincas- (5).png';
import gf6 from '../assets/GestFincas/gestfincas- (6).png';
import gf7 from '../assets/GestFincas/gestfincas- (7).png';
import gf8 from '../assets/GestFincas/gestfincas- (8).png';
import gf9 from '../assets/GestFincas/gestfincas- (9).png';
import gf10 from '../assets/GestFincas/gestfincas- (10).png';
import gf11 from '../assets/GestFincas/gestfincas- (11).png';
import gf12 from '../assets/GestFincas/gestfincas- (12).png';
import gf13 from '../assets/GestFincas/gestfincas- (13).png';
import gf14 from '../assets/GestFincas/gestfincas- (14).png';
import gf15 from '../assets/GestFincas/gestfincas- (15).png';
import gf16 from '../assets/GestFincas/gestfincas- (16).png';
import gf17 from '../assets/GestFincas/gestfincas- (17).png';

export interface MediaItem {
  type: 'video' | 'image';
  url: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  detailedDescriptionKey?: string;
  techStack: string[];
  statusKey: string;
  teamKey: string;
  roleKey: string;
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    id: 'profeweb',
    titleKey: 'proj_profeweb_title',
    descriptionKey: 'proj_profeweb_desc',
    detailedDescriptionKey: 'proj_profeweb_details',
    techStack: ['PHP 8', 'MVC', 'MySQL', 'Vanilla JS', 'Fetch API'],
    statusKey: 'proj_status_completed',
    teamKey: 'proj_team_individual',
    roleKey: 'proj_role_fullstack',
    media: [
      { type: 'image', url: pw1 },
      { type: 'image', url: pw2 },
      { type: 'image', url: pw3 },
      { type: 'image', url: pw4 },
      { type: 'image', url: pw5 },
      { type: 'image', url: pw6 },
      { type: 'image', url: pw7 },
      { type: 'image', url: pw8 },
      { type: 'image', url: pw9 },
      { type: 'image', url: pw10 },
      { type: 'image', url: pw11 },
      { type: 'image', url: pw12 },
      { type: 'image', url: pw13 },
      { type: 'image', url: pw14 },
      { type: 'image', url: pw15 },
      { type: 'image', url: pw16 },
      { type: 'image', url: pw17 },
      { type: 'image', url: pw18 },
      { type: 'image', url: pw19 },
      { type: 'image', url: pw20 },
      { type: 'image', url: pw21 },
      { type: 'image', url: pw22 },
      { type: 'image', url: pw23 },
      { type: 'image', url: pw24 }
    ]
  },
  {
    id: 'gestfincas',
    titleKey: 'proj_gestfincas_title',
    descriptionKey: 'proj_gestfincas_desc',
    detailedDescriptionKey: 'proj_gestfincas_details',
    techStack: ['PHP 8', 'MVC', 'MySQL', 'Fetch API', 'Bootstrap 5', 'SASS', 'PHPMailer'],
    statusKey: 'proj_status_completed',
    teamKey: 'proj_team_group',
    roleKey: 'proj_role_gestfincas',
    media: [
      { type: 'image', url: gf1 },
      { type: 'image', url: gf2 },
      { type: 'image', url: gf3 },
      { type: 'image', url: gf4 },
      { type: 'image', url: gf5 },
      { type: 'image', url: gf6 },
      { type: 'image', url: gf7 },
      { type: 'image', url: gf8 },
      { type: 'image', url: gf9 },
      { type: 'image', url: gf10 },
      { type: 'image', url: gf11 },
      { type: 'image', url: gf12 },
      { type: 'image', url: gf13 },
      { type: 'image', url: gf14 },
      { type: 'image', url: gf15 },
      { type: 'image', url: gf16 },
      { type: 'image', url: gf17 }
    ]
}
];