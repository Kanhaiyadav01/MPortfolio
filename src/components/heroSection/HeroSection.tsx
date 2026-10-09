import React, { useState, useEffect } from 'react';
import { HiOutlineEye } from 'react-icons/hi2';
import { Mascot } from 'page-mascot';
import { socialLinks } from '../../data/socialLinks';
import { userImages } from '../../data/images';
import { useVisitorCounter } from '../../hooks/useVisitorCounter';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const { visitorCount } = useVisitorCounter();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section-samworks">
      {/* 1. Top Landscape Background Banner */}
      <div className="hero-banner-container">
        <img
          src="/images/profile/banner.gif"
          alt="Waterfall Landscape Banner"
          className="hero-banner-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%25" stop-color="%231a2e26"/><stop offset="50%25" stop-color="%23111b18"/><stop offset="100%25" stop-color="%230b0e0d"/></linearGradient></defs><rect width="800" height="200" fill="url(%23g)"/><path d="M0 160 Q 200 120, 400 150 T 800 140 L 800 200 L 0 200 Z" fill="%231a2b22" opacity="0.6"/><path d="M0 180 Q 300 140, 600 170 T 800 160 L 800 200 L 0 200 Z" fill="%230f1c16" opacity="0.8"/></svg>';
          }}
        />
      </div>

      {/* 2. Main Profile Info Row */}
      <div className="hero-profile-row">
        {/* Squircle DP Avatar (NOT a circle!) */}
        <div className="squircle-dp-container">
          <img
            src={userImages.profile.avatar}
            alt="Kanhaiya Yadav"
            className="squircle-dp-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="12" fill="%23232326"/><text x="60" y="70" font-size="40" fill="%23ffffff" text-anchor="middle" font-family="sans-serif">KY</text></svg>';
            }}
          />
        </div>

        {/* Name & Details Column */}
        <div className="hero-info-column">
          <div className="hero-info-left">
            {/* Name in Instrument Serif Font */}
            <h1 className="hero-name-serif font-serif-title">
              Kanhaiya Yadav
            </h1>

            {/* Role / Subtitle */}
            <p className="hero-role-text font-inter">
              Full Stack Developer
            </p>

            {/* Location & Live Clock: India • 09:14:56 PM */}
            <p className="hero-location-text font-mono-code">
              India &nbsp;•&nbsp; {time || '09:14:56 PM'}
            </p>
          </div>

          {/* Right Side: Panda Mascot & Real Visitor Counter */}
          <div className="hero-views-right">
            <div className="hero-panda-mascot-wrapper" title="Poke me!">
              <Mascot
                directions="/mascots/panda-directions.webp"
                reactions="/mascots/panda-reactions.webp"
                size={92}
              />
            </div>
            <div className="view-counter-pill font-mono-code" title="Total Unique Site Visitors">
              <HiOutlineEye className="eye-icon" />
              <span>{visitorCount ?? 1}</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Paragraph Section */}
      <div className="hero-about-box font-inter">
        <div className="about-bullet-row">
          <span className="bullet-dot">•</span>
          <p>
            I'm a <span className="font-bold underline">Full Stack Developer</span> passionate about building scalable, responsive, and user-centric web applications.
          </p>
        </div>
        <div className="about-bullet-row">
          <span className="bullet-dot">•</span>
          <p>
            I engineer modern web experiences using <span className="font-bold underline">React, Next.js, TypeScript, Node.js, PostgreSQL & MongoDB</span> focusing on performance and clean architecture.
          </p>
        </div>
        <div className="about-bullet-row">
          <span className="bullet-dot">•</span>
          <p>
            Currently I'm a 4th-year B.Tech AI/ML student with <span className="font-bold underline">500+ DSA problems solved</span> on LeetCode and GeeksforGeeks.
          </p>
        </div>
      </div>

      {/* Social Links Row Grid */}
      <div className="hero-social-grid font-inter">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-grid-btn"
          >
            <span className="social-icon">{item.icon}</span>
            <span className="social-label">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
