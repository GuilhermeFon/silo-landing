import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'foreground-light': 'var(--foreground-light)',
        'hero-background': 'var(--hero-background)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-reverse': 'var(--primary-reverse)',
        secondary: 'var(--secondary)',
        radius: 'var(--radius)',
        divider: 'var(--divider)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
