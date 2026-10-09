import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export const BlogCodeBlock: React.FC<{ code: string; filename?: string; language?: string }> = ({ code, filename, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #444', borderRadius: '6px', overflow: 'hidden', margin: '16px 0', fontFamily: 'var(--font-mono)' }}>
      {(filename || language) && (
        <div style={{ backgroundColor: '#232326', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #444', fontSize: '0.8rem', color: '#b3b3b3' }}>
          <span>{filename || language}</span>
          <button onClick={handleCopy} style={{ color: '#888', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {copied ? <FiCheck style={{ color: '#22c55e' }} /> : <FiCopy />} {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <pre style={{ padding: '14px', margin: 0, fontSize: '0.85rem', color: '#ffffff', overflowX: 'auto', lineHeight: 1.6 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};
