import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import SectionTitle from '../sectionTitle/SectionTitle';
import { socialLinks } from '../../data/socialLinks';
import './ContactMe.css';

export const ContactMe: React.FC = () => {
  return (
    <section className="contact-me-section">
      <SectionTitle>Contact & Socials</SectionTitle>

      <div className="contact-card">
        <div className="contact-info">
          <h3 className="contact-title">Let's Connect & Collaborate</h3>
          <p className="contact-desc">
            Whether you have a project idea, job opportunity, or just want to talk about full-stack development and DSA, feel free to reach out across any platform.
          </p>
        </div>

        <div className="contact-links-grid">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
              style={{ '--brand-color': item.color } as React.CSSProperties}
            >
              <div className="contact-link-left">
                <span className="contact-platform-icon">{item.icon}</span>
                <span className="contact-platform-name">{item.name}</span>
              </div>
              <HiOutlineExternalLink className="contact-external" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
