export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Software & Tools',
    items: [
      { label: 'Code Editor', name: 'VS Code' },
      { label: 'Version Control', name: 'Git' },
      { label: 'Code Hosting', name: 'GitHub', link: 'https://github.com/Kanhaiyadav01' },
      { label: 'API Testing', name: 'Postman' },
      { label: 'Deployment', name: 'Vercel' },
      { label: 'Containers', name: 'Docker' },
    ],
  },
  {
    category: 'Hardware & Workstation',
    items: [
      { label: 'Development Setup', name: 'Developer Workstation' },
      { label: 'Display', name: 'High-Res Monitor' },
    ],
  },
];
