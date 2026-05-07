import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Michael / David Robles | Cybersecurity Portfolio',
  description: 'Portfolio de ciberseguridad, redes, Linux, Proxmox, DevOps y seguridad web.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
