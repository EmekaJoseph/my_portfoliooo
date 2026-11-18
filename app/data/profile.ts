// All site content lives here. Edit this file to update the portfolio.

// SEO: the live address of the site, no trailing slash (e.g. 'https://emekajoseph.com').
// Used for canonical links, social share previews, structured data and the sitemap.
export const siteUrl = 'https://emekajoseph.com'

export const seo = {
  title: 'Iwuji C. Joseph | Senior Full-Stack Developer in Lagos, Nigeria',
  description:
    'Iwuji C. Joseph is a senior full-stack developer in Lagos, Nigeria with 8+ years of experience building web, mobile and desktop applications with Vue, Nuxt, Laravel, Node.js and Flutter.',
  ogImage: '/og-image.jpg',
}

export const profile = {
  name: 'Iwuji C. Joseph',
  headerName: 'Iwuji C. Joseph',
  firstName: 'Chukwuemeka',
  initials: 'IJ',
  role: 'Senior Full-Stack Developer',
  location: 'Lagos, Nigeria',
  email: 'josephiwuji@gmail.com',
  // Drop your photo in /public (e.g. /public/profile.jpg) and set this to '/profile.jpg'
  photo: '/profile.webp',
  cv: '/Iwuji-Joseph-CV.pdf',
  tagline:
    'I build fast, scalable web, mobile and desktop applications, from database design to pixel-perfect interfaces.',
  about: [
    'I’m a full-stack developer with 8+ years of experience shipping production software with Vue, Nuxt, Laravel, Node.js and Flutter.',
    'Currently Tech Lead at Cavidel Limited, I lead cross-functional teams, mentor developers, and turn business requirements into clean, maintainable systems.',
  ],
  available: true,
  socials: {
    github: 'https://github.com/emekajoseph',
    linkedin: 'https://linkedin.com/in/iwuji-chukwuemeka-65595899',
    whatsapp: 'https://wa.me/2348139590011',
  },
}

export const stats = [
  { value: '8+', label: 'Years experience' },
  { value: '30%', label: 'Performance gains' },
  { value: '3', label: 'Platforms: web, mobile, desktop' },
]

export const experience = [
  {
    role: 'Senior Software Developer (Tech Lead)',
    company: 'Cavidel Limited',
    period: 'Jun 2023',
    points: [
      'Lead a cross-functional Agile team and mentor junior developers.',
      'Design scalable database architectures and RESTful APIs in Laravel.',
      'Standardised release processes with detailed deployment documentation.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Morgans Consortium',
    period: 'Aug 2023',
    points: [
      'Turn Figma designs into pixel-perfect, responsive Vue.js interfaces.',
      'Set up CI/CD pipelines for reliable production releases.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Ciku Technologies',
    period: 'Aug 2022',
    points: [
      'Built secure, well-documented Laravel APIs with full Postman test suites.',
      'Optimised relational schemas with indexing and query tuning.',
    ],
  },
  {
    role: 'JavaScript Developer',
    company: 'Magnet Consulting Associate Limited',
    period: 'Aug 2020',
    points: [
      'Built data-rich, cross-browser web apps consuming REST APIs.',
      'Improved UX through performance optimisation and user feedback.',
    ],
  },
  {
    role: 'IT Respondent',
    company: '371 Nigerian Air Force Detachment',
    period: 'Sep 2019',
    points: [
      'Designed and taught a web development curriculum to personnel.',
      'Deployed secure digital personnel records and archives.',
    ],
  },
]

// If title is empty, the site shows the link's domain instead.
export const projects = [
  {
    title: 'Limpar Global',
    description:
      'Website for a workforce and talent partner that helps organisations source and develop African talent, with a talent application flow.',
    tags: ['Nuxt', 'Vue', 'SSR'],
    url: 'https://limparglobal.org',
  },
  {
    title: 'OfficeMate ERP',
    description:
      'Web-based ERP that runs day-to-day office operations for organisations, from staff management to internal workflows.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    url: 'https://cavidel.officemate.ng',
  },
  {
    title: 'Agudatechy',
    description:
      'Free tech-learning platform where volunteer teachers share modern courses with a growing community of learners.',
    tags: ['Vue 3', 'Pinia', 'Vite', 'PWA'],
    url: 'https://agudatechy.com',
  },
]

export const skills = [
  { group: 'Frontend', items: ['Vue 3', 'Nuxt', 'Pinia', 'Vite', 'Tailwind CSS', 'Vuetify', 'Quasar', 'Sass'] },
  { group: 'Backend', items: ['Laravel', 'PHP 8', 'Node.js', 'Sanctum / Passport', 'REST APIs', 'OpenAPI'] },
  { group: 'Mobile & Desktop', items: ['Flutter', 'Dart', 'C#', 'PWAs'] },
  { group: 'Data & DevOps', items: ['MySQL', 'PostgreSQL', 'Docker', 'GitHub Actions', 'GitLab CI', 'Laravel Forge'] },
  { group: 'Testing', items: ['Vitest', 'Jest', 'Cypress', 'Postman'] },
]

export const education = [
  { degree: 'B.Sc. Computer Science', school: 'Adekunle Ajasin University, Akungba', period: '2018' },
  { degree: 'OND Computer Science', school: 'Yaba College of Technology, Lagos', period: '2015' },
]
