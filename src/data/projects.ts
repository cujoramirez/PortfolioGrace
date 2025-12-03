export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  role: string;
  publicationLinks: {
    label: string;
    url: string;
  }[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gizi Kita',
    description: 'A web platform that supports Indonesia\'s Makan Bergizi Gratis program by streamlining school registration, displaying weekly meal menus, collecting real-time feedback, and providing AI-powered insights to improve transparency and efficiency in meal distribution.',
    year: '2025',
    role: 'UI Designer',
    publicationLinks: [
      {
        label: 'Google Drive',
        url: 'https://drive.google.com/drive/folders/1yMx2S-ZXEaQwNu9c9JuL9XIicZ3IJV7j'
      },
      {
        label: 'Figma',
        url: 'https://www.figma.com/design/Ok4B100vQCJcPuvPcdsJ3g/Figma-Ureeka-Group-1?node-id=0-1&t=FTgRJL9ka5fPZIyC-1'
      }
    ],
    screenshots: ['/gizikita-1.png', '/gizikita-2.png', '/gizikita-3.png']
  },
  {
    id: 2,
    title: 'DiamondCut Motors',
    description: 'DiamondCut Motors: Indonesia\'s trusted luxury car reseller since 1998, delivering top brands with quality and reliability. (Human-Computer Interaction Project)',
    year: '2024',
    role: 'UI Designer',
    publicationLinks: [
      {
        label: 'GitHub',
        url: 'https://github.com/gwaisey/DiamondCut.git'
      }
    ],
    screenshots: ['/diamondcut-1.png', '/diamondcut-2.png']
  },
  {
    id: 3,
    title: 'WhatToCook',
    description: 'AI-powered recipe recommender that suggests dishes based on available ingredients without any food waste.',
    year: '2024',
    role: 'AI Integrator',
    publicationLinks: [
      {
        label: 'GitHub',
        url: 'https://github.com/gwaisey/WhatToCook.git'
      }
    ],
    screenshots: ['/whattocook-1.png']
  },
  {
    id: 4,
    title: 'PassportQ',
    description: 'PassportQ is a digital queue management application designed to streamline the process of queuing at immigration offices.',
    year: '2024',
    role: 'UI Designer',
    publicationLinks: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/design/McpeBsvny2IEaQxtAPRW69/Untitled?node-id=0-1&t=Piaigc0oi2nLYyZ0-1'
      }
    ],
    screenshots: ['/passportq-1.png']
  },
  {
    id: 5,
    title: 'NCourage',
    description: 'NCourage is a Web3 platform where users earn NFT points by completing paid or free courses, unlocking exclusive content and rewards.',
    year: '2025',
    role: 'UI Designer',
    publicationLinks: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/design/uG5CE4ETDROd5pxejpV5kg/NCourage?node-id=0-1&t=mz87NBEZ4Tr4A5II-1'
      }
    ],
    screenshots: ['/ncourage-1.png']
  }
];

export const personalInfo = {
  name: 'Grace Mae Gozali',
  tagline: '"Transforming user needs into impactful digital solutions."',
  bio: `I am Grace, an undergraduate Computer Science student at Binus University (2023-2027). I am passionate about creating user-centered digital experiences and exploring how technology connects with human needs. I chose a specialization in Software Development to strengthen my foundation. I aim to keep learning in the UI/UX field and hope to become a product designer or UX strategist who bridges creativity and functionality.`,
  education: 'BINUS Student Semester 5',
  phone: '081326610058 (Mobile)',
  linkedin: 'www.linkedin.com/in/grace-gozali-',
  email: 'grace.gozali@binus.ac.id'
};
