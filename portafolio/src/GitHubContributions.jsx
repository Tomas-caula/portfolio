import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributionGraph = () => {
  const calendarRef = useRef(null);

  return <GitHubCalendar username="Tomas-caula" />;
};

export default GitHubContributionGraph;
