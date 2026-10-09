import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/footer/Footer';

export const Home: React.FC = () => {
  return (
    <div className="home-page-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
