import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HAI RADIO',
  description: 'HomelandAI radio mainframe, venue signal network, NPC host universe, and Playlist Pulse gateway.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
