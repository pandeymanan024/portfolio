import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manan Pandey - Portfolio',
  description: 'Portfolio website showcasing work, research, and resume enhancement tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-blue-50 min-h-screen">{children}</body>
    </html>
  );
} 