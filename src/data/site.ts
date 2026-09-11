import type {
  Article,
  CaseStudy,
  ExpertiseBlock,
  JourneyEntry,
  Project,
  ProcessStep,
  Service,
  SocialLink,
  Stat,
  Testimonial,
  WhyMeItem } from
'../types/site';

export const brand = {
  firstName: 'Sylvio',
  lastName: 'Razafison',
  name: 'Sylvio Razafison',
  role: 'Assistant digital polyvalent',
  fullRole: 'Assistant digital polyvalent & créateur de solutions',
  location: 'Madagascar',
  availability: 'Missions locales & à distance',
  availabilityBadge: 'Disponible pour de nouvelles missions',
  email: 'contact@sylviorazafison.com',
  phone: '+261 00 000 00 00',
  logoHorizontal: "/logo_horizontal_blanc.png",

  monogram: "/ione_blanc.png"

};

export const navLinks = [
{ id: 'accueil', label: 'Accueil' },
{ id: 'a-propos', label: 'À propos' },
{ id: 'services', label: 'Services' },
{ id: 'realisations', label: 'Réalisations' },
{ id: 'etudes-de-cas', label: 'Études de cas' },
{ id: 'expertises', label: 'Expertises' },
{ id: 'temoignages', label: 'Témoignages' },
{ id: 'parcours', label: 'Parcours' },
{ id: 'ressources', label: 'Ressources' },
{ id: 'methode', label: 'Méthode' },
{ id: 'contact', label: 'Contact' }];


export const socials: SocialLink[] = [
{ label: 'LinkedIn', icon: 'Linkedin', href: '#contact' },
{ label: 'Facebook', icon: 'Facebook', href: '#contact' },
{ label: 'WhatsApp', icon: 'MessageCircle', href: '#contact' },
{ label: 'E-mail', icon: 'Mail', href: '#contact' }];


export const trustWords: string[] = [
'Entrepreneurs',
'Créateurs',
'E-commerce',
'Indépendants',
'TPE',
'Associations',
'Coachs',
'Artisans'];


export const stats: Stat[] = [
{ value: '6', label: 'Domaines d’intervention' },
{ value: '24 h', label: 'Délai de première réponse' },
{ value: '100 %', label: 'À distance ou sur place' },
{ value: '3', label: 'Langues de travail' }];


export const services: Service[] = [
{
  id: 'assistance',
  icon: 'ListChecks',
  accentWord: 'ASSISTANCE',
  title: 'OPÉRATIONNELLE',
  description:
  'Je prends en charge les tâches récurrentes qui ralentissent votre journée, pour que vous restiez sur l’essentiel.',
  deliverables: [
  'Gestion des e-mails et des relances',
  'Suivi des tâches et des échéances',
  'Agenda, rendez-vous et rappels',
  'Préparation de documents'],

  visual: 'tasks'
},
{
  id: 'contenus',
  icon: 'PenLine',
  accentWord: 'CONTENUS',
  title: '& PUBLICATIONS',
  description:
  'Textes, visuels simples et publications préparés à votre voix, prêts à être diffusés au bon rythme.',
  deliverables: [
  'Rédaction et relecture',
  'Publications réseaux sociaux',
  'Calendrier éditorial',
  'Visuels simples et modèles'],

  visual: 'content'
},
{
  id: 'outils',
  icon: 'Workflow',
  accentWord: 'OUTILS',
  title: '& AUTOMATISATIONS',
  description:
  'Je connecte vos outils existants et j’automatise les gestes répétitifs, sans complexité inutile.',
  deliverables: [
  'Mise en place d’outils adaptés',
  'Automatisations légères',
  'Modèles réutilisables',
  'Prise en main et transmission'],

  visual: 'automation'
},
{
  id: 'presence',
  icon: 'Globe',
  accentWord: 'PRÉSENCE',
  title: 'EN LIGNE',
  description:
  'Une présence claire et cohérente : page, profils et informations à jour partout où l’on vous cherche.',
  deliverables: [
  'Page vitrine simple',
  'Profils et fiches à jour',
  'Cohérence des informations',
  'Mise à jour continue'],

  visual: 'presence'
},
{
  id: 'recherche',
  icon: 'Search',
  accentWord: 'RECHERCHE',
  title: '& VEILLE',
  description:
  'Je rassemble et trie l’information dont vous avez besoin pour décider vite et bien.',
  deliverables: [
  'Comparatifs et benchmarks',
  'Recherche de fournisseurs',
  'Synthèses courtes et actionnables',
  'Veille régulière'],

  visual: 'signal'
},
{
  id: 'organisation',
  icon: 'FolderTree',
  accentWord: 'ORGANISATION',
  title: '& DOCUMENTATION',
  description:
  'Vos fichiers, procédures et connaissances rangés dans un système que votre équipe comprend.',
  deliverables: [
  'Arborescence de fichiers',
  'Procédures écrites',
  'Bases de suivi',
  'Transmission à l’équipe'],

  visual: 'grid'
}];


export const projects: Project[] = [
{
  id: 'suivi',
  category: 'Organisation',
  date: 'Mission 2025',
  title: 'SYSTÈME DE SUIVI DES TÂCHES',
  summary:
  'Centralisation des tâches, priorités et échéances d’une activité indépendante dans un seul espace lisible.',
  visual: 'tasks'
},
{
  id: 'editorial',
  category: 'Contenus',
  date: 'Mission 2025',
  title: 'LIGNE ÉDITORIALE PRÊTE À PUBLIER',
  summary:
  'Calendrier, modèles et textes préparés à l’avance pour une présence régulière sans improvisation.',
  visual: 'content'
},
{
  id: 'automatisation',
  category: 'Automatisation légère',
  date: 'Mission 2025',
  title: 'GESTES RÉPÉTITIFS AUTOMATISÉS',
  summary:
  'Connexion des outils existants pour supprimer les ressaisies et les relances manuelles.',
  visual: 'automation'
},
{
  id: 'vitrine',
  category: 'Présence en ligne',
  date: 'Mission 2025',
  title: 'VITRINE CLAIRE ET À JOUR',
  summary:
  'Page de présentation, profils et informations harmonisés pour être trouvé et compris du premier coup.',
  visual: 'presence'
}];


export const whyMe: WhyMeItem[] = [
{
  id: 'delais',
  icon: 'Clock',
  title: 'DÉLAIS TENUS',
  description: 'Ce qui est annoncé est livré, ou renégocié avant l’échéance.',
  visual: 'tasks'
},
{
  id: 'simplicite',
  icon: 'Sparkles',
  title: 'SOLUTIONS SIMPLES',
  description: 'La solution la plus simple qui fonctionne, jamais la plus impressionnante.',
  visual: 'grid'
},
{
  id: 'apprentissage',
  icon: 'GraduationCap',
  title: 'APPRENTISSAGE CONTINU',
  description: 'De nouveaux outils testés chaque mois pour rester utile et à jour.',
  visual: 'signal'
},
{
  id: 'disponibilite',
  icon: 'ShieldCheck',
  title: 'DISPONIBILITÉ FIABLE',
  description: 'Des points réguliers plutôt qu’un long silence entre deux livraisons.',
  visual: 'automation'
}];


export const caseStudies: CaseStudy[] = [
{
  id: 'cas-organisation',
  accentWord: 'ORGANISATION',
  title: 'D’UNE ACTIVITÉ INDÉPENDANTE',
  summary:
  'Tout vivait dans des notes éparpillées et des messages. Nous avons construit un espace unique où les priorités, les échéances et les documents se retrouvent en un coup d’œil.',
  challenge:
  'Informations dispersées entre messageries, carnets et fichiers, aucune vue d’ensemble des priorités.',
  solution:
  'Un espace de suivi unique, une routine hebdomadaire courte et des modèles réutilisables transmis en fin de mission.',
  metrics: [
  { value: '—', label: 'Temps gagné par semaine' },
  { value: '—', label: 'Tâches suivies au même endroit' }],

  visual: 'tasks'
},
{
  id: 'cas-contenus',
  accentWord: 'CONTENUS',
  title: 'PRÉPARÉS UN MOIS À L’AVANCE',
  summary:
  'Publier devenait une urgence permanente. Nous avons mis en place un calendrier et des modèles pour produire par lots, sereinement.',
  challenge:
  'Publications improvisées, rythme irrégulier, ton variable d’un message à l’autre.',
  solution:
  'Un calendrier éditorial simple, des modèles de format et des lots de contenus validés à l’avance.',
  metrics: [
  { value: '—', label: 'Publications préparées par mois' },
  { value: '—', label: 'Régularité de publication' }],

  visual: 'content'
},
{
  id: 'cas-automatisation',
  accentWord: 'AUTOMATISATION',
  title: 'DES TÂCHES RÉPÉTITIVES',
  summary:
  'Les mêmes informations étaient saisies trois fois. Les outils existants ont été reliés entre eux pour que l’information circule seule.',
  challenge:
  'Ressaisies manuelles entre le formulaire, le tableur et la messagerie, et relances oubliées.',
  solution:
  'Des connexions légères entre les outils déjà en place, avec un suivi visible et une documentation courte.',
  metrics: [
  { value: '—', label: 'Ressaisies supprimées' },
  { value: '—', label: 'Heures libérées par mois' }],

  visual: 'automation'
}];


export const expertise: ExpertiseBlock[] = [
{
  number: '01',
  accentWord: 'ORGANISATION',
  title: '& SYSTÈMES',
  description:
  'Structurer les fichiers, les procédures et le suivi pour que l’information soit trouvable par tous, pas seulement par vous.',
  tags: ['Arborescence', 'Procédures', 'Bases de suivi', 'Transmission']
},
{
  number: '02',
  accentWord: 'CONTENUS',
  title: '& COMMUNICATION',
  description:
  'Écrire, relire et préparer les publications à votre voix, avec un rythme tenable sur la durée.',
  tags: ['Rédaction', 'Calendrier', 'Réseaux', 'Modèles']
},
{
  number: '03',
  accentWord: 'OUTILS',
  title: '& AUTOMATISATION',
  description:
  'Choisir, installer et connecter les bons outils, puis vous les transmettre pour que vous restiez autonome.',
  tags: ['Notion', 'Airtable', 'Make', 'Google Workspace']
}];


export const testimonials: Testimonial[] = [
{
  id: 't1',
  quote:
  'Le travail avance sans que j’aie besoin de tout re-expliquer. C’est exactement ce que je cherchais.',
  author: 'Fondatrice',
  role: 'Boutique en ligne'
},
{
  id: 't2',
  quote:
  'Des points courts, des livrables clairs, aucune mauvaise surprise sur les délais.',
  author: 'Consultant indépendant',
  role: 'Conseil'
},
{
  id: 't3',
  quote:
  'Mes fichiers et mes procédures sont enfin rangés dans un système que mon équipe utilise vraiment.',
  author: 'Gérant',
  role: 'Petite entreprise de services'
}];


export const journey: JourneyEntry[] = [
{
  id: 'j1',
  date: 'À compléter',
  accentWord: 'ASSISTANT',
  role: 'DIGITAL INDÉPENDANT',
  org: 'À votre compte',
  description:
  'Accompagnement d’entrepreneurs et de petites structures sur leurs tâches, contenus et outils numériques.'
},
{
  id: 'j2',
  date: 'À compléter',
  accentWord: 'CRÉATEUR',
  role: 'DE SOLUTIONS',
  org: 'Missions projet',
  description:
  'Conception de systèmes de suivi et d’automatisations légères adaptés à des équipes réduites.'
},
{
  id: 'j3',
  date: 'À compléter',
  accentWord: 'SUPPORT',
  role: 'OPÉRATIONNEL',
  org: 'Structure à préciser',
  description:
  'Gestion administrative, organisation documentaire et appui au quotidien des équipes.'
},
{
  id: 'j4',
  date: 'À compléter',
  accentWord: 'FORMATION',
  role: '& CERTIFICATIONS',
  org: 'Parcours à préciser',
  description:
  'Formations suivies et certifications obtenues sur les outils numériques et la bureautique.'
}];


export const articles: Article[] = [
{
  id: 'a1',
  tag: 'Organisation',
  readTime: '6 min de lecture',
  title: 'Ranger ses fichiers une bonne fois pour toutes',
  visual: 'grid'
},
{
  id: 'a2',
  tag: 'Automatisation',
  readTime: '5 min de lecture',
  title: 'Automatiser sans se compliquer la vie',
  visual: 'automation'
}];


export const processSteps: ProcessStep[] = [
{
  number: '1',
  icon: 'Compass',
  title: 'Cadrer',
  description:
  'Un échange court pour comprendre votre contexte, vos priorités et ce qui doit avancer en premier.'
},
{
  number: '2',
  icon: 'PencilRuler',
  title: 'Préparer',
  description:
  'Périmètre, livrables et rythme définis. Vous savez exactement ce qui arrive et quand.'
},
{
  number: '3',
  icon: 'Hammer',
  title: 'Mettre en œuvre',
  description:
  'Exécution par petites étapes visibles, avec des points réguliers plutôt qu’un long silence.'
},
{
  number: '4',
  icon: 'Rocket',
  title: 'Suivre',
  description:
  'Ce qui a été fait est documenté, ajusté si besoin, et je reste disponible pour la suite.'
}];


export const tools: string[] = [
'Google Workspace',
'Notion',
'Airtable',
'Trello',
'Canva',
'Figma',
'Make',
'Zapier',
'WordPress',
'Webflow',
'Slack',
'ChatGPT'];


export const needOptions = [
'Assistance opérationnelle',
'Contenus',
'Outils & automatisations',
'Présence en ligne',
'Recherche & veille',
'Organisation & documentation',
'Je ne sais pas encore'];


export const budgetOptions = [
'Moins de 200 €',
'200 – 500 €',
'500 – 1 500 €',
'Plus de 1 500 €',
'À définir ensemble'];


export const timelineOptions = [
'Dès que possible',
'Sous 2 à 4 semaines',
'Dans 1 à 3 mois',
'Simple prise de contact'];