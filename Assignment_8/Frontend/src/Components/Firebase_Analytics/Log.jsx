import React, { useState, useEffect } from 'react';
import { analytics } from '../../config/fb-conf'; // Assuming fb-conf exports analytics

const LogEvents = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        analytics.logEvent('select_content');
      }, 1000); // Delay the event by 1 second
    }
  }, [isReady]);

  // Only log event if analytics is ready
  if (isReady) {
    analytics.logEvent('app_open');
  }

  return null; // Or return any JSX you need from this component
};

export default LogEvents;
