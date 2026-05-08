import type { Metadata } from 'next';
import { SmoothScroll } from '../components/ui/smooth-scroll';
import { ScrollTopReset } from '../components/ui/scroll-top-reset';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';
import { GsapAnimations } from '../components/ui/gsap-animations';
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
      <body>
        <SmoothScroll />
        <ScrollTopReset />
        <RevealOnScroll />
        <GsapAnimations />
        {children}
      </body>
    </html>
  );
}
