import React, { ReactNode } from 'react';

export const BlogTextLine: React.FC<{ icon?: ReactNode; children: ReactNode }> = ({ icon, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '4px', margin: '8px 0', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
    {icon && <span style={{ color: 'var(--text-primary)', fontSize: '1.1em' }}>{icon}</span>}
    <div>{children}</div>
  </div>
);
