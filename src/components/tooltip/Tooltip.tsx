import React, { forwardRef, useState, ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ text, position = 'top', children, className = '' }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div
        ref={ref}
        className={`tooltip-wrapper ${className}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        {visible && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <span className="tooltip-text">{text}</span>
            <div className="tooltip-arrow" />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
