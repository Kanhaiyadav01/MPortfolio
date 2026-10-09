import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import ClickSpark from './components/ClickSpark';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/ProjectsLayout'));
const ExperienceLayout = lazy(() => import('./pages/ExperienceLayout'));
const UsesLayout = lazy(() => import('./pages/uses/UsesLayout'));
const BlogLayout = lazy(() => import('./pages/blogs/BlogLayout'));
const HowToPlanAProject = lazy(() => import('./pages/blogs/HowToPlanAProject'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={15}>
            <main className="main-content">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/projects" element={<ProjectsLayout />} />
                  <Route path="/experience" element={<ExperienceLayout />} />
                  <Route path="/uses" element={<UsesLayout />} />
                  <Route path="/blogs" element={<BlogLayout />} />
                  <Route path="/blogs/how-to-plan-a-project" element={<HowToPlanAProject />} />
                  <Route path="/resume" element={<ResumeLayout />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Analytics />
          </ClickSpark>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
