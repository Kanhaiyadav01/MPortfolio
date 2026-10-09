import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../sectionTitle/SectionTitle';
import './UsesSection.css';

export const UsesSection: React.FC = () => {
  return (
    <section className="uses-teaser-section">
      <SectionTitle>Uses & Setup</SectionTitle>

      <div className="uses-teaser-card">
        <div className="uses-teaser-content">
          <h3 className="uses-teaser-title">Tools, Gear & Workflow</h3>
          <p className="uses-teaser-desc">
            A curated list of software applications, development tools, workstations, and daily gear Kanhaiya relies on to build applications.
          </p>
        </div>
        <Link to="/uses" className="uses-teaser-btn">
          View Setup <HiArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
};

export default UsesSection;
