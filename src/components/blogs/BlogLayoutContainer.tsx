import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import './BlogLayoutContainer.css';

export const BlogLayoutContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <article className="blog-container">
      <div className="blog-back-wrapper">
        <Link to="/blogs" className="blog-back-btn">
          <HiArrowLeft /> Back to Blogs
        </Link>
      </div>
      <div className="blog-content-body">{children}</div>
    </article>
  );
};

export default BlogLayoutContainer;
