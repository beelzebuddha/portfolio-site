import type { Metadata } from 'next';
import { Space_Grotesk, Source_Sans_3 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import './globals.css';

// Applied before hydration (next/script "beforeInteractive") so the real
// theme is set before first paint -- avoids a flash of the wrong theme.
// Keep in sync with the toggle logic in SiteHeader.tsx.
const THEME_BOOTSTRAP_SCRIPT = `
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      var theme =
        stored === 'dark' || stored === 'light'
          ? stored
          : window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kevin B. Doyle — Product Design Leader',
  description:
    'Product design leader specializing in enterprise SaaS, internal platforms, and developer experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${sourceSans.variable}`}>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {THEME_BOOTSTRAP_SCRIPT}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
