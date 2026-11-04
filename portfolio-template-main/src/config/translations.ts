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
      'A Data & AI for Finance student in Paris who loves turning messy data into clear stories: dashboards, ML, and a little generative AI. Off-screen: painting, sculpture & travelling.',
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
        title: 'Escale',
        description:
          'A social travel journal: memories, photos and the budget of every trip in one place, private by default and shareable with friends.',
        technologies: ['JavaScript', 'Supabase', 'PostgreSQL', 'D3.js', 'Three.js', 'PWA'],
      },
      {
        title: 'Tech the Time',
        description:
          'My own tech newspaper, organized by industry and written by an automated pipeline that follows the news twice a day.',
        technologies: ['Next.js', 'TypeScript', 'Claude API', 'Upstash Redis', 'Vercel'],
      },
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
        period: 'September 2024 to July 2026',
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
        period: 'December 2023 to July 2024',
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
        period: 'June 2023 to August 2023',
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
        period: '2024 to 2026',
        details:
          "Master's grade, English track. Machine Learning, Deep Learning, MLOps and agentic systems; corporate & market finance, valuation & modeling, M&A, LBO and data for FP&A.",
      },
      {
        degree: "Bachelor's in Accounting, Control, Audit & Finance (CCAF)",
        school: 'IAE Rouen',
        location: 'Rouen, France',
        period: '2021 to 2024',
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
    snapshots: 'Project snapshots',
    pages: {
      escale: {
        subtitle: 'A social travel journal that keeps the memories, photos and budget of every trip in one place',
        features: [
          { title: 'Travel journals', description: 'Each trip becomes a notebook you flip through, with photos, notes and a page turn effect.' },
          { title: '3D globe', description: 'Visited countries, ongoing trips and wishlist destinations on an interactive globe or a flat map.' },
          { title: 'Trip budget', description: 'Spending by category, what is left per day, and a warning before a category goes over.' },
          { title: 'Friends and challenges', description: 'Posts, friends and travel challenges, with every trip private unless you decide to share it.' },
        ],
        overview: [
          'Escale is a travel journal app I am building to launch publicly. It brings together what usually ends up scattered across a camera roll, a notes app and a spreadsheet: the memories of a trip and what it cost.',
          'It runs as an installable web app on iPhone and Android, with accounts, a social feed between friends and trips kept private by default.',
        ],
        highlights: [
          'Backend on Supabase: authentication, a PostgreSQL database and realtime updates for the social feed.',
          'Interactive 3D globe drawn with D3.js and TopoJSON, with a flat map view as an alternative.',
          'Page turn effect for the journals built with Three.js, loaded only when a journal opens, with a CSS fallback when WebGL is not available.',
          'Budget tracking per trip: daily allowance, spending pace by category and early warnings.',
          'Progressive web app with a service worker, push notifications, light and dark themes.',
        ],
      },
      techthetime: {
        subtitle: 'A daily tech newspaper that explains how technology is changing the economy, industry by industry',
        features: [
          { title: 'Sections by industry', description: 'Finance and insurance, health, energy, industry, work and education, the AI giants, and a good news section.' },
          { title: 'Automated newsroom', description: 'Twice a day, a pipeline reads the news feeds, picks out new stories and writes an article with the Claude API, always citing the source.' },
          { title: 'Same format every time', description: 'Short articles built around a key figure, what it changes and what to watch next.' },
          { title: 'More than articles', description: 'A fake news section, an English version, a newsletter, quizzes and lessons.' },
        ],
        overview: [
          'Tech the Time is my own tech media and newsletter project. The idea is to explain how tech is transforming each industry, in short articles that are quick to read and always structured the same way.',
          'Behind the site there is a real data pipeline, close to the one I built at SETEC TPI: extraction from RSS feeds and GDELT, transformation and checks, loading into a permanent archive, and two scheduled runs a day.',
        ],
        highlights: [
          'Deduplication: every processed link is stored with its date, and a story already seen or older than 72 hours is skipped.',
          'Checks on the AI output: each article is verified (title, standfirst, body, boxes) and rejected if something is missing or off topic.',
          'Cost control with a cap on articles per run, since each article is one API call.',
          'Backfill of past weeks through GDELT, week by week, resuming where it stopped if interrupted.',
          'Permanent archive: one JSON file per month locally, an Upstash Redis database online because the Vercel disk is not persistent.',
          'Resilience: an unreachable feed is logged and skipped without blocking the rest of the run.',
        ],
      },
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
          'Implemented gamified modules, quizzes and advice, backed by Firebase and Supabase.',
          'Built three learning mini-games (Swipe Game, Bill Rush, Savings Lab) and an animated mascot that reacts to the user.',
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
      "Étudiante en Data & IA pour la Finance à Paris, j'aime transformer des données brutes en histoires claires : dashboards, ML et un peu d'IA générative. À côté : peinture, sculpture & voyages.",
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
        title: 'Escale',
        description:
          'Un carnet de voyage social : souvenirs, photos et budget de chaque voyage au même endroit, privé par défaut et à partager avec ses amis.',
        technologies: ['JavaScript', 'Supabase', 'PostgreSQL', 'D3.js', 'Three.js', 'PWA'],
      },
      {
        title: 'Tech the Time',
        description:
          "Mon propre journal tech, organisé par secteur et rédigé par un pipeline automatisé qui suit l'actualité deux fois par jour.",
        technologies: ['Next.js', 'TypeScript', 'Claude API', 'Upstash Redis', 'Vercel'],
      },
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
        period: 'Septembre 2024 à juillet 2026',
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
        period: 'Décembre 2023 à juillet 2024',
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
        period: 'Juin 2023 à août 2023',
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
        period: '2024 à 2026',
        details:
          "Grade de master, cursus en anglais. Machine Learning, Deep Learning, MLOps et systèmes agentiques ; finance d'entreprise & de marché, valorisation & modélisation, M&A, LBO et data pour le FP&A.",
      },
      {
        degree: 'Licence Comptabilité, Contrôle, Audit & Finance (CCAF)',
        school: 'IAE Rouen',
        location: 'Rouen, France',
        period: '2021 à 2024',
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
    snapshots: 'Aperçus du projet',
    pages: {
      escale: {
        subtitle: 'Un carnet de voyage social qui réunit les souvenirs, les photos et le budget de chaque voyage',
        features: [
          { title: 'Carnets de voyage', description: 'Chaque voyage devient un carnet que l\'on feuillette, avec photos, notes et effet de page tournée.' },
          { title: 'Globe 3D', description: 'Pays visités, voyages en cours et envies sur un globe interactif ou une carte à plat.' },
          { title: 'Budget du voyage', description: 'Dépenses par catégorie, reste à dépenser par jour et alerte avant qu\'une catégorie ne dépasse.' },
          { title: 'Amis et défis', description: 'Publications, amis et défis de voyage, chaque voyage restant privé tant qu\'on ne choisit pas de le partager.' },
        ],
        overview: [
          "Escale est une application de carnet de voyage que je développe pour la lancer au public. Elle réunit ce qui finit d'habitude éparpillé entre la galerie photo, les notes et un tableur : les souvenirs d'un voyage et ce qu'il a coûté.",
          "Elle s'installe comme une application sur iPhone et Android, avec des comptes, un fil social entre amis et des voyages privés par défaut.",
        ],
        highlights: [
          'Back-end sur Supabase : authentification, base PostgreSQL et mises à jour en temps réel pour le fil social.',
          'Globe 3D interactif dessiné avec D3.js et TopoJSON, avec une vue carte à plat en alternative.',
          "Effet de page tournée pour les carnets construit avec Three.js, chargé seulement à l'ouverture d'un carnet, avec une animation CSS de secours sans WebGL.",
          'Suivi du budget par voyage : budget par jour, rythme des dépenses par catégorie et alertes anticipées.',
          'Application web progressive avec service worker, notifications push, thèmes clair et sombre.',
        ],
      },
      techthetime: {
        subtitle: "Un journal tech quotidien qui explique comment la technologie transforme l'économie, secteur par secteur",
        features: [
          { title: 'Rubriques par secteur', description: "Finance et assurance, santé, énergie, industrie, travail et éducation, les géants de l'IA, et une rubrique bonnes nouvelles." },
          { title: 'Rédaction automatisée', description: "Deux fois par jour, un pipeline lit les flux d'actualité, repère les nouveaux sujets et rédige un article avec l'API Claude, toujours en citant la source." },
          { title: 'Un format toujours identique', description: 'Des articles courts construits autour d\'un chiffre clé, de ce que ça change et de ce qu\'il faut surveiller ensuite.' },
          { title: 'Plus que des articles', description: 'Une rubrique fake news, une version anglaise, une newsletter, des quiz et des leçons.' },
        ],
        overview: [
          "Tech the Time est mon propre projet de média et de newsletter tech. L'idée est d'expliquer comment la tech transforme chaque secteur, avec des articles courts, rapides à lire et toujours construits de la même façon.",
          "Derrière le site, il y a un vrai pipeline de données, proche de celui que j'ai construit chez SETEC TPI : extraction depuis des flux RSS et GDELT, transformation et contrôles, chargement dans une archive permanente, et deux exécutions planifiées par jour.",
        ],
        highlights: [
          'Dédoublonnage : chaque lien traité est enregistré avec sa date, et un sujet déjà vu ou publié depuis plus de 72 heures est écarté.',
          "Contrôle de la sortie de l'IA : chaque article est vérifié (titre, chapô, corps, encadrés) et rejeté s'il manque un élément ou s'il sort du sujet.",
          "Maîtrise des coûts avec un nombre maximum d'articles par exécution, chaque article correspondant à un appel API.",
          "Rattrapage des semaines passées via GDELT, semaine par semaine, avec reprise là où le script s'est arrêté en cas d'interruption.",
          "Archive permanente : un fichier JSON par mois en local, une base Upstash Redis en ligne car le disque de Vercel n'est pas persistant.",
          "Résilience : un flux injoignable est journalisé et ignoré sans bloquer le reste de l'exécution.",
        ],
      },
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
          'Modules gamifiés, quiz et conseils, adossés à Firebase et Supabase.',
          "Trois mini-jeux pédagogiques (Swipe Game, Bill Rush, Savings Lab) et une mascotte animée qui réagit au parcours de l'utilisateur.",
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
