export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  stats?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    banner: '/images/projects/project1.png',
    name: 'AI-Powered Resume Matcher',
    desc: 'Built a scalable AI-powered resume and job-description evaluation platform using OpenAI API and prompt engineering. Implemented JWT authentication, optimized MongoDB queries (~35% improvement), and automated testing across 15+ endpoints.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'Jest'],
    github: 'https://github.com/Kanhaiyadav01',
    live: 'https://wt-collage-project.vercel.app/',
    stats: '15+ API endpoints',
  },
  {
    banner: '/images/projects/project2.png',
    name: 'DayCraft — Productivity Workspace',
    desc: 'Full-stack SSR productivity workspace with a PostgreSQL relational schema, JWT authentication, signup-free Guest Mode, and interactive analytics dashboard designed for scalable and low-latency data access.',
    tech: ['React', 'TypeScript', 'TanStack Start', 'Supabase', 'PostgreSQL', 'Tailwind CSS v4'],
    github: 'https://github.com/Kanhaiyadav01/DayCraft',
    live: 'https://daycraft.live/dashboard',
    stats: 'Full-stack SSR',
  },
  {
    banner: '/images/projects/project3.png',
    name: 'DSA Spaced Repetition Tracker',
    desc: 'Engineered a spaced-repetition system for DSA practice with 3–120 day intervals, real-time Firestore synchronization, Google OAuth, user-specific data isolation, and offline persistence.',
    tech: ['React.js', 'Firebase Auth', 'Firestore', 'Vercel'],
    github: 'https://github.com/Kanhaiyadav01',
    live: 'https://neurodsa.vercel.app/',
    stats: '100+ sessions',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    banner: '/images/projects/project4.png',
    name: 'Green Onion — Freelance Web App',
    desc: 'Full-stack freelance web application built for business client operations, featuring interactive product catalog management, responsive UI design, automated workflows, and fast server-side delivery.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel'],
    github: 'https://github.com/Kanhaiyadav01',
    live: 'https://green-onion.vercel.app/',
    stats: 'Freelance Client App',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
