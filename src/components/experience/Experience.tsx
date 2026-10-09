import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ExperienceCard from './ExperienceCard';
import Calendar from '../calendar/Calendar';
import './Experience.css';

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  status: 'present' | 'past' | 'future';
  logoUrl: string;
  location: string;
  description: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: 'ASTRAFASH LLP',
    role: 'Full Stack Developer Intern',
    dates: 'June 2026 – August 2026',
    status: 'past',
    location: 'Greater Noida, India',
    logoUrl: '/images/misc/astrafash.png',
    description: [
      'Built a 50+ component React/TypeScript design system using Next.js 14 and Tailwind CSS across atoms–templates.',
      'Shipped 12 production dashboard pages with real API integration, URL-parameter filtering, and complete loading, empty, and error states.',
      'Designed and built 20+ REST API endpoints using Node.js, Express, PostgreSQL, and Zod validation.',
      'Contributed to a B2B Supply Chain Management platform within a pnpm/Turborepo monorepo.',
      'Built a shared @scm/ui library consumed by 2 Next.js 16 applications.',
      'Developed authenticated and responsive application shells.',
    ],
  },
  {
    company: 'Kasper Infotech',
    role: 'Frontend Developer Intern',
    dates: 'June 2025 – August 2025',
    status: 'past',
    location: 'Greater Noida, India',
    logoUrl: '/images/misc/kasper.png',
    description: [
      'Engineered 10+ reusable React.js components with RESTful API integration.',
      'Reduced page load time by approximately 30% through code splitting and React.memo optimization.',
    ],
  },
];

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0); // First expanded by default

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="experience-section">
      <SectionTitle>Work Experience</SectionTitle>
      
      <div className="experience-timeline">
        {experiences.map((item, idx) => (
          <ExperienceCard
            key={item.company}
            company={item.company}
            role={item.role}
            dates={item.dates}
            status={item.status}
            logoUrl={item.logoUrl}
            location={item.location}
            description={item.description}
            isExpanded={expandedIdx === idx}
            onToggle={() => toggleExpand(idx)}
          />
        ))}
      </div>

      <div className="calendar-wrapper-container">
        <Calendar />
      </div>
    </section>
  );
};

export default Experience;
