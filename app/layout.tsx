import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Michael / David Robles | Cybersecurity Portfolio',
  description: 'Portfolio de ciberseguridad, redes, Linux, Proxmox, DevOps y seguridad web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
