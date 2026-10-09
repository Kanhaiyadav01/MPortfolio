import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import { usesData } from '../../data/uses';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './UsesLayout.css';

export const UsesLayout: React.FC = () => {
  return (
    <div className="uses-page-container">
      <SectionTitle>Uses & Tech Setup</SectionTitle>
      
      <p className="uses-intro">
        Here is a breakdown of the development software, system tooling, and workstation environment Kanhaiya uses daily.
      </p>

      <div className="uses-categories">
        {usesData.map((category) => (
          <div key={category.category} className="uses-category-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="uses-items-list">
              {category.items.map((item) => (
                <div key={item.name} className="uses-item-row">
                  <div className="item-left">
                    <span className="item-label">{item.label}:</span>
                    <span className="item-name">{item.name}</span>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                      title={`Visit ${item.name}`}
                    >
                      <HiOutlineExternalLink />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default UsesLayout;
