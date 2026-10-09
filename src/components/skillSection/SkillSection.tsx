import React from 'react';
import { IconType } from 'react-icons';
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import { LuBrainCircuit, LuCpu, LuBoxes, LuLayers } from 'react-icons/lu';
import SectionTitle from '../sectionTitle/SectionTitle';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: SkillItem[] = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'NoSQL', icon: FaDatabase, color: '#47A248' },
  { name: 'OpenAI API', icon: LuBrainCircuit, color: '#412991' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
];

const tools: SkillItem[] = [
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'DSA', icon: LuBrainCircuit, color: '#FFA116' },
  { name: 'OOP', icon: LuCpu, color: '#3b82f6' },
  { name: 'System Design', icon: LuLayers, color: '#22c55e' },
  { name: 'Software Design', icon: LuBoxes, color: '#f59e0b' },
];

export const SkillSection: React.FC = () => {
  return (
    <section className="skill-section">
      <SectionTitle>Skills & Tech Stack</SectionTitle>
      
      <div className="marquee-wrapper">
        {/* Row 1: Technologies */}
        <div className="marquee-track">
          <div className="animate-marquee">
            {[...technologies, ...technologies].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`tech-${idx}`} className="skill-pill">
                  <Icon className="skill-icon" style={{ color: item.color }} />
                  <span className="skill-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Tools & Concepts */}
        <div className="marquee-track margin-top">
          <div className="animate-marquee reverse">
            {[...tools, ...tools].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`tool-${idx}`} className="skill-pill">
                  <Icon className="skill-icon" style={{ color: item.color }} />
                  <span className="skill-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
