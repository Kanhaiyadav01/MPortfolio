import React from 'react';

export const BlogImage: React.FC<{ src: string; alt: string; width?: string }> = ({ src, alt, width = '100%' }) => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>
    <img src={src} alt={alt} style={{ width, maxWidth: '100%', borderRadius: '6px', border: '1px solid var(--border-default)' }} />
    {alt && <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '6px' }}>{alt}</p>}
  </div>
);

export const BlogImages: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${images.length}, 1fr)`, gap: '12px', margin: '20px 0' }}>
    {images.map((img, idx) => (
      <img key={idx} src={img.src} alt={img.alt} style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--border-default)' }} />
    ))}
  </div>
);

export const BlogEmoji: React.FC<{ src: string; alt: string; size?: 'small' | 'medium' | 'large' }> = ({ src, alt, size = 'medium' }) => {
  const dim = size === 'small' ? '20px' : size === 'large' ? '40px' : '28px';
  return <img src={src} alt={alt} style={{ width: dim, height: dim, display: 'inline-block', verticalAlign: 'middle' }} />;
};
