import React, { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only auto-scroll to top on FORWARD navigation (PUSH or REPLACE)
    // POP represents backward/forward history navigation where previous scroll position should be preserved
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};
