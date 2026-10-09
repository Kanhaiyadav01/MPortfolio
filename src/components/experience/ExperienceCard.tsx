import React, { ReactNode } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './Experience.css';

export interface ExperienceCardProps {
  logo?: ReactNode;
  logoUrl?: string;
  company: string;
  links?: { url: string; icon: ReactNode }[];
  status: 'present' | 'past' | 'future';
  role: string;
  dates: string;
  location?: string;
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  dates,
  location,
  description,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className={`experience-card-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={onToggle}>
        <div className="company-info-col">
          <div className="role-meta">
            <h3 className="company-name">{company}</h3>
            <p className="role-subtitle">
              {role}{location ? ` · ${location}` : ''}
            </p>
          </div>
        </div>

        <div className="dates-col">
          <span className="dates-text">{dates}</span>
          <button className="expand-btn" aria-label="Toggle details">
            {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="card-body">
          <ul className="desc-bullets">
            {description.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
