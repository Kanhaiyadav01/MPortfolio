import React, { ReactNode } from 'react';

export const BlogTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h1 style={{ fontFamily: 'var(--font-ui)', fontSize: '2rem', fontWeight: 700, margin: '20px 0 10px', color: '#fff', lineHeight: 1.2 }}>
    {children}
  </h1>
);

export const BlogHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.4rem', fontWeight: 600, margin: '24px 0 12px', color: '#fff', lineHeight: 1.3 }}>
    {children}
  </h2>
);

export const BlogDesc: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '1rem', color: 'var(--text-secondary)', margin: '8px 0 16px', lineHeight: 1.6 }}>
    {children}
  </p>
);

export const BlogParagraph: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '12px 0', lineHeight: 1.6 }}>
    {children}
  </p>
);
