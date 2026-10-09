import React, { ReactNode } from 'react';

export const BlogOrderedList: React.FC<{ items: ReactNode[] }> = ({ items }) => (
  <ol style={{ paddingLeft: '20px', margin: '12px 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', fontSize: '0.92rem', lineHeight: 1.6 }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
    ))}
  </ol>
);

export const BlogUnorderedList: React.FC<{ items: ReactNode[] }> = ({ items }) => (
  <ul style={{ paddingLeft: '20px', margin: '12px 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', fontSize: '0.92rem', lineHeight: 1.6 }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
    ))}
  </ul>
);
