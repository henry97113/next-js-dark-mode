import React from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import ColorThemeToggle from '@/components/ColorThemeToggle';

import { DARK_COLORS, LIGHT_COLORS } from '@/constant';

import './globals.css';

export const metadata = {
  title: 'Dark Mode Demo',
  description: 'Demonstrate how to implement dark mode in Next.js',
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  // Possible color-theme values: 'light' | 'dark' | 'system'
  const colorTheme = cookieStore.get('color-theme')?.value || 'system';

  return (
    <html
      lang="en"
      data-color-theme={colorTheme}
      // default to light colors if the user disables JS
      style={colorTheme === 'dark' ? DARK_COLORS : LIGHT_COLORS}
    >
      <body>
        <header className="site-header">
          <Link href="">Dark Mode Demo</Link>
          <ColorThemeToggle initialTheme={colorTheme} />
        </header>
        {children}
      </body>
    </html>
  );
}
