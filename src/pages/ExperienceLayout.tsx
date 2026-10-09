import React from 'react';
import Experience from '../components/experience/Experience';
import Footer from '../components/footer/Footer';

export const ExperienceLayout: React.FC = () => {
  return (
    <div style={{ width: '100%', marginTop: '64px' }}>
      <Experience />
      <Footer />
    </div>
  );
};

export default ExperienceLayout;
