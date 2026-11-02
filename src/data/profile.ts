/** Canonical profile copy used by the UI and machine-readable exports. */

export const profile = {
  name: 'Urja Arora',
  shortName: 'urja',
  headline: 'Developer, Designer, and Student',
  location: {
    primary: 'Sydney, NSW, Australia',
    secondary: 'Delhi, India',
    note: 'Based in Sydney; also connected to Delhi.',
  },
  /** Full bio as a single string for machines / meta. */
  about: [
    "Hi! I'm urja. I'm one of two engineers building Australia's first national AI Index at UNSW, where I also work on research teaching small models to classify patents. On the side I build things for people who need them, most recently a document system for a manufacturer in India whose drawings all lived in paper files.",
  ],
  /** Body after the styled short name on the About tile. */
  aboutAfterName:
    "I'm one of two engineers building Australia's first national AI Index at UNSW, where I also work on research teaching small models to classify patents. On the side I build things for people who need them, most recently a document system for a manufacturer in India whose drawings all lived in paper files.",
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
      'A little idea garden on the side. Plant something you want to build, water what catches your eye, and watch the good ones sprout. Not a project case study — interactive community ideas planted by visitors.',
  },
} as const;

export type Profile = typeof profile;
