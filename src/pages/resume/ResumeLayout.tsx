import React from 'react';
import { HiDownload, HiOutlineEye, HiOutlineDocumentText } from 'react-icons/hi';
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
          <p className="resume-subtitle">Full Stack Developer • B.Tech AI/ML (2023 – 2027)</p>
        </div>
        <div className="resume-header-buttons">
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-view-btn"
          >
            <HiOutlineEye className="dl-icon" /> View PDF
          </a>
          <a
            href="/resume/resume.pdf"
            download="Kanhaiya_Yadav_Resume.pdf"
            className="resume-download-btn"
          >
            <HiDownload className="dl-icon" /> Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="resume-preview-box">
        <object
          data="/resume/resume.pdf"
          type="application/pdf"
          className="resume-pdf-object"
        >
          {/* Clean Mobile Fallback */}
          <div className="resume-fallback-card font-inter">
            <div className="fallback-header">
              <HiOutlineDocumentText className="doc-icon" />
              <div className="fallback-title-wrap">
                <h3 className="fallback-doc-title">Kanhaiya_Yadav_Resume.pdf</h3>
                <p className="fallback-doc-sub">Official Resume Document</p>
              </div>
            </div>

            <p className="fallback-instruction">
              Inline PDF embedding is optimized for desktop browsers. Tap below to view or download the complete resume.
            </p>

            <div className="fallback-action-row">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="fallback-primary-btn"
              >
                <HiOutlineEye className="btn-icon" /> View Resume PDF
              </a>
              <a
                href="/resume/resume.pdf"
                download="Kanhaiya_Yadav_Resume.pdf"
                className="fallback-secondary-btn"
              >
                <HiDownload className="btn-icon" /> Download PDF
              </a>
            </div>

            <div className="fallback-highlights-box">
              <h4 className="highlights-title">Resume Summary</h4>
              <ul className="highlights-list">
                <li><strong>Role:</strong> Full Stack Developer Intern at ASTRAFASH LLP</li>
                <li><strong>Education:</strong> B.Tech AI/ML (2023 – 2027)</li>
                <li><strong>Core Stack:</strong> React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB</li>
                <li><strong>DSA:</strong> 500+ Problems Solved (LeetCode &amp; GeeksforGeeks)</li>
              </ul>
            </div>
          </div>
        </object>
      </div>

      <Footer />
    </div>
  );
};

export default ResumeLayout;
