import React from 'react';
import BlogLayoutContainer from '../../components/blogs/BlogLayoutContainer';
import {
  BlogTitle,
  BlogHeader,
  BlogDesc,
  BlogParagraph,
  BlogTip,
  BlogWarn,
  BlogCodeBlock,
  BlogTerminal,
  BlogAuthor,
  WhiteBoldHighlight,
} from '../../components/blogs/components';
import Footer from '../../components/footer/Footer';

export const HowToPlanAProject: React.FC = () => {
  return (
    <div>
      <BlogLayoutContainer>
        <BlogTitle>How to Plan and Architect a Full Stack Project for Scale</BlogTitle>
        <BlogDesc>
          A step-by-step roadmap for software engineers: from schema design to API contracts and frontend component hierarchies.
        </BlogDesc>

        <BlogAuthor />

        <BlogParagraph>
          Building a full stack application requires upfront architectural decisions. Before writing code, setting up clear relational data models, API endpoints, and component abstractions prevents technical debt.
        </BlogParagraph>

        <BlogHeader>1. Data Modeling & Database Schema</BlogHeader>
        <BlogParagraph>
          Start with your data layer. For relational systems like <WhiteBoldHighlight>PostgreSQL</WhiteBoldHighlight>, declare strict schemas and indexes for frequent queries.
        </BlogParagraph>

        <BlogCodeBlock
          language="SQL"
          filename="schema.sql"
          code={`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'draft'
);`}
        />

        <BlogTip title="Pro Architecture Tip">
          Always separate data fetching from presentation logic in your components to maximize testability.
        </BlogTip>

        <BlogHeader>2. Setting Up Development Infrastructure</BlogHeader>
        <BlogTerminal
          title="Monorepo & App Initialization"
          commands={['pnpm create vite@latest my-app --template react-ts', 'cd my-app', 'pnpm install', 'pnpm dev']}
        />

        <BlogWarn title="Avoid Over-Engineering">
          Don't introduce microservices or heavy state stores until your monolithic architecture actually demands it.
        </BlogWarn>
      </BlogLayoutContainer>
      <Footer />
    </div>
  );
};

export default HowToPlanAProject;
