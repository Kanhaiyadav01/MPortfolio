import React, { ReactNode } from 'react';
import './SectionTitle.css';

export interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="section-title-container">
      <div className="section-title-corner top-left" />
      <div className="section-title-corner top-right" />
      <h2 className="section-title-text">{children}</h2>
      <div className="section-title-corner bottom-left" />
      <div className="section-title-corner bottom-right" />
    </div>
  );
};

export default SectionTitle;
