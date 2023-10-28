'use client';
import React from 'react';
import { Sun, Moon, Monitor } from 'react-feather';
import Cookies from 'js-cookie';

import { DARK_COLORS, LIGHT_COLORS } from '@/constant';
import { getNextTheme, getSystemColorTheme } from '@/helpers/color-theme';
import VisuallyHidden from '../VisuallyHidden';

import styles from './ColorThemeToggle.module.css';

function ColorThemeToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = getNextTheme(theme);

    setTheme(nextTheme);

    // Persist the color theme, and make it available on the server
    // to prevent the flickering when loading the page.
    Cookies.set('color-theme', nextTheme, { expires: 500 });

    const rootElement = document.documentElement;
    let colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

    if (nextTheme === 'system') {
      const systemColorTheme = getSystemColorTheme();
      colors = systemColorTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;
    }

    rootElement.setAttribute('data-color-theme', nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      rootElement.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles['toggle-button']} onClick={handleClick}>
      {theme === 'light' ? (
        <Sun size="1.5rem" />
      ) : theme === 'dark' ? (
        <Moon size="1.5rem" />
      ) : (
        <Monitor size="1.5rem" />
      )}
      <VisuallyHidden>Toggle light/dark mode</VisuallyHidden>
    </button>
  );
}

export default ColorThemeToggle;
