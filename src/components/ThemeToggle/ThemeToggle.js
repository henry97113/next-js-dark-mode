'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';
import Cookies from 'js-cookie';

import { DARK_COLORS, LIGHT_COLORS } from '@/constant';
import VisuallyHidden from '../VisuallyHidden';

import styles from './ThemeToggle.module.css';

function ThemeToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    Cookies.set('color-theme', nextTheme, { expires: 500 });

    const rootElement = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

    rootElement.setAttribute('data-color-scheme', nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      rootElement.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles['toggle-button']} onClick={handleClick}>
      {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle light/dark mode</VisuallyHidden>
    </button>
  );
}

export default ThemeToggle;
