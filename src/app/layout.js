import React from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import ThemeToggle from '@/components/ThemeToggle';

import { DARK_COLORS, LIGHT_COLORS } from '@/constant';

import './globals.css';

export const metadata = {
  title: 'Dark Mode Demo',
  description: 'Demonstrate how to implement dark mode in Next.js',
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const colorTheme = cookieStore.get('color-theme')?.value || 'light';

  return (
    <html
      lang="en"
      data-color-theme={colorTheme}
      style={colorTheme === 'light' ? LIGHT_COLORS : DARK_COLORS}
    >
      <body>
        <header className="site-header">
          <Link href="">Dark Mode Demo</Link>
          <ThemeToggle initialTheme={colorTheme} />
        </header>
        {children}
      </body>
    </html>
  );
}
