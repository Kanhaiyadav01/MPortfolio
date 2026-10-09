import React, { ReactNode } from 'react';
import { userImages } from '../../../data/images';

export const BlogAuthor: React.FC<{ name?: string; avatar?: string; children?: ReactNode }> = ({
  name = 'Kanhaiya Yadav',
  avatar = userImages.profile.avatar,
  children,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: '#1a1b1c', border: '1px solid #444', borderRadius: '6px', padding: '14px 18px', margin: '24px 0' }}>
    <img
      src={avatar}
      alt={name}
      style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #3b82f6' }}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><rect width="44" height="44" fill="%23232326"/><text x="22" y="27" font-size="16" fill="%23ffffff" text-anchor="middle" font-family="sans-serif">KY</text></svg>';
      }}
    />
    <div>
      <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: 0 }}>{name}</h4>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-tertiary)', margin: '2px 0 0' }}>
        {children || 'Full Stack Developer & Student'}
      </p>
    </div>
  </div>
);
