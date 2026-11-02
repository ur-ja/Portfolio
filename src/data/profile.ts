/** Canonical profile copy used by the UI and machine-readable exports. */

export const profile = {
  name: 'Urja Arora',
  shortName: 'urja',
  headline: 'Software Engineer',
  location: {
    primary: 'Sydney, NSW, Australia',
    secondary: 'Delhi, India',
    note: 'Based in Sydney; also connected to Delhi.',
  },
  /** Full bio paragraphs for machines / meta / crawlable HTML. */
  about: [
    "Hi! I'm urja, I'm a software engineer. I build software that solves practical problems, from secure backend systems and data pipelines to user-facing applications.",
    'Currently one of two engineers building AI Index Australia at UNSW. Previously built an internal operations platform for a manufacturer in India and a mobile HR survey application at VVDN.',
  ],
  /** Body after "Hi! I'm urja, I'm a software engineer." on the About tile. */
  aboutAfterName:
    'I build software that solves practical problems, from secure backend systems and data pipelines to user-facing applications. Currently one of two engineers building AI Index Australia at UNSW. Previously built an internal operations platform for a manufacturer in India and a mobile HR survey application at VVDN.',
  email: 'urjaarora048@gmail.com',
  links: {
    resume:
      'https://drive.google.com/file/d/14XVp5VQQe5IdmU7YjSN8OcY6pU3QEIev/view?usp=sharing',
    linkedin: 'https://www.linkedin.com/in/urja-arora/',
    github: 'https://github.com/ur-ja',
  },
  site: {
    homePath: '/',
    projectsPath: '/projects',
    seedsPath: '/seeds',
    llmsPath: '/llms.txt',
    profileJsonPath: '/api/profile',
  },
  seeds: {
    title: 'Seeds',
    description:
      'A little idea garden on the side. Plant something you want to build, water what catches your eye, and watch the good ones sprout. Not a project case study; interactive community ideas planted by visitors.',
  },
} as const;

export type Profile = typeof profile;
