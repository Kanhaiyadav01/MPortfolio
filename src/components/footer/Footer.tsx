import React from 'react';
import { FaArrowRight, FaQuoteRight, FaHeart } from 'react-icons/fa';
import { useVisitorCounter } from '../../hooks/useVisitorCounter';
import { playClickSound } from '../../utils/sound';
import './Footer.css';

export const Footer: React.FC = () => {
  const { visitorCount, loading } = useVisitorCounter();

  return (
    <footer className="footer-container">
      {/* Tier 1: Call to Action */}
      <div className="footer-tier footer-cta-tier">
        <p className="footer-cta-text">
          I'm a freelance software developer turning ideas into useful digital products. I build scalable web applications, robust backends, and cool stuff that solves real-world problems through clean code and practical engineering.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            playClickSound();
            const contactElem = document.getElementById('contact');
            if (contactElem) {
              e.preventDefault();
              contactElem.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="footer-talk-btn"
        >
          <span>HIRE ME</span>
          <FaArrowRight className="btn-arrow" />
        </a>
      </div>

      {/* Tier 2: Quote Section */}
      <div className="footer-tier footer-quote-tier">
        <div className="footer-quote-icon">
          <FaQuoteRight />
        </div>
        <blockquote className="footer-quote-text">
          "Karmanye vadhikaraste Ma Phaleshu Kadachana, Ma Karmaphalaheturbhur Ma Te Sangostvakarmani"
        </blockquote>
        <div className="footer-quote-author">
          <span className="author-dash" />
          <span className="author-name">BHAGAVAD GITA</span>
          <span className="author-dash" />
        </div>
      </div>

      {/* Tier 3: Dev Credit & Copyright */}
      <div className="footer-tier footer-bottom-tier">
        <p className="footer-dev-credit">
          Designed &amp; Made with <FaHeart className="heart-icon" /> by <strong>Kanhaiya</strong>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        {visitorCount !== null && (
          <div className="footer-visitor-badge">
            <span className="visitor-label">Visitors:</span>
            <span className="visitor-num">
              {loading ? '...' : visitorCount}
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

