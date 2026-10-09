import React, { useState } from 'react';
import { FiCopy, FiCheck, FiTerminal } from 'react-icons/fi';

export const BlogTerminal: React.FC<{ commands: string[]; title?: string }> = ({ commands, title = 'Terminal' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #444', borderRadius: '6px', overflow: 'hidden', margin: '16px 0', fontFamily: 'var(--font-mono)' }}>
      <div style={{ backgroundColor: '#232326', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #444' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#b3b3b3' }}>
          <FiTerminal /> {title}
        </div>
        <button onClick={handleCopy} style={{ color: '#888', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}>
          {copied ? <FiCheck style={{ color: '#22c55e' }} /> : <FiCopy />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div style={{ padding: '14px', fontSize: '0.85rem', color: '#86efac', overflowX: 'auto', lineHeight: 1.6 }}>
        {commands.map((cmd, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: '#666', userSelect: 'none' }}>$</span>
            <span>{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
