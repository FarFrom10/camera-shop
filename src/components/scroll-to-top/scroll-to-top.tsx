import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: JSX.Element;
}

function ScrollToTop({children}: ScrollToTopProps): JSX.Element{
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0,0);

  },[pathname]);

  return children;
}

export default ScrollToTop;
