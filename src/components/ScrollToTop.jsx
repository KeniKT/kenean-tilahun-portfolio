import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window
    window.scrollTo(0, 0);
    // Scroll document element and body directly
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Scroll the main element if it has its own scroll
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;