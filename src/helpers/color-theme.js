export function getNextTheme(currentTheme) {
  // Order: light -> dark -> system
  if (currentTheme === 'light') {
    return 'dark';
  }
  if (currentTheme === 'dark') {
    return 'system';
  }
  if (currentTheme === 'system') {
    return 'light';
  }
}

export function getSystemColorTheme() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
}
