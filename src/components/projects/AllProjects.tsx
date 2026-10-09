import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { allProjects } from '../../data/projects';
import './Projects.css';

export const AllProjects: React.FC = () => {
  return (
    <section className="all-projects-section">
      <SectionTitle>All Projects & Systems</SectionTitle>

      <div className="projects-grid">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
