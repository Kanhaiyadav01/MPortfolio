import React from 'react';
import { HiDownload } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './ResumeLayout.css';

export const ResumeLayout: React.FC = () => {
  return (
    <div className="resume-page-container">
      <SectionTitle>Resume</SectionTitle>

      <div className="resume-actions-header">
        <div className="resume-meta-info">
          <h2 className="resume-person-name">Kanhaiya Yadav</h2>
          <p className="resume-subtitle">Full Stack Developer • B.Tech CSE (2023 – 2027)</p>
        </div>
        <a
          href="/resume/resume.pdf"
          download="Kanhaiya_Yadav_Resume.pdf"
          className="resume-download-btn"
        >
          <HiDownload className="dl-icon" /> Download PDF
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="resume-preview-box">
        <object
          data="/resume/resume.pdf"
          type="application/pdf"
          className="resume-pdf-object"
        >
          {/* Fallback image preview if PDF embed plugin is disabled in browser */}
          <div className="resume-fallback-container">
            <img
              src="/resume/resume-preview.png"
              alt="Kanhaiya Yadav Resume"
              className="resume-img-fallback"
            />
          </div>
        </object>
      </div>

      <Footer />
    </div>
  );
};

export default ResumeLayout;
