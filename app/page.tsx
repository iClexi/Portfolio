'use client';

import Image from 'next/image';
import {
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  FolderGit2,
  Gamepad2,
  GitBranch,
  HardDrive,
  Languages,
  Mail,
  MonitorPlay,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  UserRound,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Language = 'es' | 'en';

const links = [
  { label: 'RitmoHub', href: 'https://ritmohub.iclexi.tech' },
  { label: 'PPT del Terror', href: 'https://terror.iclexi.tech' },
  { label: 'CryptoToolbox', href: 'https://cryptotoolbox.iclexi.tech' },
];

const tools = [
  'Linux',
  'Ubuntu Server',
  'Debian',
  'Kali Linux',
  'Proxmox',
  'Docker',
  'Cloudflare Tunnel',
  'TrueNAS',
  'Nextcloud',
  'Wazuh',
  'OWASP ZAP',
  'SonarQube',
  'Nmap',
  'Burp Suite',
  'Cisco Packet Tracer',
  'PostgreSQL',
  'Next.js',
  'React',
  'TypeScript',
  'GitHub',
];

const githubMetrics = [
  { value: '22', labelEs: 'repositorios públicos', labelEn: 'public repositories' },
  { value: '10', labelEs: 'laboratorios académicos', labelEn: 'academic labs' },
  { value: '2020', labelEs: 'perfil activo desde', labelEn: 'profile active since' },
];

const githubRepos = [
  { name: 'Proxmox', stack: 'Shell', href: 'https://github.com/iClexi/Proxmox' },
  { name: 'Portfolio', stack: 'TypeScript', href: 'https://github.com/iClexi/Portfolio' },
  { name: 'PPT-Del-terror', stack: 'TypeScript', href: 'https://github.com/iClexi/PPT-Del-terror' },
  { name: 'cryptotoolbox', stack: 'TypeScript', href: 'https://github.com/iClexi/cryptotoolbox' },
  { name: 'ritmohub', stack: 'TypeScript', href: 'https://github.com/iClexi/ritmohub' },
  { name: 'COMANDOS-ESENCIALES', stack: 'Docs', href: 'https://github.com/iClexi/COMANDOS-ESENCIALES' },
];

const youtubeLabs = [
  {
    title: 'Escaner con Maltego a la empresa Transunion',
    detail: 'OSINT y relacionamiento de entidades con Maltego.',
    href: 'https://www.youtube.com/watch?v=MEwQtN0fzNo',
  },
  {
    title: 'Practica Autenticacion utilizando Cookies de Session',
    detail: 'Sesiones web, cookies y flujo de autenticacion.',
    href: 'https://www.youtube.com/watch?v=zV8fuH7YfnQ',
  },
  {
    title: 'Using Password Tools',
    detail: 'Herramientas para auditoria y gestion de passwords.',
    href: 'https://www.youtube.com/watch?v=Iwes_hzdyCE',
  },
  {
    title: 'Analyze Automation Code',
    detail: 'Revision de codigo orientado a automatizacion.',
    href: 'https://www.youtube.com/watch?v=JFRa6TQrBhg',
  },
  {
    title: 'Analyze Exploit Code',
    detail: 'Lectura y analisis de codigo exploit en laboratorio.',
    href: 'https://www.youtube.com/watch?v=HZ7jKXRSc30',
  },
  {
    title: 'OWASP Web Security Testing Guide',
    detail: 'Practica guiada con metodologia OWASP WSTG.',
    href: 'https://www.youtube.com/watch?v=xnYwprIS7WA',
  },
  {
    title: 'Cross Site Scripting',
    detail: 'Laboratorio de XSS y validacion de riesgo web.',
    href: 'https://www.youtube.com/watch?v=K0j7dVRLf_Q',
  },
  {
    title: 'Injection Attacks',
    detail: 'Practica de ataques de inyeccion y controles defensivos.',
    href: 'https://www.youtube.com/watch?v=WTHwB0cD198',
  },
];

const content = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Herramientas', 'Contacto'],
    eyebrow: 'Portafolio técnico',
    title: 'Michael / David Robles',
    subtitle: 'Estudiante de Ciberseguridad | Redes | Linux | DevOps | Seguridad Web',
    headline: 'Portafolio de Ciberseguridad, Redes y Administración de Servidores',
    intro:
      'Construyo laboratorios reales de ciberseguridad, redes y servidores para aprender, probar y desplegar soluciones funcionales.',
    about:
      'Soy estudiante del área de ciberseguridad con experiencia práctica en administración de servidores Linux, redes, virtualización, análisis de vulnerabilidades y despliegue de aplicaciones web. Me enfoco en crear laboratorios reales usando Proxmox, Docker, Cloudflare Tunnel, Wazuh, TrueNAS, Nextcloud, OWASP ZAP, SonarQube y Kali Linux.',
    focus:
      'Me interesa especialmente la seguridad ofensiva y defensiva, la automatización, la infraestructura doméstica/profesional y el desarrollo de aplicaciones seguras.',
    profile: 'Espacio reservado para mi foto de perfil',
    liveSites: 'Accesos principales',
    open: 'Abrir',
    skillsTitle: 'Habilidades técnicas',
    projectsTitle: 'Proyectos',
    toolsTitle: 'Herramientas que uso',
    publicProofTitle: 'Evidencia pública',
    githubTitle: 'GitHub activo',
    youtubeTitle: 'Canal técnico en YouTube',
    youtubeText:
      'Publico prácticas y laboratorios de ciberseguridad donde documento autenticación, XSS, injection attacks, OWASP WSTG, Maltego, análisis de exploits y automatización.',
    githubText:
      'Mantengo repositorios de aplicaciones, documentación de Proxmox, laboratorios académicos y proyectos web desplegados en servicios reales.',
    labsTitle: 'Laboratorios documentados',
    studiesTitle: 'Certificaciones / estudios',
    contactTitle: 'Contacto',
    minecraftTitle: 'Servidor Minecraft',
    minecraft:
      'Tengo un servidor Minecraft preparado para Bedrock y Java, administrado en Linux con redirección de puertos, servicios systemd y acceso externo/interno.',
    studies: [
      'Formación activa en ciberseguridad, redes y administración de servidores.',
      'Laboratorios prácticos con SAST, DAST, virtualización, Linux y servicios web.',
      'Prácticas de topologías en Cisco Packet Tracer con VLANs, DHCP centralizado y OSPF.',
    ],
    contact:
      'Disponible para compartir laboratorios, documentación técnica, proyectos personales y avances de aprendizaje.',
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Tools', 'Contact'],
    eyebrow: 'Technical portfolio',
    title: 'Michael / David Robles',
    subtitle: 'Cybersecurity Student | Networking | Linux | DevOps | Web Security',
    headline: 'Cybersecurity, Networking and Server Administration Portfolio',
    intro:
      'I build real cybersecurity, networking and server labs to learn, test and deploy working solutions.',
    about:
      'I am a cybersecurity student with practical experience in Linux server administration, networking, virtualization, vulnerability analysis and web application deployment. I focus on real labs using Proxmox, Docker, Cloudflare Tunnel, Wazuh, TrueNAS, Nextcloud, OWASP ZAP, SonarQube and Kali Linux.',
    focus:
      'I am especially interested in offensive and defensive security, automation, home/professional infrastructure and secure application development.',
    profile: 'Reserved space for my profile photo',
    liveSites: 'Main links',
    open: 'Open',
    skillsTitle: 'Technical skills',
    projectsTitle: 'Projects',
    toolsTitle: 'Tools I use',
    publicProofTitle: 'Public proof',
    githubTitle: 'Active GitHub',
    youtubeTitle: 'Technical YouTube channel',
    youtubeText:
      'I publish cybersecurity practices and labs documenting authentication, XSS, injection attacks, OWASP WSTG, Maltego, exploit analysis and automation.',
    githubText:
      'I maintain repositories for applications, Proxmox documentation, academic labs and web projects deployed on real services.',
    labsTitle: 'Documented labs',
    studiesTitle: 'Certifications / studies',
    contactTitle: 'Contact',
    minecraftTitle: 'Minecraft server',
    minecraft:
      'I run a Minecraft server prepared for Bedrock and Java, managed on Linux with port forwarding, systemd services and internal/external access.',
    studies: [
      'Active training in cybersecurity, networking and server administration.',
      'Hands-on labs with SAST, DAST, virtualization, Linux and web services.',
      'Cisco Packet Tracer practice with VLANs, centralized DHCP and OSPF.',
    ],
    contact:
      'Available to share labs, technical documentation, personal projects and learning progress.',
  },
};

const skillGroups = {
  es: [
    {
      icon: ShieldCheck,
      title: 'Ciberseguridad',
      items: [
        'Pruebas SAST con SonarQube.',
        'Pruebas DAST con OWASP ZAP.',
        'Uso de Kali Linux para análisis de seguridad.',
        'Nmap, Nikto, Gobuster, Burp Suite y sqlmap.',
        'Análisis de SQL Injection, XSS, CSRF, Path Traversal, IDOR y malas configuraciones.',
        'Laboratorios con DVWA y aplicaciones vulnerables.',
      ],
    },
    {
      icon: Network,
      title: 'Redes',
      items: [
        'Configuración de VLANs.',
        'DHCP centralizado e IP helper-address.',
        'OSPF, trunking y segmentación.',
        'Prácticas en Cisco Packet Tracer.',
        'Diagnóstico de conectividad, DNS, puertos y NAT.',
      ],
    },
    {
      icon: Server,
      title: 'Servidores y virtualización',
      items: [
        'Administración de Proxmox.',
        'Creación y gestión de máquinas virtuales.',
        'Ubuntu Server, Debian y SSH.',
        'Redes NAT para VMs.',
        'Montaje de servicios internos y acceso remoto seguro.',
      ],
    },
    {
      icon: Code2,
      title: 'Docker y despliegue',
      items: [
        'Contenedores, logs y volúmenes.',
        'Publicación de aplicaciones con puertos personalizados.',
        'Servicios web con Next.js, React, TypeScript y PostgreSQL.',
        'Login, sesiones, recuperación de contraseña y autenticación.',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloudflare y acceso remoto',
      items: [
        'Cloudflare Tunnel.',
        'Subdominios para servicios internos.',
        'Cloudflare Access / Zero Trust.',
        'Exposición segura sin abrir puertos del router.',
      ],
    },
    {
      icon: HardDrive,
      title: 'NAS y nube privada',
      items: [
        'TrueNAS y Nextcloud.',
        'Compartición de archivos en red.',
        'Almacenamiento para backups y archivos personales.',
        'Acceso web externo a servicios privados.',
      ],
    },
  ],
  en: [
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      items: [
        'SAST testing with SonarQube.',
        'DAST testing with OWASP ZAP.',
        'Kali Linux for security analysis.',
        'Nmap, Nikto, Gobuster, Burp Suite and sqlmap.',
        'Analysis of SQL Injection, XSS, CSRF, Path Traversal, IDOR and misconfigurations.',
        'Labs with DVWA and vulnerable applications.',
      ],
    },
    {
      icon: Network,
      title: 'Networking',
      items: [
        'VLAN configuration.',
        'Centralized DHCP and IP helper-address.',
        'OSPF, trunking and segmentation.',
        'Cisco Packet Tracer practice.',
        'Connectivity, DNS, ports and NAT troubleshooting.',
      ],
    },
    {
      icon: Server,
      title: 'Servers and virtualization',
      items: [
        'Proxmox administration.',
        'Virtual machine creation and management.',
        'Ubuntu Server, Debian and SSH.',
        'NAT networks for VMs.',
        'Internal services and secure remote access.',
      ],
    },
    {
      icon: Code2,
      title: 'Docker and deployment',
      items: [
        'Containers, logs and volumes.',
        'Publishing apps on custom ports.',
        'Web services with Next.js, React, TypeScript and PostgreSQL.',
        'Login, sessions, password recovery and authentication.',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloudflare and remote access',
      items: [
        'Cloudflare Tunnel.',
        'Subdomains for internal services.',
        'Cloudflare Access / Zero Trust.',
        'Secure exposure without opening router ports.',
      ],
    },
    {
      icon: HardDrive,
      title: 'NAS and private cloud',
      items: [
        'TrueNAS and Nextcloud.',
        'Network file sharing.',
        'Storage organization for backups and personal files.',
        'External web access to private services.',
      ],
    },
  ],
};

const projects = {
  es: [
    {
      title: 'RitmoHub',
      description:
        'Aplicación web musical con login, sesiones, base de datos, recuperación de contraseña, Docker y exposición mediante Cloudflare Tunnel.',
      href: 'https://ritmohub.iclexi.tech',
      icon: Code2,
    },
    {
      title: 'Homelab en Proxmox',
      description:
        'Entorno de virtualización con múltiples VMs para Wazuh, Nextcloud, TrueNAS, servidores Linux y pruebas de red.',
      href: '#tools',
      icon: Server,
    },
    {
      title: 'Laboratorio SAST/DAST',
      description:
        'Evaluación de aplicaciones web usando SonarQube y OWASP ZAP para encontrar vulnerabilidades en código y en ejecución.',
      href: '#skills',
      icon: ShieldCheck,
    },
    {
      title: 'Servidor NAS / Nube privada',
      description:
        'Implementación de TrueNAS y Nextcloud para almacenamiento, acceso web y compartición de archivos.',
      href: '#tools',
      icon: HardDrive,
    },
    {
      title: 'Topología Packet Tracer',
      description:
        'Red con routers, switches, VLANs, DHCP centralizado, OSPF y conectividad extremo a extremo.',
      href: '#skills',
      icon: Network,
    },
    {
      title: 'Minecraft Bedrock y Java',
      description:
        'Servidor dedicado en Linux con redirección de puertos internos, servicios systemd y acceso externo/interno.',
      href: '#minecraft',
      icon: Gamepad2,
    },
  ],
  en: [
    {
      title: 'RitmoHub',
      description:
        'Music web app with login, sessions, database, password recovery, Docker deployment and Cloudflare Tunnel exposure.',
      href: 'https://ritmohub.iclexi.tech',
      icon: Code2,
    },
    {
      title: 'Proxmox homelab',
      description:
        'Virtualization environment with multiple VMs for Wazuh, Nextcloud, TrueNAS, Linux servers and network testing.',
      href: '#tools',
      icon: Server,
    },
    {
      title: 'SAST/DAST lab',
      description:
        'Web application assessment using SonarQube and OWASP ZAP to find source and runtime vulnerabilities.',
      href: '#skills',
      icon: ShieldCheck,
    },
    {
      title: 'NAS / private cloud',
      description:
        'TrueNAS and Nextcloud implementation for storage, web access and file sharing.',
      href: '#tools',
      icon: HardDrive,
    },
    {
      title: 'Packet Tracer topology',
      description:
        'Network with routers, switches, VLANs, centralized DHCP, OSPF and end-to-end connectivity.',
      href: '#skills',
      icon: Network,
    },
    {
      title: 'Minecraft Bedrock and Java',
      description:
        'Dedicated Linux server with internal port forwarding, systemd services and internal/external access.',
      href: '#minecraft',
      icon: Gamepad2,
    },
  ],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const copy = content[language];
  const skills = useMemo(() => skillGroups[language], [language]);
  const projectList = useMemo(() => projects[language], [language]);

  useEffect(() => {
    let cancelled = false;

    void import('animejs').then((animeModule) => {
      if (cancelled) return;
      const module = animeModule as unknown as {
        animate?: (targets: string, params: Record<string, unknown>) => void;
        stagger?: (value: number) => unknown;
        default?: (params: Record<string, unknown>) => void;
      };

      if (module.animate) {
        module.animate('.animated-entry', {
          translateY: [18, 0],
          delay: module.stagger ? module.stagger(45) : 0,
          duration: 650,
          easing: 'outCubic',
        });
        return;
      }

      module.default?.({
        targets: '.animated-entry',
        translateY: [18, 0],
        delay: (_element: unknown, index: number) => index * 45,
        duration: 650,
        easing: 'easeOutCubic',
      });
    });

    return () => {
      cancelled = true;
    };
  }, [language]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="MR">
          <Terminal size={20} />
          <span>MR</span>
        </a>
        <nav className="navlinks" aria-label="Principal">
          {copy.nav.map((item, index) => (
            <a key={item} href={`#${['home', 'about', 'skills', 'projects', 'tools', 'contact'][index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language-toggle"
          type="button"
          onClick={() => setLanguage((current) => (current === 'es' ? 'en' : 'es'))}
        >
          <Languages size={18} />
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <section id="home" className="hero section-band">
        <div className="hero-copy animated-entry">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="subtitle">{copy.subtitle}</p>
          <h2>{copy.headline}</h2>
          <p className="intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              <Server size={18} />
              {copy.projectsTitle}
            </a>
            <a className="secondary-link" href="https://github.com/iClexi" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className="profile-panel animated-entry">
          <Image src="/profile-placeholder.svg" alt={copy.profile} width={640} height={760} priority />
          <p>{copy.profile}</p>
        </div>
      </section>

      <section className="quick-links section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.liveSites}</p>
          <h2>{language === 'es' ? 'Tres sitios para abrir' : 'Three sites to open'}</h2>
        </div>
        <div className="link-grid">
          {links.map((link) => (
            <a key={link.href} className="site-tile animated-entry" href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>
                {copy.open}
                <ExternalLink size={16} />
              </strong>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="section-band about">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.nav[1]}</p>
          <h2>{language === 'es' ? 'Quién soy' : 'Who I am'}</h2>
        </div>
        <div className="about-grid">
          <p className="animated-entry">{copy.about}</p>
          <p className="animated-entry">{copy.focus}</p>
        </div>
      </section>

      <section id="skills" className="section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.skillsTitle}</p>
          <h2>{language === 'es' ? 'Experiencia práctica' : 'Hands-on experience'}</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card animated-entry" key={group.title}>
                <div className="card-title">
                  <Icon size={22} />
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section-band projects">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.projectsTitle}</p>
          <h2>{language === 'es' ? 'Laboratorios y servicios' : 'Labs and services'}</h2>
        </div>
        <div className="project-grid">
          {projectList.map((project) => {
            const Icon = project.icon;
            return (
              <a className="project-card animated-entry" href={project.href} key={project.title}>
                <Icon size={24} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section id="public-proof" className="section-band public-proof">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.publicProofTitle}</p>
          <h2>{language === 'es' ? 'Actividad real en línea' : 'Real online activity'}</h2>
        </div>
        <div className="evidence-grid">
          <article className="evidence-card animated-entry">
            <div className="card-title">
              <FolderGit2 size={24} />
              <h3>{copy.githubTitle}</h3>
            </div>
            <p>{copy.githubText}</p>
            <div className="metrics-grid" aria-label={copy.githubTitle}>
              {githubMetrics.map((metric) => (
                <div className="metric-tile" key={metric.labelEs}>
                  <strong>{metric.value}</strong>
                  <span>{language === 'es' ? metric.labelEs : metric.labelEn}</span>
                </div>
              ))}
            </div>
            <div className="repo-list">
              {githubRepos.map((repo) => (
                <a className="repo-row" href={repo.href} target="_blank" rel="noreferrer" key={repo.href}>
                  <span>{repo.name}</span>
                  <strong>{repo.stack}</strong>
                </a>
              ))}
            </div>
            <a className="secondary-link compact-link" href="https://github.com/iClexi" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
              <ExternalLink size={16} />
            </a>
          </article>

          <article className="evidence-card animated-entry">
            <div className="card-title">
              <MonitorPlay size={24} />
              <h3>{copy.youtubeTitle}</h3>
            </div>
            <p>{copy.youtubeText}</p>
            <a
              className="secondary-link compact-link"
              href="https://www.youtube.com/@iclexi2688/videos"
              target="_blank"
              rel="noreferrer"
            >
              <MonitorPlay size={18} />
              YouTube
              <ExternalLink size={16} />
            </a>
          </article>
        </div>
      </section>

      <section id="labs" className="section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.labsTitle}</p>
          <h2>{language === 'es' ? 'Prácticas publicadas' : 'Published practices'}</h2>
        </div>
        <div className="video-lab-grid">
          {youtubeLabs.map((lab) => (
            <a className="video-lab-card animated-entry" href={lab.href} target="_blank" rel="noreferrer" key={lab.href}>
              <FileCode2 size={22} />
              <h3>{lab.title}</h3>
              <p>{lab.detail}</p>
              <strong>
                YouTube
                <ExternalLink size={15} />
              </strong>
            </a>
          ))}
        </div>
      </section>

      <section id="tools" className="section-band">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.toolsTitle}</p>
          <h2>{language === 'es' ? 'Stack y herramientas' : 'Stack and tools'}</h2>
        </div>
        <div className="tool-cloud">
          {tools.map((tool) => (
            <span className="tool-pill animated-entry" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="minecraft" className="section-band minecraft">
        <div className="minecraft-copy animated-entry">
          <Gamepad2 size={30} />
          <div>
            <p className="eyebrow">{copy.minecraftTitle}</p>
            <h2>Bedrock + Java</h2>
            <p>{copy.minecraft}</p>
          </div>
        </div>
      </section>

      <section className="section-band studies">
        <div className="section-heading animated-entry">
          <p className="eyebrow">{copy.studiesTitle}</p>
          <h2>{language === 'es' ? 'Aprendizaje continuo' : 'Continuous learning'}</h2>
        </div>
        <div className="study-list">
          {copy.studies.map((study) => (
            <div className="study-row animated-entry" key={study}>
              <Database size={18} />
              <span>{study}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="section-band footer">
        <div className="footer-content animated-entry">
          <div>
            <p className="eyebrow">{copy.contactTitle}</p>
            <h2>{copy.title}</h2>
            <p>{copy.contact}</p>
          </div>
          <div className="footer-actions">
            <a className="secondary-link" href="https://github.com/iClexi" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
            <a className="secondary-link" href="mailto:contacto@iclexi.tech">
              <Mail size={18} />
              contacto@iclexi.tech
            </a>
            <span className="identity-chip">
              <UserRound size={18} />
              iClexi
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
