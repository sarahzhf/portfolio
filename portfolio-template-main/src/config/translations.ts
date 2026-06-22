// Central FR/EN content. Components read translations[lang].
// Technology names (React, Python, etc.) are kept identical across languages.

export type Lang = 'fr' | 'en';

const en = {
  nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills' },

  hero: {
    greeting: "Hi, I'm Sarah Zahaf",
    iam: 'I am a',
    resume: 'Resume',
    contact: 'Contact',
    roles: ['Data Analyst', 'Data & AI Engineer', 'Power BI Developer', 'Full-Stack Developer'],
  },

  journal: {
    caption: "Graduation '26 🎓",
    title: "Hi, I'm Sarah! ✨",
    body:
      'A Data & AI for Finance student in Paris who loves turning messy data into clear stories — dashboards, ML, and a little generative AI. Off-screen: painting, sculpture & travelling.',
    photoAlt: 'Open photo',
  },

  projects: {
    title: 'Projects',
    subtitle: "Here are some of the projects I've worked on recently",
    details: 'Details',
    code: 'Code',
    comingSoon: 'Coming Soon',
    comingSoonDesc:
      "More exciting projects on the way! Check back soon to see what I'm working on next.",
    iconNote: 'all favicons created by me!',
    items: [
      {
        title: 'Finéa',
        description:
          'AI-powered, mobile-first financial-education app with gamified coaching, built at the Google Hackathon using generative AI.',
        technologies: ['Next.js', 'Three.js', 'Gemini API', 'Vercel AI SDK', 'TypeScript'],
      },
      {
        title: 'Neura IA',
        description: 'An immersive 3D gallery experience exploring AI through interactive WebGL scenes.',
        technologies: ['Three.js', 'React', 'TypeScript'],
      },
      {
        title: 'Foodex',
        description: 'An editorial platform with a 3D-driven interface for browsing curated food content.',
        technologies: ['React', 'TypeScript', 'Three.js'],
      },
    ],
  },

  experience: {
    title: 'Experience',
    items: [
      {
        title: 'Data Analyst (Apprenticeship)',
        company: 'SETEC TPI',
        location: 'Paris, France',
        period: 'September 2024 - July 2026',
        description: [
          'Designed and industrialized class-based Python ETL pipelines with scheduled runs, centralizing 5+ internal and external sources and eliminating recurring manual processing.',
          'Built and shipped 6 production Power BI dashboards (financial reporting, HR skills & mobility, software licenses, overheads) for the Finance, HR and IT departments.',
          'Financial reporting: multi-source consolidation, margin and budget-variance analysis, star-schema modeling, advanced DAX measures and Power Query (M).',
          'Integrated REST APIs (OAuth2) and SharePoint/M365 sources, fed a structured dev/test/prod DataLake, and established a data governance framework.',
          'Industrialization & delivery: publishing to Power BI Service, data gateways, technical documentation, and agile delivery with business and IT teams.',
        ],
      },
      {
        title: 'Auditor (Apprenticeship)',
        company: 'ACTHEOS',
        location: 'France',
        period: 'December 2023 - July 2024',
        description: [
          'Accounting and financial audit: verifying the reliability of financial statements and regulatory compliance.',
          'Data analysis and account review using Excel and data visualization.',
          'Presented findings and recommendations to clients.',
        ],
      },
      {
        title: 'Sales & Marketing Assistant (Internship)',
        company: 'AYN Agency',
        location: 'France',
        period: 'June 2023 - August 2023',
        description: [
          'Conducted market research and competitive analysis, data mining and commercial performance reporting.',
          'Guided prospecting and strategic planning based on data insights.',
        ],
      },
    ],
  },

  skills: { title: 'Skills' },

  education: {
    title: 'Education',
    items: [
      {
        degree: 'MSc Data & AI for Finance',
        school: 'Mines Paris-PSL & Albert School',
        location: 'Paris, France',
        period: '2024 - 2026',
        details:
          "Master's grade, English track. Machine Learning, Deep Learning, MLOps and agentic systems; corporate & market finance, valuation & modeling, M&A, LBO and data for FP&A.",
      },
      {
        degree: "Bachelor's in Accounting, Control, Audit & Finance (CCAF)",
        school: 'IAE Rouen',
        location: 'Rouen, France',
        period: '2021 - 2024',
        details:
          'Project management and digital tools (SQL & Excel), marketing, performance analysis and statistics, then financial accounting, management control and financial analysis.',
      },
      {
        degree: 'Erasmus Exchange',
        school: 'Universidad Rey Juan Carlos',
        location: 'Madrid, Spain',
        period: '2023',
        details: 'Semester abroad on the English track.',
      },
    ],
  },

  footer: { madeWith: 'Made with', rights: 'All rights reserved.', backToTop: 'back to top' },

  contact: {
    title: "Let's Connect!",
    back: 'Back to Home',
    email: 'Email',
    sendEmail: 'Send Email',
    github: 'GitHub',
    viewProfile: 'View Profile',
    linkedin: 'LinkedIn',
    connect: 'Connect',
  },

  project: {
    keyFeatures: 'Key Features',
    viewCode: 'View Code',
    overview: 'Overview',
    techStack: 'Tech Stack',
    highlights: 'Technical Highlights',
    pages: {
      finea: {
        subtitle: 'AI-powered, mobile-first financial-education app with gamified coaching',
        features: [
          { title: 'Generative AI coaching', description: 'Personalized financial guidance powered by the Gemini API and the Vercel AI SDK.' },
          { title: 'Gamified learning', description: 'Quizzes, advice modules and progression to make financial literacy engaging.' },
          { title: 'Mobile-first', description: 'Designed for a smooth experience on phones, where most users learn on the go.' },
          { title: '3D interface', description: 'Interactive Three.js scenes that bring the learning journey to life.' },
        ],
        overview: [
          'Finéa is an AI-driven financial-education application built at the Google Hackathon. It turns financial literacy into an engaging, game-like experience tailored to each user.',
          'It was also the subject of my end-of-studies thesis (RNCP 36129): designing an AI-gamified financial-coaching application.',
        ],
        highlights: [
          'Integrated generative AI (Gemini API) through the Vercel AI SDK for conversational financial coaching.',
          'Built a mobile-first Next.js front end with immersive Three.js scenes.',
          'Implemented gamified modules — quizzes and advice — backed by Firebase/Supabase.',
          'Designed with authentication and protected routes for a secure user experience.',
        ],
      },
      neura: {
        subtitle: 'An immersive 3D gallery experience exploring AI through interactive WebGL scenes',
        features: [
          { title: '3D gallery', description: 'A spatial, scroll-driven gallery rendered in real time with Three.js.' },
          { title: 'Interactive', description: 'Drag, zoom and explore the scene with smooth, responsive controls.' },
          { title: 'Immersive design', description: 'Lighting, depth and motion that pull the viewer into the experience.' },
        ],
        overview: [
          'Neura IA is an immersive 3D gallery built with Three.js and React, designed to present AI concepts as an interactive, explorable space rather than a static page.',
        ],
        highlights: [
          'Built a real-time WebGL gallery with Three.js and React.',
          'Implemented smooth camera and gesture controls for an immersive feel.',
          'Optimized scene rendering for performance across devices.',
        ],
      },
      foodex: {
        subtitle: 'An editorial platform with a 3D-driven interface for browsing curated food content',
        features: [
          { title: 'Editorial platform', description: 'Curated articles and content presented in a magazine-style layout.' },
          { title: '3D-driven UI', description: 'Three.js-powered transitions and depth woven into the browsing flow.' },
          { title: 'Food-focused', description: 'A themed experience built around discovering and exploring food content.' },
        ],
        overview: [
          'Foodex is an editorial platform that blends curated content with a 3D-driven interface, built with React, TypeScript and Three.js.',
        ],
        highlights: [
          'Combined an editorial content layout with interactive 3D elements.',
          'Built reusable React + TypeScript components for the content system.',
          'Integrated Three.js scenes into the browsing experience.',
        ],
      },
    },
  },
};

const fr: typeof en = {
  nav: { about: 'À propos', projects: 'Projets', experience: 'Expériences', skills: 'Compétences' },

  hero: {
    greeting: 'Bonjour, je suis Sarah Zahaf',
    iam: 'Je suis',
    resume: 'CV',
    contact: 'Contact',
    roles: ['Data Analyst', 'Ingénieure Data & IA', 'Développeuse Power BI', 'Développeuse Full-Stack'],
  },

  journal: {
    caption: "Diplôme '26 🎓",
    title: "Bonjour, moi c'est Sarah ! ✨",
    body:
      "Étudiante en Data & IA pour la Finance à Paris, j'aime transformer des données brutes en histoires claires — dashboards, ML et un peu d'IA générative. À côté : peinture, sculpture & voyages.",
    photoAlt: 'Ouvrir la photo',
  },

  projects: {
    title: 'Projets',
    subtitle: "Voici quelques projets sur lesquels j'ai travaillé récemment",
    details: 'Détails',
    code: 'Code',
    comingSoon: 'Bientôt',
    comingSoonDesc:
      "D'autres projets arrivent ! Revenez bientôt pour découvrir ce que je prépare.",
    iconNote: 'toutes les favicons sont créées par moi !',
    items: [
      {
        title: 'Finéa',
        description:
          "Application d'éducation financière mobile-first et gamifiée, propulsée par l'IA générative, conçue lors du Hackathon Google.",
        technologies: ['Next.js', 'Three.js', 'Gemini API', 'Vercel AI SDK', 'TypeScript'],
      },
      {
        title: 'Neura IA',
        description: "Une galerie 3D immersive explorant l'IA à travers des scènes WebGL interactives.",
        technologies: ['Three.js', 'React', 'TypeScript'],
      },
      {
        title: 'Foodex',
        description: "Une plateforme éditoriale à l'interface pilotée par la 3D pour parcourir du contenu culinaire.",
        technologies: ['React', 'TypeScript', 'Three.js'],
      },
    ],
  },

  experience: {
    title: 'Expériences',
    items: [
      {
        title: 'Data Analyst (Alternance)',
        company: 'SETEC TPI',
        location: 'Paris, France',
        period: 'Septembre 2024 - Juillet 2026',
        description: [
          'Conception et industrialisation de pipelines ETL Python en classes, avec exécutions planifiées, centralisant plus de 5 sources internes et externes et supprimant les traitements manuels récurrents.',
          'Développement et mise en production de 6 dashboards Power BI (reporting financier, compétences & mobilité RH, licences logicielles, frais généraux) pour les directions Finance, RH et DSI.',
          'Reporting financier : consolidation multi-sources, analyse de marges et de variances budgétaires, modélisation en étoile, mesures DAX avancées et Power Query (M).',
          "Intégration d'API REST (OAuth2) et de sources SharePoint/M365, alimentation d'un DataLake structuré dev/test/prod et mise en place d'un cadre de gouvernance des données.",
          'Industrialisation & diffusion : publication sur Power BI Service, passerelles de données, documentation technique et gestion de projet en mode agile avec les équipes métiers et IT.',
        ],
      },
      {
        title: 'Auditrice (Alternance)',
        company: 'ACTHEOS',
        location: 'France',
        period: 'Décembre 2023 - Juillet 2024',
        description: [
          'Audit comptable et financier : contrôle de la fiabilité des états financiers et de la conformité réglementaire.',
          'Analyse de données et revue des comptes (Excel, visualisation de données).',
          'Restitution des constats et recommandations auprès des clients.',
        ],
      },
      {
        title: 'Attachée Commerciale (Stage)',
        company: 'AYN Agency',
        location: 'France',
        period: 'Juin 2023 - Août 2023',
        description: [
          'Études de marché et analyses concurrentielles, data mining et reporting de performance commerciale.',
          'Orientation de la prospection et de la planification stratégique à partir des données.',
        ],
      },
    ],
  },

  skills: { title: 'Compétences' },

  education: {
    title: 'Formation',
    items: [
      {
        degree: 'MSc Data & AI for Finance',
        school: 'Mines Paris-PSL & Albert School',
        location: 'Paris, France',
        period: '2024 - 2026',
        details:
          "Grade de master, cursus en anglais. Machine Learning, Deep Learning, MLOps et systèmes agentiques ; finance d'entreprise & de marché, valorisation & modélisation, M&A, LBO et data pour le FP&A.",
      },
      {
        degree: 'Licence Comptabilité, Contrôle, Audit & Finance (CCAF)',
        school: 'IAE Rouen',
        location: 'Rouen, France',
        period: '2021 - 2024',
        details:
          'Gestion de projet et outils digitaux (SQL & Excel), marketing, analyse de performance et statistiques, puis comptabilité financière, contrôle de gestion et analyse financière.',
      },
      {
        degree: 'Échange Erasmus',
        school: 'Universidad Rey Juan Carlos',
        location: 'Madrid, Espagne',
        period: '2023',
        details: 'Semestre à l\'étranger en cursus anglophone.',
      },
    ],
  },

  footer: { madeWith: 'Réalisé avec', rights: 'Tous droits réservés.', backToTop: 'haut de page' },

  contact: {
    title: 'Restons en contact !',
    back: "Retour à l'accueil",
    email: 'Email',
    sendEmail: 'Envoyer un email',
    github: 'GitHub',
    viewProfile: 'Voir le profil',
    linkedin: 'LinkedIn',
    connect: 'Se connecter',
  },

  project: {
    keyFeatures: 'Fonctionnalités clés',
    viewCode: 'Voir le code',
    overview: 'Aperçu',
    techStack: 'Stack technique',
    highlights: 'Points techniques',
    pages: {
      finea: {
        subtitle: "Application d'éducation financière mobile-first et gamifiée, propulsée par l'IA",
        features: [
          { title: 'Coaching par IA générative', description: "Conseils financiers personnalisés propulsés par l'API Gemini et le Vercel AI SDK." },
          { title: 'Apprentissage gamifié', description: "Quiz, modules de conseils et progression pour rendre l'éducation financière engageante." },
          { title: 'Mobile-first', description: 'Pensée pour une expérience fluide sur mobile, là où les utilisateurs apprennent au quotidien.' },
          { title: 'Interface 3D', description: 'Des scènes Three.js interactives qui donnent vie au parcours d\'apprentissage.' },
        ],
        overview: [
          "Finéa est une application d'éducation financière propulsée par l'IA, conçue lors du Hackathon Google. Elle transforme l'éducation financière en une expérience ludique et personnalisée.",
          "Elle a aussi fait l'objet de mon mémoire de fin d'études (RNCP 36129) : la conception d'une application de coaching financier gamifié par IA.",
        ],
        highlights: [
          "Intégration de l'IA générative (API Gemini) via le Vercel AI SDK pour un coaching financier conversationnel.",
          'Front-end Next.js mobile-first avec des scènes Three.js immersives.',
          'Modules gamifiés — quiz et conseils — adossés à Firebase/Supabase.',
          'Conçue avec authentification et routes protégées pour une expérience sécurisée.',
        ],
      },
      neura: {
        subtitle: "Une galerie 3D immersive explorant l'IA à travers des scènes WebGL interactives",
        features: [
          { title: 'Galerie 3D', description: 'Une galerie spatiale, pilotée au scroll et rendue en temps réel avec Three.js.' },
          { title: 'Interactive', description: 'Déplacez, zoomez et explorez la scène avec des contrôles fluides et réactifs.' },
          { title: 'Design immersif', description: "Lumière, profondeur et mouvement pour plonger le visiteur dans l'expérience." },
        ],
        overview: [
          "Neura IA est une galerie 3D immersive construite avec Three.js et React, conçue pour présenter des concepts d'IA comme un espace interactif et explorable plutôt qu'une page statique.",
        ],
        highlights: [
          'Galerie WebGL en temps réel avec Three.js et React.',
          'Contrôles de caméra et gestes fluides pour une sensation immersive.',
          'Rendu de scène optimisé pour la performance sur tous les appareils.',
        ],
      },
      foodex: {
        subtitle: "Une plateforme éditoriale à l'interface pilotée par la 3D pour parcourir du contenu culinaire",
        features: [
          { title: 'Plateforme éditoriale', description: 'Articles et contenus soignés présentés dans une mise en page de type magazine.' },
          { title: 'Interface 3D', description: 'Transitions et profondeur propulsées par Three.js, intégrées au parcours de navigation.' },
          { title: 'Dédiée à la cuisine', description: 'Une expérience thématique pensée pour découvrir et explorer du contenu culinaire.' },
        ],
        overview: [
          'Foodex est une plateforme éditoriale qui mêle contenus soignés et interface pilotée par la 3D, construite avec React, TypeScript et Three.js.',
        ],
        highlights: [
          'Association d\'une mise en page éditoriale et d\'éléments 3D interactifs.',
          'Composants React + TypeScript réutilisables pour le système de contenu.',
          'Intégration de scènes Three.js dans l\'expérience de navigation.',
        ],
      },
    },
  },
};

export const translations: Record<Lang, typeof en> = { en, fr };
