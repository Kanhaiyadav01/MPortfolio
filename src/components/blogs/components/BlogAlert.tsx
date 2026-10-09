import React, { ReactNode } from 'react';
import { FaLightbulb, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

export const BlogTip: React.FC<{ title?: string; children: ReactNode }> = ({ title = 'Tip', children }) => (
  <div style={{ backgroundColor: 'rgba(34,197,94,0.05)', borderLeft: '4px solid #22c55e', padding: '14px 18px', borderRadius: '4px', margin: '16px 0', color: '#86efac' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '6px' }}>
      <FaLightbulb /> {title}
    </div>
    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{children}</div>
  </div>
);

export const BlogWarn: React.FC<{ title?: string; children: ReactNode }> = ({ title = 'Warning', children }) => (
  <div style={{ backgroundColor: 'rgba(251,191,36,0.05)', borderLeft: '4px solid #fbbf24', padding: '14px 18px', borderRadius: '4px', margin: '16px 0', color: '#fde047' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '6px' }}>
      <FaExclamationTriangle /> {title}
    </div>
    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{children}</div>
  </div>
);

export const BlogDontDo: React.FC<{ title?: string; children: ReactNode }> = ({ title = "Don't Do This", children }) => (
  <div style={{ backgroundColor: 'rgba(239,68,68,0.05)', borderLeft: '4px solid #ef4444', padding: '14px 18px', borderRadius: '4px', margin: '16px 0', color: '#fca5a5' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '6px' }}>
      <FaTimesCircle /> {title}
    </div>
    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{children}</div>
  </div>
);
