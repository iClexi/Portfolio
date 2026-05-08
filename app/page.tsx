'use client';

import {
  Boxes,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  FolderGit2,
  Gamepad2,
  GitBranch,
  Globe2,
  HardDrive,
  Languages,
  Mail,
  MonitorPlay,
  Network,
  RadioTower,
  Server,
  ShieldCheck,
  Terminal,
  Trophy,
  UserRound,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Language = 'es' | 'en';
type ServiceLink = {
  label: string;
  href: string;
  accent: string;
  icon: typeof Code2;
  summaryEs: string;
  summaryEn: string;
  bulletsEs: string[];
  bulletsEn: string[];
};
type LogoItem = {
  label: string;
  logo: string;
  color: string;
  render?: 'mask' | 'image';
};

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/iClexi', icon: GitBranch },
  { label: 'YouTube', href: 'https://www.youtube.com/@iclexi2688/videos', icon: MonitorPlay },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-robles-03798a23a/', icon: Globe2 },
];

const serviceLinks: ServiceLink[] = [
  {
    label: 'RitmoHub',
    href: 'https://ritmohub.iclexi.tech',
    accent: '#52c7ea',
    icon: Code2,
    summaryEs: 'Red social musical con perfiles, sesiones, eventos, chat, recuperación de cuenta y base de datos PostgreSQL.',
    summaryEn: 'Music social platform with profiles, sessions, events, chat, account recovery and PostgreSQL.',
    bulletsEs: ['Next.js, React y TypeScript', 'Autenticación, sesiones y recuperación', 'Despliegue web con túnel y dominio propio'],
    bulletsEn: ['Next.js, React and TypeScript', 'Authentication, sessions and recovery', 'Web deployment with tunnel and custom domain'],
  },
  {
    label: 'PPT del Terror',
    href: 'https://terror.iclexi.tech',
    accent: '#ff4d6d',
    icon: Gamepad2,
    summaryEs: 'Juego web con login, registro, ranking semanal/global, PostgreSQL y panel admin para observar tráfico técnico.',
    summaryEn: 'Web game with login, registration, weekly/global ranking, PostgreSQL and admin traffic visibility.',
    bulletsEs: ['React + Vite', 'Ranking y puntuaciones persistentes', 'Controles de seguridad y rate limiting'],
    bulletsEn: ['React + Vite', 'Persistent ranking and scores', 'Security controls and rate limiting'],
  },
  {
    label: 'CryptoToolbox',
    href: 'https://cryptotoolbox.iclexi.tech',
    accent: '#27e0a3',
    icon: ShieldCheck,
    summaryEs: 'Herramienta para hashes, verificación de checksums, chat, perfiles, reputación, tráfico admin y base de datos.',
    summaryEn: 'Hashing and checksum verification tool with chat, profiles, reputation, admin traffic and database.',
    bulletsEs: ['MD5, SHA1 y SHA256', 'Verificación de archivos y actividad global', 'Socket.IO y PostgreSQL'],
    bulletsEn: ['MD5, SHA1 and SHA256', 'File verification and global activity', 'Socket.IO and PostgreSQL'],
  },
];

const heroOrbitTechs: LogoItem[] = [
  { label: 'Proxmox', logo: '/logos/proxmox.svg', color: '#E57000' },
  { label: 'Docker', logo: '/logos/docker.svg', color: '#2496ED' },
  { label: 'Wazuh', logo: '/logos/wazuh.ico', color: '#00A3E0', render: 'image' },
  { label: 'PostgreSQL', logo: '/logos/postgresql.svg', color: '#336791' },
];

const toolStack: LogoItem[] = [
  { label: 'Linux', logo: '/logos/linux.svg', color: '#FCC624' },
  { label: 'Ubuntu Server', logo: '/logos/ubuntu.svg', color: '#E95420' },
  { label: 'Debian', logo: '/logos/debian.svg', color: '#A81D33' },
  { label: 'Kali Linux', logo: '/logos/kali-linux.svg', color: '#557C94' },
  { label: 'Proxmox', logo: '/logos/proxmox.svg', color: '#E57000' },
  { label: 'Docker', logo: '/logos/docker.svg', color: '#2496ED' },
  { label: 'Cloudflare Tunnel', logo: '/logos/cloudflare.svg', color: '#F38020' },
  { label: 'TrueNAS', logo: '/logos/truenas.svg', color: '#0095D5' },
  { label: 'Nextcloud', logo: '/logos/nextcloud.svg', color: '#0082C9' },
  { label: 'Wazuh', logo: '/logos/wazuh.ico', color: '#00A3E0', render: 'image' },
  { label: 'OWASP ZAP', logo: '/logos/owasp.svg', color: '#5C8728' },
  { label: 'SonarQube', logo: '/logos/sonarqube.svg', color: '#4E9BCD' },
  { label: 'Nmap', logo: '/logos/nmap.png', color: '#468C00', render: 'image' },
  { label: 'Burp Suite', logo: '/logos/burpsuite.svg', color: '#FF6633' },
  { label: 'Cisco Packet Tracer', logo: '/logos/cisco.svg', color: '#1BA0D7' },
  { label: 'PostgreSQL', logo: '/logos/postgresql.svg', color: '#336791' },
  { label: 'Next.js', logo: '/logos/nextdotjs.svg', color: '#000000' },
  { label: 'React', logo: '/logos/react.svg', color: '#61DAFB' },
  { label: 'TypeScript', logo: '/logos/typescript.svg', color: '#3178C6' },
  { label: 'GitHub', logo: '/logos/github.svg', color: '#181717' },
];

const certifications = [
  {
    issuer: 'Cisco',
    name: 'CCNA 1',
    detail: 'Networking Basics / Switching fundamentals',
    logo: '/certifications/ccna1.png',
    logoAlt: 'Logo Cisco CCNA 1',
  },
  {
    issuer: 'Cisco',
    name: 'CCNA 2',
    detail: 'Switching, Routing and Wireless Essentials',
    logo: '/certifications/ccna2.png',
    logoAlt: 'Logo Cisco CCNA 2',
  },
  {
    issuer: 'Cisco',
    name: 'CCNA 3',
    detail: 'Enterprise Networking, Security and Automation',
    logo: '/certifications/ccna3.png',
    logoAlt: 'Logo Cisco CCNA 3',
  },
  {
    issuer: 'Cisco',
    name: 'Ethical Hacker',
    detail: 'Fundamentos de hacking ético y pruebas de seguridad',
    logo: '/certifications/ethical-hacker.png',
    logoAlt: 'Logo Cisco Ethical Hacker',
  },
  {
    issuer: 'Huawei',
    name: 'HCIA Datacom',
    detail: 'Redes IP, routing, switching y operación Datacom',
    logo: '/certifications/hcia-datacom.png',
    logoAlt: 'Logo Huawei HCIA Datacom',
  },
];

const proxmoxServices = [
  { name: 'pfSense', role: 'Firewall/router del laboratorio', icon: ShieldCheck },
  { name: 'TrueNAS', role: 'NAS y almacenamiento interno', icon: HardDrive },
  { name: 'VPN / Tailscale', role: 'Acceso remoto seguro', icon: RadioTower },
  { name: 'Wazuh', role: 'SIEM y monitoreo de seguridad', icon: ShieldCheck },
  { name: 'DNS interno', role: 'Resolución local para servicios', icon: Network },
  { name: 'Proxy interno', role: 'Forwarding y publicación controlada', icon: Globe2 },
  { name: 'Minecraft', role: 'Servidor Java y Bedrock', icon: Gamepad2 },
  { name: 'HA Web 201/202', role: 'RitmoHub, CryptoToolbox y PPT', icon: Server },
  { name: 'Jellyfin', role: 'Servicio multimedia en Docker', icon: MonitorPlay },
  { name: 'Nextcloud', role: 'Nube privada y archivos', icon: Cloud },
];

const githubRepos = [
  { name: 'Proxmox', stack: 'Docs / Shell', href: 'https://github.com/iClexi/Proxmox' },
  { name: 'Portfolio', stack: 'Next.js', href: 'https://github.com/iClexi/Portfolio' },
  { name: 'PPT-Del-terror', stack: 'React / Express', href: 'https://github.com/iClexi/PPT-Del-terror' },
  { name: 'cryptotoolbox', stack: 'React / PostgreSQL', href: 'https://github.com/iClexi/cryptotoolbox' },
  { name: 'ritmohub', stack: 'Next.js / PostgreSQL', href: 'https://github.com/iClexi/ritmohub' },
  { name: 'Skytech Redes Corporativas', stack: 'Redes / Servidores', href: 'https://github.com/Edgardy715/Skytech-Redes-Corporativas' },
];

const projects = [
  {
    title: 'RitmoHub',
    detail: 'Aplicación musical con login, sesiones, base de datos, recuperación de contraseña, eventos, comunidad y despliegue real.',
    icon: Code2,
  },
  {
    title: 'Homelab Proxmox',
    detail: 'Entorno de virtualización con VMs para Wazuh, TrueNAS, Nextcloud, DNS, Minecraft, HA web y servicios internos.',
    icon: Server,
  },
  {
    title: 'Laboratorio SAST/DAST',
    detail: 'Evaluación de aplicaciones con SonarQube, OWASP ZAP y análisis de vulnerabilidades web en ejecución.',
    icon: ShieldCheck,
  },
  {
    title: 'Skytech Redes Corporativas',
    detail: 'Proyecto colaborativo donde trabajé la parte de servidores en Santiago: DNS, FTP, mail, RADIUS, TFTP, VoIP y Ansible. También hice la página web del proyecto.',
    icon: Network,
    href: 'https://github.com/Edgardy715/Skytech-Redes-Corporativas/tree/main/configs/Santiago/Servidores',
  },
  {
    title: 'Topología Packet Tracer / PNET',
    detail: 'Red corporativa con sedes, VLANs, OSPF, DHCP, HSRP, trunks, port security y servicios centralizados.',
    icon: GitBranch,
  },
  {
    title: 'Minecraft Java + Bedrock',
    detail: 'Servidor dedicado en Linux con acceso externo por mc.iclexi.tech, servicios systemd y red interna/externa.',
    icon: Gamepad2,
  },
];

const youtubeVideos = [
  ['Seguridad web y API', 'Escaner con Maltego a la empresa Transunion', '33:46', '7 vistas'],
  ['Seguridad web y API', 'Practica Autenticacion utilizando Cookies de Session', '17:10', '23 vistas'],
  ['Seguridad web y API', '6.12.13 Lab - Use the OWASI Web Security Testing Guide', '12:32', '6 vistas'],
  ['Seguridad web y API', '6.7.8 Lab - Cross Site Scripting', '21:57', '8 vistas'],
  ['Seguridad web y API', '6.4.7 Lab - Injection Attacks', '9:05', '25 vistas'],
  ['Seguridad web y API', '6.1.7 Lab - Web Vulnerability Scanning', '13:38', '14 vistas'],
  ['Seguridad web y API', '6.1.8 Lab - Using the GM Vulnerability Scanner', '15:03', '7 vistas'],
  ['Seguridad web y API', 'API 1 2023 Broken Object Level Authorization', '5:33', '12 vistas'],
  ['Seguridad web y API', 'API 2 2023 Broken Authentication', '7:35', '13 vistas'],
  ['Seguridad web y API', 'API 3 2023 Broken Object Property Level Authorization', '5:26', '12 vistas'],
  ['Seguridad web y API', 'API 4 2023 Unrestricted Resource Consumption', '9:53', '9 vistas'],
  ['Seguridad web y API', 'API 5 2023 Broken Function Level Authorization', '5:00', '11 vistas'],
  ['Seguridad web y API', 'API 6 2023 Unrestricted Access to Sensitive Business Flows', '7:09', '3 vistas'],
  ['Seguridad web y API', 'API 7 2023 Server Side Request Forgery', '5:19', '2 vistas'],
  ['Seguridad web y API', 'API 8 2023 Security Misconfiguration', '6:12', '5 vistas'],
  ['Seguridad web y API', 'API 9 2023 Improper Inventory Management', '9:06', '8 vistas'],
  ['Seguridad web y API', 'API 10 2023 Unsafe Consumption of APIs', '10:03', '9 vistas'],
  ['Ofensiva y análisis', '6.5.8 Lab - Using Password Tools', '15:56', '21 vistas'],
  ['Ofensiva y análisis', '10.1.20 Lab - Analyze Automation Code', '29:23', '12 vistas'],
  ['Ofensiva y análisis', '10.1.19 Lab - Analyze Exploit Code', '8:24', '19 vistas'],
  ['Ofensiva y análisis', '4.4.7 Lab - Explore the Social Engineer Toolkil SET', '10:53', '13 vistas'],
  ['Ofensiva y análisis', '4.4.8 Lab - Using the Browser Exploitation Framework BeEF', '21:47', '8 vistas'],
  ['Ofensiva y análisis', '5.1.16 Lab - On Path Attacks with Ettercap', '19:18', '15 vistas'],
  ['Ofensiva y análisis', '3.3.6 Lab - Vulnerability Scanning with Kali Tools', '32:17', '4 vistas'],
  ['Ofensiva y análisis', '3.2.9 Lab - Packet Crafting With Scapy', '28:05', '5 vistas'],
  ['Ofensiva y análisis', '3.2.6 Lab -Enumeration with Nmap', '16:18', '5 vistas'],
  ['Ofensiva y análisis', '3.2.11 Lab – Network Sniffing with Wireshark', '11:48', '15 vistas'],
  ['Ofensiva y análisis', '3.1.20 Lab - Shodan Searches', '20:06', '6 vistas'],
  ['Ofensiva y análisis', '3.1.18 Lab - Finding Out About the Organizatio', '45:14', '4 vistas'],
  ['Ofensiva y análisis', '3.1.14 Lab - Finding Information from SSL Certificates', '20:28', '19 vistas'],
  ['Ofensiva y análisis', '3.1.4 Lab – Using OSINT Tools', '44:53', '10 vistas'],
  ['Ofensiva y análisis', '3.1.9 Lab - DNS Lookups', '20:09', '11 vistas'],
  ['Linux y hardening', 'Examen Final - Lab B: Instalacion, Escaneo y arreglo de vulnerabilidades con Openscap', '48:34', '37 vistas'],
  ['Linux y hardening', 'Examen Final - Lab A: Instalacion y creacion de escaneos con Nessus en Server Linux RHEL 9.6', '21:03', '15 vistas'],
  ['Linux y hardening', 'Segundo Parcial - Lab B: Escaneos con Nessus y Fixs de vulnerabilidades', '20:42', '22 vistas'],
  ['Linux y hardening', 'Segundo Parcial - Lab A: Instalacion de Nessus', '6:29', '21 vistas'],
  ['Linux y hardening', 'Practica 10 - ClamAV', '20:02', '14 vistas'],
  ['Linux y hardening', 'Practica 9 - Linux Hardening', '30:23', '13 vistas'],
  ['Linux y hardening', 'Practica 8 - Lab A: Instalacion de Servidor Linux (RHEL)', '11:23', '24 vistas'],
  ['Linux y hardening', 'Practica 8 - Lab B: Gestion de Usuarios en Linux (RHEL)', '20:48', '18 vistas'],
  ['Linux y hardening', '1.3.7 Lab - Investigate Kali Linux', '31:57', '19 vistas'],
  ['Linux y hardening', 'Laboratorio 3.3: Configuracion de servidor SSH', '21:14', '24 vistas'],
  ['Linux y hardening', 'Laboratorio 3.2: Shell Scripting en Ubuntu Server', '20:01', '26 vistas'],
  ['Linux y hardening', 'Laboratorio 3.1: Editando GRUB', '9:49', '14 vistas'],
  ['Linux y hardening', 'Laboratorio 2.3: Control de disco duro', '10:44', '7 vistas'],
  ['Linux y hardening', 'Laboratorio 2.2: Administracion de tareas', '9:13', '9 vistas'],
  ['Linux y hardening', 'Laboratorio 2.1: Actualizacion de repositorios e instalacion de herramientas', '14:02', '74 vistas'],
  ['Linux y hardening', 'Laboratorio 1.4: Gestion de permisos de archivos', '5:22', '5 vistas'],
  ['Linux y hardening', 'Laboratorio 1.3: Gestion de usuarios y grupos', '4:52', '9 vistas'],
  ['Linux y hardening', 'Laboratorio 1.1: Instalación del servidor Ubuntu', '8:37', '61 vistas'],
  ['Redes y Windows Server', 'Primer Parcial Práctico - Conmutacion y enrutamiento - Onel Pelegrino', '2:04:45', '38 vistas'],
  ['Redes y Windows Server', 'Practica 7 - LAPS', '6:59', '16 vistas'],
  ['Redes y Windows Server', 'Practica 6 - DNSSEC', '12:25', '11 vistas'],
  ['Redes y Windows Server', 'Practica 5 - Instalar Windows Server Backup', '26:41', '24 vistas'],
  ['Redes y Windows Server', 'Practica 4 - Reemplazos de WSUS', '6:15', '12 vistas'],
  ['Redes y Windows Server', 'Practica 4 - Lab A: WSUS', '16:41', '27 vistas'],
  ['Redes y Windows Server', 'Practica 3 - Explicación de ataques Pass The Hashes', '11:17', '13 vistas'],
  ['Redes y Windows Server', 'Practica 3 - Lab A: Implementación de GPO de Credential Guard en Server y Cliente', '24:48', '34 vistas'],
  ['Redes y Windows Server', 'Practica 3 - Lab B: Implementacion de GPO para bloquear dispositivos de almacenamientos USB', '10:23', '8 vistas'],
  ['Redes y Windows Server', 'Practica 2 - Lab B: Bloqueo NTLM', '19:20', '28 vistas'],
  ['Redes y Windows Server', 'Practica 2 - Lab A: Encriptacion Bitlocker a PC Servidor y Cliente', '31:38', '35 vistas'],
  ['Redes y Windows Server', 'Practica 1 - Lab C: Instalacion y enrolamiento a dominio de AD de VM Windows 11 Pro', '19:01', '34 vistas'],
  ['Redes y Windows Server', 'Practica 1 - Lab B: Instalacion y configuracion de Active Directory', '16:54', '24 vistas'],
  ['Redes y Windows Server', 'Practica 1 - Lab A: Instalacion Windows Server 2022', '18:46', '45 vistas'],
  ['Redes y Windows Server', 'Laboratiro 1.2: Configuración de parametros de red.', '10:54', '15 vistas'],
  ['DevOps y servicios', 'Laboratorio 9.3: Instalación de Ansible', '54:04', '56 vistas'],
  ['DevOps y servicios', 'Laboratorio 9.5: Playbooks', '13:36', '8 vistas'],
  ['DevOps y servicios', 'Laboratorio 9.4: Comandos Ad-Hoc', '4:57', '9 vistas'],
  ['DevOps y servicios', 'Laboratorio 9.2: Desplieque de una VM con terraform en digital Ocean', '17:34', '4 vistas'],
  ['DevOps y servicios', 'Laboratorio 9.1: Instalacion de Webmin', '15:02', '8 vistas'],
  ['DevOps y servicios', 'Laboratorio 8.3: Despliegue de contenedor de Wordpress utilizando Docker-Compose', '16:01', '12 vistas'],
  ['DevOps y servicios', 'Laboratorio 8.1: Instalacion y configuracion de Docker', '17:21', '22 vistas'],
  ['DevOps y servicios', 'Laboratorio 8.2: Instalacion de Portainer', '9:59', '34 vistas'],
  ['DevOps y servicios', 'Laboratorio 7.3: Creacion de controlador de Dominio con cliente Windows', '28:49', '27 vistas'],
  ['DevOps y servicios', 'Laboratio 7.2: Practica 2: Creacion de fileserver compatible con Windows utilizando SAMBA', '25:33', '17 vistas'],
  ['DevOps y servicios', 'Laboratorio 7.1: Compartir archivos entre linux utilizando NFS', '18:16', '15 vistas'],
  ['DevOps y servicios', 'Laboratorio 6.3: Instalacion de IDS snort', '11:49', '9 vistas'],
  ['DevOps y servicios', 'Laboratorio 6.4: Configurar 2FA con google authenticator Modulo PAM para Acceso SSH', '8:35', '22 vistas'],
  ['DevOps y servicios', 'Laboratorio 6.2: IP tables - UFW', '23:30', '7 vistas'],
  ['DevOps y servicios', 'Laboratorio 6.1: Cifrado', '7:48', '28 vistas'],
  ['DevOps y servicios', 'Laboratorio 5.3: Cluster de Alta Disponibilidad HTTP', '20:09', '4 vistas'],
  ['DevOps y servicios', 'Laboratorio 5.2: Instalacion y configuracion del Cluster', '13:29', '11 vistas'],
  ['DevOps y servicios', 'Laboratorio 5.1: Sincronizacion de carpetas con Rsync', '24:35', '10 vistas'],
  ['DevOps y servicios', 'Laboratorio 4.3: Instalando servidor de impresion CUPS', '13:51', '9 vistas'],
  ['DevOps y servicios', 'Laboratorio 4.2: Instalando servidor Postfix', '41:33', '20 vistas'],
  ['DevOps y servicios', 'Laboratorio 4.1: Instalacion Servidor HTTP Apache2 y Nginx', '57:34', '19 vistas'],
  ['Música y extra', 'Isnt She Lovely - Stevie Wonder (Rythm and Melodic Guitar Cover)', '3:22', '121 vistas'],
  ['Música y extra', 'Endless praise - Planetshakers | Guitar solos', '1:35', '58 vistas'],
  ['Seguridad web y API', 'Escáneres y Fuzzing Web.', '6:35', '34 vistas'],
  ['Redes y Windows Server', 'Instalacion de Windows 10', '10:01', '40 vistas'],
  ['Linux y hardening', 'Como instalar Kali Linux en Hyper V', '11:21', '247 vistas'],
  ['Ofensiva y análisis', 'Estegnografia y cifrado - Parcial 1.', '5:00', '23 vistas'],
] as const;

const YOUTUBE_CATEGORY_STORAGE_KEY = 'portfolio-youtube-category';

const copy = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Aprendizaje', 'Proyectos', 'YouTube', 'Herramientas', 'Contacto'],
    eyebrow: 'Portafolio técnico',
    title: 'Michael David Robles Fermin',
    subtitle: 'Estudiante de Ciberseguridad | Redes | Linux | DevOps | Seguridad Web',
    headline: 'Portafolio de Ciberseguridad, Redes y Administración de Servidores',
    intro: 'Combino ciberseguridad, redes, Linux, virtualización y desarrollo web para crear entornos reales, seguros y funcionales.',
    about: 'Soy estudiante del área de ciberseguridad con experiencia práctica en administración de servidores Linux, redes, virtualización, análisis de vulnerabilidades y despliegue de aplicaciones web. Trabajo con laboratorios reales usando Proxmox, Docker, Cloudflare Tunnel, Wazuh, TrueNAS, Nextcloud, OWASP ZAP, SonarQube y Kali Linux, con foco fuerte en operación de servicios.',
    focus: 'Me interesa especialmente la seguridad ofensiva y defensiva, pero remarco mi enfoque principal en servidores, alta disponibilidad e infraestructura: diseño, despliegue, hardening y operación de entornos reales. Mis proyectos y laboratorios se publican bajo iClexi.',
  },
  en: {
    nav: ['Home', 'About', 'Learning', 'Projects', 'YouTube', 'Tools', 'Contact'],
    eyebrow: 'Technical portfolio',
    title: 'Michael David Robles Fermin',
    subtitle: 'Cybersecurity Student | Networking | Linux | DevOps | Web Security',
    headline: 'Cybersecurity, Networking and Server Administration Portfolio',
    intro: 'I combine cybersecurity, networking, Linux, virtualization and web development to build real, secure and functional environments.',
    about: 'I am a cybersecurity student with hands-on experience in Linux server administration, networking, virtualization, vulnerability analysis and web application deployment. I build real labs with Proxmox, Docker, Cloudflare Tunnel, Wazuh, TrueNAS, Nextcloud, OWASP ZAP, SonarQube and Kali Linux, with a strong focus on service operations.',
    focus: 'I am especially interested in offensive and defensive security, while strongly focusing on servers and infrastructure: design, deployment, hardening and operations for real environments. My public projects and labs are published as iClexi.',
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const [selectedService, setSelectedService] = useState<ServiceLink | null>(null);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string>('all');
  const c = copy[language];
  const videosByCategory = useMemo(() => {
    return youtubeVideos.reduce<Record<string, typeof youtubeVideos[number][]>>((groups, video) => {
      const category = video[0];
      groups[category] = groups[category] || [];
      groups[category].push(video);
      return groups;
    }, {});
  }, []);
  const videoCategories = useMemo(() => Object.keys(videosByCategory), [videosByCategory]);
  const filteredVideoGroups = useMemo(() => {
    if (selectedVideoCategory === 'all') {
      return Object.entries(videosByCategory);
    }

    const selected = videosByCategory[selectedVideoCategory];
    return selected ? [[selectedVideoCategory, selected] as const] : Object.entries(videosByCategory);
  }, [selectedVideoCategory, videosByCategory]);
  const categoryMenuItems = useMemo(
    () => [
      {
        value: 'all',
        label: language === 'es' ? 'Todos los videos' : 'All videos',
        count: youtubeVideos.length,
      },
      ...videoCategories.map((category) => ({
        value: category,
        label: category,
        count: videosByCategory[category].length,
      })),
    ],
    [language, videoCategories, videosByCategory],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedCategory = window.localStorage.getItem(YOUTUBE_CATEGORY_STORAGE_KEY);

    if (savedCategory && (savedCategory === 'all' || videoCategories.includes(savedCategory))) {
      setSelectedVideoCategory(savedCategory);
    }
  }, [videoCategories]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(YOUTUBE_CATEGORY_STORAGE_KEY, selectedVideoCategory);
  }, [selectedVideoCategory]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      document.querySelectorAll('#youtube .youtube-group, #youtube .video-row').forEach((node) => {
        node.classList.add('is-visible');
      });
    });

    return () => window.cancelAnimationFrame(raf);
  }, [selectedVideoCategory]);

  useEffect(() => {
    if (selectedVideoCategory !== 'all' && !videoCategories.includes(selectedVideoCategory)) {
      setSelectedVideoCategory('all');
    }
  }, [selectedVideoCategory, videoCategories]);

  useEffect(() => {
    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );

    document.querySelectorAll('.animated-entry').forEach((node) => observer.observe(node));

    void import('animejs').then((animeModule) => {
      if (cancelled) return;
      const module = animeModule as unknown as {
        animate?: (targets: string, params: Record<string, unknown>) => void;
        stagger?: (value: number) => unknown;
      };
      module.animate?.('.animated-entry', {
        opacity: [0, 1],
        translateY: [14, 0],
        delay: module.stagger ? module.stagger(28) : 0,
        duration: 520,
        easing: 'outCubic',
      });
      module.animate?.('.hero-orbit span', {
        translateY: [-4, 4],
        direction: 'alternate',
        easing: 'inOutSine',
        duration: 2200,
        loop: true,
        delay: module.stagger ? module.stagger(130) : 0,
      });
      module.animate?.('.tool-pill', {
        translateY: [0, -3],
        direction: 'alternate',
        easing: 'inOutSine',
        duration: 1600,
        loop: true,
        delay: module.stagger ? module.stagger(45) : 0,
      });
      module.animate?.('.site-tile, .project-card, .video-row, .cert-card', {
        boxShadow: ['0 0 0 rgba(39, 224, 163, 0)', '0 16px 40px rgba(39, 224, 163, 0.07)'],
        direction: 'alternate',
        easing: 'inOutSine',
        duration: 1800,
        loop: true,
        delay: module.stagger ? module.stagger(60) : 0,
      });
    });
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [language]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Michael Robles">
          <Terminal size={20} />
          <span>MRF</span>
        </a>
        <nav className="navlinks" aria-label="Principal">
          {c.nav.map((item, index) => (
            <a key={item} href={`#${['home', 'about', 'learning', 'projects', 'youtube', 'tools', 'contact'][index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="language-toggle" type="button" onClick={() => setLanguage((current) => (current === 'es' ? 'en' : 'es'))}>
          <Languages size={18} />
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <section id="home" className="hero section-band">
        <div className="hero-copy animated-entry">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="subtitle">{c.subtitle}</p>
          <h2>{c.headline}</h2>
          <p className="intro">{c.intro}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects"><Server size={18} />Proyectos</a>
            <a className="secondary-link" href="#youtube"><MonitorPlay size={18} />YouTube</a>
            <a className="secondary-link" href="https://github.com/iClexi" target="_blank" rel="noreferrer"><GitBranch size={18} />GitHub</a>
          </div>
        </div>
        <div className="hero-orbit animated-entry" aria-hidden="true">
          <div className="orbit-core">
            <img src="/logos/portrait.svg" alt="Avatar" className="hero-avatar" />
          </div>
          <div className="hero-orbit-logos" role="img" aria-label="Tecnologías">
            {heroOrbitTechs.map((tech) => (
              <div
                className="hero-logo-shell"
                key={tech.label}
              >
                {tech.render === 'image' ? (
                  <img src={tech.logo} alt={tech.label + ' logo'} className="hero-logo" />
                ) : (
                  <span
                    className="hero-logo-mark"
                    aria-hidden="true"
                    style={{
                      backgroundColor: tech.color,
                      WebkitMaskImage: `url(${tech.logo})`,
                      maskImage: `url(${tech.logo})`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Accesos principales</p>
          <h2>{language === 'es' ? 'Servicios publicados con contexto' : 'Published services with context'}</h2>
        </div>
        <div className="link-grid">
          {serviceLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button key={link.href} className="site-tile animated-entry" type="button" onClick={() => setSelectedService(link)}>
                <Icon size={30} style={{ color: link.accent }} />
                <span>{link.label}</span>
                <strong>{language === 'es' ? 'Ver resumen' : 'View summary'}<ExternalLink size={16} /></strong>
              </button>
            );
          })}
        </div>
      </section>

      <section id="about" className="section-band about">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Sobre mí</p>
          <h2>{language === 'es' ? 'Quién soy' : 'Who I am'}</h2>
        </div>
        <div className="about-grid">
          <p className="animated-entry">{c.about}</p>
          <p className="animated-entry">{c.focus}</p>
        </div>
      </section>

      <section id="learning" className="section-band studies">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Aprendizaje continuo</p>
          <h2>{language === 'es' ? 'Certificaciones y formación' : 'Certifications and training'}</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card animated-entry" key={cert.name}>
              <div className="cert-visual">
                <img
                  className="cert-logo-image"
                  src={cert.logo}
                  alt={cert.logoAlt}
                  loading="lazy"
                />
              </div>
              <div className="cert-copy">
                <p className="cert-issuer">{cert.issuer}</p>
                <h3>{cert.name}</h3>
                <p>{cert.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-band projects">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Proyectos</p>
          <h2>{language === 'es' ? 'Laboratorios, servicios y trabajo real' : 'Labs, services and real work'}</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            const content = (
              <>
                <Icon size={24} />
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </>
            );
            return project.href ? (
              <a className="project-card animated-entry" href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a>
            ) : (
              <article className="project-card animated-entry" key={project.title}>{content}</article>
            );
          })}
        </div>
      </section>

      <section className="section-band homelab">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Laboratorios y servicios</p>
          <h2>{language === 'es' ? 'Lo que corre en mi Proxmox' : 'What runs in my Proxmox'}</h2>
        </div>
        <div className="service-grid">
          {proxmoxServices.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card animated-entry" key={service.name}>
                <Icon size={22} />
                <h3>{service.name}</h3>
                <p>{service.role}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="youtube" className="section-band public-proof">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Prácticas publicadas</p>
          <h2>{language === 'es' ? 'Canal técnico en YouTube' : 'Technical YouTube channel'}</h2>
          <p className="section-text">{language === 'es' ? 'Organicé tus videos por área para que se vea el progreso real: web/API, ofensiva, Linux, redes, Windows Server, DevOps y música.' : 'Videos organized by area to show real progress across web/API, offensive security, Linux, networking, Windows Server, DevOps and music.'}</p>
        </div>
        <div className="youtube-shell">
          <aside className="youtube-menu animated-entry">
            <p className="youtube-filter-label">
              {language === 'es' ? 'Menú de categorías' : 'Category menu'}
            </p>
            <div className="youtube-category-buttons" role="tablist" aria-label="Categorías de YouTube">
              {categoryMenuItems.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  role="tab"
                  aria-selected={selectedVideoCategory === item.value}
                  className={`youtube-category-button ${selectedVideoCategory === item.value ? 'active' : ''}`}
                  onClick={() => setSelectedVideoCategory(item.value)}
                >
                  <span className="youtube-category-badge">{item.value === 'all' ? '✓' : item.label.slice(0, 2).toUpperCase()}</span>
                  <span className="youtube-category-copy">
                    <span>{item.label}</span>
                    <strong>{item.count}</strong>
                  </span>
                </button>
              ))}
            </div>
            <p className="youtube-filter-hint">
              {language === 'es'
                ? 'Esta selección se guarda automáticamente para tu próxima visita.'
                : 'This selection is automatically saved for your next visit.'}
            </p>
          </aside>
          <div className="youtube-layout">
            {filteredVideoGroups.map(([category, videos]) => (
              <article className="youtube-group animated-entry" key={category}>
                <div className="card-title">
                  <MonitorPlay size={24} />
                  <h3>{category}</h3>
                </div>
                <div className="video-list">
                  {videos.map((video) => (
                    <a className="video-row" href={`https://www.youtube.com/@iclexi2688/search?query=${encodeURIComponent(video[1])}`} target="_blank" rel="noreferrer" key={video[1]}>
                      <span className="video-row-icon">▶</span>
                      <span className="video-row-copy">
                        <span>{video[1]}</span>
                        <strong>{video[2]} · {video[3]}</strong>
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Stack y herramientas</p>
          <h2>{language === 'es' ? 'Tecnologías que uso' : 'Technologies I use'}</h2>
        </div>
        <div className="tool-cloud">
          {toolStack.map((tool) => (
            <span className="tool-pill animated-entry" key={tool.label}>
              <span className="tool-logo-shell">
                {tool.render === 'image' ? (
                  <img src={tool.logo} alt={tool.label + ' logo'} className="tool-logo" />
                ) : (
                  <span
                    className="tool-logo-mark"
                    aria-hidden="true"
                    style={{
                      backgroundColor: tool.color,
                      WebkitMaskImage: `url(${tool.logo})`,
                      maskImage: `url(${tool.logo})`,
                    }}
                  />
                )}
              </span>
              <span className="tool-label">{tool.label}</span>
            </span>
          ))}
        </div>
      </section>

      <section id="minecraft" className="section-band minecraft">
        <div className="minecraft-visual animated-entry">
          <img src="/logos/minecraft-server.svg" alt="Ilustración del servidor Minecraft" className="minecraft-art" />
          <div className="minecraft-sky">
            <span>mc.iclexi.tech</span>
          </div>
        </div>
        <div className="minecraft-copy animated-entry">
          <p className="eyebrow">Servidor Minecraft</p>
          <h2>Bedrock + Java</h2>
          <p>Servidor dedicado en Linux para Minecraft Java y Bedrock, publicado como <strong>mc.iclexi.tech</strong>, con servicios systemd, red interna/externa y operación pensada para jugar desde distintos clientes.</p>
        </div>
      </section>

      <section className="section-band public-proof">
        <div className="section-heading animated-entry">
          <p className="eyebrow">Actividad real en línea</p>
          <h2>GitHub + YouTube</h2>
        </div>
        <div className="evidence-grid">
          <article className="evidence-card animated-entry">
            <div className="card-title"><FolderGit2 size={24} /><h3>GitHub activo</h3></div>
            <p>Repositorios con aplicaciones web, documentación de Proxmox, laboratorios de red, automatización y proyectos desplegados en servicios reales.</p>
            <div className="repo-list">
              {githubRepos.map((repo) => (
                <a className="repo-row" href={repo.href} target="_blank" rel="noreferrer" key={repo.href}>
                  <span>{repo.name}</span>
                  <strong>{repo.stack}</strong>
                </a>
              ))}
            </div>
          </article>
          <article className="evidence-card animated-entry">
            <div className="card-title"><Trophy size={24} /><h3>Resumen público</h3></div>
            <div className="metrics-grid">
              <div className="metric-tile"><strong>{youtubeVideos.length}</strong><span>videos listados</span></div>
              <div className="metric-tile"><strong>{githubRepos.length}</strong><span>repos destacados</span></div>
              <div className="metric-tile"><strong>10</strong><span>servicios Proxmox documentados</span></div>
            </div>
          </article>
        </div>
      </section>

      <footer id="contact" className="section-band footer">
        <div className="footer-content animated-entry">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>{c.title}</h2>
            <p>Disponible para compartir laboratorios, documentación técnica, proyectos personales y avances de aprendizaje.</p>
          </div>
          <div className="footer-actions">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a className="secondary-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
            <a className="secondary-link" href="mailto:contacto@iclexi.tech"><Mail size={18} />contacto@iclexi.tech</a>
            <span className="identity-chip"><UserRound size={18} />iClexi</span>
          </div>
        </div>
      </footer>

      {selectedService && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="service-modal">
            <button className="modal-close" type="button" onClick={() => setSelectedService(null)} aria-label="Cerrar">
              <X size={22} />
            </button>
            <div className="modal-icon" style={{ color: selectedService.accent }}>
              <selectedService.icon size={34} />
            </div>
            <p className="eyebrow">Resumen del servicio</p>
            <h2>{selectedService.label}</h2>
            <p>{language === 'es' ? selectedService.summaryEs : selectedService.summaryEn}</p>
            <ul>
              {(language === 'es' ? selectedService.bulletsEs : selectedService.bulletsEn).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="primary-link" href={selectedService.href} target="_blank" rel="noreferrer">
              Abrir servicio
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
