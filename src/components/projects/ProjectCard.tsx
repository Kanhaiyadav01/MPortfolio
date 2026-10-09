import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { LuConstruction, LuLock } from 'react-icons/lu';
import './Projects.css';

export interface ProjectCardProps {
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

export const ProjectCard: React.FC<ProjectCardProps> = ({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  isUnderDevelopment,
  isPrivate,
  stats,
}) => {
  return (
    <div className="project-card-dashed-container">
      {/* Left: Dashboard Image Box with badges */}
      <div className="project-image-box">
        <img
          src={banner}
          alt={name}
          className="dashboard-preview-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%231a1b1c"/><text x="300" y="170" font-size="22" font-weight="bold" fill="%23ffffff" text-anchor="middle" font-family="sans-serif">${encodeURIComponent(name)}</text></svg>`;
          }}
        />
        {stats && <div className="badge-top-left font-mono-code">{stats}</div>}
        <div className="badge-top-right font-mono-code">
          {isPrivate ? 'PRIVATE 🔒' : 'FEATURED ✨'}
        </div>
      </div>

      {/* Right: Project Details & Tech Stack */}
      <div className="project-details-column">
        {/* Title & Action Buttons Header */}
        <div className="project-title-action-header font-inter">
          <div className="title-left">
            <h3 className="project-name-heading">{name}</h3>
            {isPrivate && <LuLock className="lock-icon" title="Private Repository" />}
            {isUnderDevelopment && (
              <span className="dev-status-pill font-mono-code">
                <LuConstruction /> Dev
              </span>
            )}
          </div>

          <div className="project-action-buttons">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="action-pill-btn live-btn"
              >
                <HiOutlineExternalLink className="btn-icon" /> Live
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-pill-btn github-btn"
              >
                <FaGithub className="btn-icon" /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Description Text */}
        <p className="project-description-text font-inter">{desc}</p>

        {/* Technologies Used Section */}
        <div className="technologies-used-section font-inter">
          <h4 className="tech-heading-label">Technologies Used:</h4>
          <div className="tech-pills-row font-inter">
            {tech.map((t) => (
              <span key={t} className="tech-badge-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
