import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuSun, LuMoon } from 'react-icons/lu';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { playClickSound } from '../../utils/sound';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    playClickSound();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    playClickSound();
    setIsMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <header className="navbar-header-sticky">
      <div className="navbar-max-wrapper">
        {/* Left: Brand Logo in Instrument Serif Font */}
        <NavLink to="/" onClick={closeMobileMenu} className="navbar-brand-logo font-serif-title">
          Kanhaiya
        </NavLink>

        {/* Center Nav Links (Desktop) */}
        <div className="navbar-center-links desktop-only font-inter">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <span>Home</span>
                {isActive && <span className="nav-link-underline" />}
              </>
            )}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <span>Projects</span>
                {isActive && <span className="nav-link-underline" />}
              </>
            )}
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <span>Resume</span>
                {isActive && <span className="nav-link-underline" />}
              </>
            )}
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <span>Experience</span>
                {isActive && <span className="nav-link-underline" />}
              </>
            )}
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <span>Blogs &amp; Articles</span>
                {isActive && <span className="nav-link-underline" />}
              </>
            )}
          </NavLink>
        </div>

        {/* Right: Dark / Light Mode Switcher & Mobile Hamburger */}
        <div className="navbar-right-actions">
          <button
            onClick={handleThemeToggle}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <LuSun className="theme-icon" /> : <LuMoon className="theme-icon" />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="mobile-hamburger-btn"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="hamburger-icon" />
            ) : (
              <HiOutlineMenu className="hamburger-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Menu Card */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-card font-inter">
            <NavLink to="/" end onClick={closeMobileMenu} className="mobile-nav-link">
              Home
            </NavLink>
            <NavLink to="/projects" onClick={closeMobileMenu} className="mobile-nav-link">
              Projects
            </NavLink>
            <NavLink to="/experience" onClick={closeMobileMenu} className="mobile-nav-link">
              Experience
            </NavLink>
            <NavLink to="/resume" onClick={closeMobileMenu} className="mobile-nav-link">
              Resume
            </NavLink>
            <NavLink to="/blogs" onClick={closeMobileMenu} className="mobile-nav-link">
              Blogs &amp; Articles
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
