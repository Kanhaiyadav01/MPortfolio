import React, { ReactNode } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const BlogLink: React.FC<{ href: string; children: ReactNode; external?: boolean }> = ({ href, children, external = true }) => (
  <a
    href={href}
    target={external ? '_blank' : '_self'}
    rel={external ? 'noopener noreferrer' : ''}
    style={{ color: '#3b82f6', textDecoration: 'none', borderBottom: '1px solid rgba(59,130,246,0.3)', transition: 'color 0.2s' }}
  >
    {children} {external && <HiOutlineExternalLink style={{ fontSize: '0.8em', verticalAlign: 'middle' }} />}
  </a>
);

export const BlogButton: React.FC<{ href?: string; onClick?: () => void; children: ReactNode; icon?: ReactNode }> = ({ href, onClick, children, icon }) => {
  const content = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#1a1b1c', color: '#fff', border: '1px solid #444', borderRadius: '6px', padding: '8px 16px', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer' }}>
      {icon} {children}
    </span>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      {content}
    </a>
  ) : (
    <button onClick={onClick}>{content}</button>
  );
};

export const BlogButtonsContainer: React.FC<{ children: ReactNode; direction?: 'row' | 'column' }> = ({ children, direction = 'row' }) => (
  <div style={{ display: 'flex', flexDirection: direction, gap: '12px', margin: '16px 0' }}>
    {children}
  </div>
);
