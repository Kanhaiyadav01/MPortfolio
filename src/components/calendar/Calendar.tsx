import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

export const Calendar: React.FC = () => {
  const customTheme = {
    light: ['#383838', '#606060', '#8C8C8C', '#BABABA', '#EBEBEB'],
    dark: ['#383838', '#606060', '#8C8C8C', '#BABABA', '#EBEBEB'],
  };

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3 className="calendar-title">GitHub Contributions</h3>
        <a
          href="https://github.com/Kanhaiyadav01"
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-username-link"
        >
          @Kanhaiyadav01
        </a>
      </div>
      <div className="calendar-container">
        <GitHubCalendar
          username="Kanhaiyadav01"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={customTheme}
        />
      </div>
    </div>
  );
};

export default Calendar;
