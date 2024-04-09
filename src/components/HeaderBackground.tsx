'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const HeaderBackground = () => {
  const [navbar, setNavbar] = React.useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div
      className={cn(
        'inset-0 absolute transition-all -z-10',
        navbar && 'bg-white shadow-md shadow-zinc-300/20'
      )}
    ></div>
  );
};

export default HeaderBackground;
