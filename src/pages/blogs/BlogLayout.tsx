import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import { HiArrowRight } from 'react-icons/hi';
import './BlogLayout.css';

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
}

const posts: BlogPostMeta[] = [
  {
    slug: 'how-to-plan-a-project',
    title: 'How to Plan and Architect a Full Stack Project for Scale',
    date: 'Sep 20, 2026',
    readTime: '5 min read',
    summary: 'A developer-first guide to designing scalable REST APIs, relational schemas, and responsive UI components.',
  },
];

export const BlogLayout: React.FC = () => {
  return (
    <div className="blog-page-container">
      <SectionTitle>Articles & Insights</SectionTitle>

      <p className="blog-intro">
        Articles on full-stack architecture, React design patterns, PostgreSQL optimization, and software engineering.
      </p>

      <div className="blog-posts-list">
        {posts.map((post) => (
          <div key={post.slug} className="blog-post-card">
            <div className="post-header-meta">
              <span className="post-date">{post.date}</span>
              <span className="meta-dot">•</span>
              <span className="post-time">{post.readTime}</span>
            </div>
            <h3 className="post-title">
              <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="post-summary">{post.summary}</p>
            <Link to={`/blogs/${post.slug}`} className="read-more-btn">
              Read Article <HiArrowRight />
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BlogLayout;
