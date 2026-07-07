export interface ProjectLink {
  label: string;
  href: string;
}

export type SectionBlock =
  | { type: 'text'; content: string }
  | { type: 'bullets'; items: string[] }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
      size?: 'full' | 'medium' | 'phone';
    };

export interface ProjectSection {
  title: string;
  blocks: SectionBlock[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  organisation: string;
  dates: string;
  summary: string;
  tags: string[];
  tileDescription: string;
  imageSize?: 'full' | 'medium' | 'phone';
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    size?: 'full' | 'medium' | 'phone';
  };
  sections: ProjectSection[];
  links: ProjectLink[];
  dashboardUrl?: string;
}

const IMG = '/projects/ai-index';
const VVDN_IMG = '/projects/vvdn';
const DEVSOC_IMG = '/projects/devsoc';
const OSHEPRO_IMG = '/projects/oshepro';
const WHEREABOUTS_IMG = '/projects/whereabouts';
const TDS_URL =
  'https://www.unsw.edu.au/engineering/research-technology/research-centres-institutes/trustworthy-digital-society';

export const projects: Project[] = [
  {
    slug: 'ai-index-australia',
    title: 'AI Index for Australia',
    role: 'Research Assistant',
    organisation: 'Trustworthy Digital Society (UNSW × UTS)',
    dates: 'August 2025 to present',
    summary:
      "One of two engineers at Trustworthy Digital Society building Australia's first AI Index. The project brings together research, grants, patents, and talent data through a pipeline and interactive dashboard focused on the Australian AI landscape.",
    tags: ['Data Pipelines', 'Full-Stack', 'Python', 'React', 'Postgres'],
    tileDescription:
      'Data pipelines and interactive dashboard for AI Index Australia at Trustworthy Digital Society.',
    heroImage: {
      src: `${IMG}/hero-landing.png`,
      alt: 'AI Index Australia landing page',
      caption: 'The live platform, hosted on ARDC Nectar infrastructure.',
    },
    sections: [
      {
        title: 'The project',
        blocks: [
          {
            type: 'text',
            content:
              "Each year, Stanford HAI publishes the AI Index, a widely referenced report on the state of artificial intelligence globally. While comprehensive, Australian data is typically aggregated within broader regional groupings, which limits visibility into local trends.",
          },
          {
            type: 'text',
            content:
              "AI Index Australia addresses this gap. Developed through Trustworthy Digital Society, a joint research initiative between UNSW and UTS, the project provides an interactive, Australia-specific view of AI activity. Work to date has focused on the research and development domain, covering publications, grants, patents, and talent mobility. The team is in early discussions with Stanford HAI regarding longer-term collaboration.",
          },
        ],
      },
      {
        title: 'What I built',
        blocks: [
          {
            type: 'text',
            content:
              "I work as one of two engineers on a four-person team at Trustworthy Digital Society. Working closely with my colleague and our stakeholders has shaped much of how I approach engineering problems. My responsibilities span the full data stack, from ingestion and processing through to the dashboard layer: sourcing data from external APIs, normalising disparate datasets, building cross-source linkages, and delivering interactive visualisations.",
          },
          {
            type: 'text',
            content:
              "Key contributions include linking grant data from the ARC and Research Link Australia to publications in OpenAlex, with quality indicators applied through Scimago journal rankings and CORE conference rankings. Matching conferences to publications required building a DBLP full-text search index, as conference naming conventions lack the standardisation found in journal publishing. I also developed patent ingestion pipelines from IP RAPID and PATSTAT, implemented AI classification across all data sources, and built talent mobility tracking from ORCID to analyse researcher movement in and out of Australia.",
          },
          {
            type: 'text',
            content:
              "This sits on a modular Python pipeline for collection, ingestion, and post-processing, paired with a config-driven React frontend and FastAPI backend. The architecture is designed so new data sources can be integrated without restructuring the existing system.",
          },
          {
            type: 'image',
            src: `${IMG}/filter-ui.png`,
            alt: 'Dashboard filter panel showing chapter, section, and topic selectors',
            caption:
              'The dashboard is config-driven, allowing new visualisations to be added through configuration rather than frontend rewrites.',
          },
          {
            type: 'image',
            src: `${IMG}/sankey-grants.png`,
            alt: 'Sankey diagram linking grant fields to AI publication topics',
            caption:
              'Cross-source linkage between grant fields of research and AI publication outcomes in the CSO taxonomy.',
          },
        ],
      },
      {
        title: 'The dashboard',
        blocks: [
          {
            type: 'text',
            content:
              "The dashboard allows researchers and stakeholders to filter by year, topic, and visualisation type, then explore the underlying data interactively. It has been presented to audiences across UNSW and the broader research community.",
          },
          {
            type: 'text',
            content:
              "Access is controlled in two layers. An email allowlist in the application database determines who can reach the data pages. Authentication is handled through Auth0 SSO, with email verification to ensure account integrity. For stakeholder sessions, access is provisioned by adding professional email addresses to the allowlist prior to sign-up.",
          },
          {
            type: 'image',
            src: `${IMG}/map-collaborations.png`,
            alt: 'World map of AI publication collaborations with Australia',
            caption: 'International collaboration patterns in AI publications co-authored with Australia.',
          },
          {
            type: 'image',
            src: `${IMG}/chart-grants-funding.png`,
            alt: 'Bar chart of AI-related grant funding by year',
            caption: 'AI-related grant funding over time, sourced from Australian Research Council data.',
          },
          {
            type: 'image',
            src: `${IMG}/chart-patents-global-share.png`,
            alt: "Line chart of Australia's share of global granted AI patent families",
            caption:
              "Australia's share of globally granted AI patent families (PATSTAT), presented alongside domestic IP RAPID data.",
          },
        ],
      },
      {
        title: 'Stack and infra',
        blocks: [
          {
            type: 'text',
            content:
              "The project is hosted entirely on ARDC Nectar, including compute VMs, the Postgres database, object storage, and the production website. Data pipeline jobs populate the database, which the FastAPI backend queries and the React frontend renders as interactive charts.",
          },
          {
            type: 'text',
            content:
              "The data pipeline uses Python, pandas, SQLAlchemy, and Postgres, with OpenStack Swift for object storage. The web application is built with React, TypeScript, Vite, and Tailwind, with Chart.js, Recharts, and D3 for visualisation. The backend runs on FastAPI with Auth0 for authentication, deployed via Docker and GitLab CI. Data is sourced from OpenAlex, ORCID, the ARC, Scimago, CORE, IP RAPID, and PATSTAT.",
          },
        ],
      },
    ],
    links: [
      {
        label: 'Live dashboard',
        href: 'https://dashboard.australia-ai-index.cloud.edu.au/about',
      },
      {
        label: 'Trustworthy Digital Society',
        href: TDS_URL,
      },
      {
        label: 'Stanford AI Index',
        href: 'https://hai.stanford.edu/ai-index/2025-ai-index-report',
      },
    ],
    dashboardUrl: 'https://dashboard.australia-ai-index.cloud.edu.au/about',
  },
  {
    slug: 'sdlt-deepfake-framework',
    title: 'Scalable and Privacy-Preserving Deepfake Detection Framework',
    role: 'Honours Thesis Author',
    organisation: 'UNSW Sydney',
    dates: '2024 to 2025',
    summary:
      'Honours thesis on making deepfake detection scalable and privacy-preserving on the blockchain. Published at SDLT 2025 and awarded Best Paper at the symposium.',
    tags: ['Research', 'Blockchain', 'Privacy', 'Python', 'Hyperledger'],
    tileDescription:
      'Honours thesis published at SDLT 2025 and awarded Best Paper. A privacy-preserving deepfake detection framework built on Hyperledger Fabric.',
    sections: [
      {
        title: 'The project',
        blocks: [
          {
            type: 'text',
            content:
              'This work formed my honours thesis at UNSW Sydney, under the supervision of Dr Hye-Young Paik. Her guidance throughout the research process was central to how the project took shape. Deepfakes spread quickly across social media, but most detection systems struggle to scale without compromising user privacy. The research focused on improving DDS, an existing blockchain-based deepfake detection framework, to handle high-throughput verification while keeping identities protected.',
          },
          {
            type: 'text',
            content:
              'The approach combined hash-based content filtration with IncogniSense, a privacy-preserving voting protocol, to filter and verify AI-generated media efficiently within the DDS architecture. The result is a system designed for deployment in settings where both integrity and anonymity matter.',
          },
        ],
      },
      {
        title: 'What I built',
        blocks: [
          {
            type: 'text',
            content:
              'I designed and implemented a two-stage filtration pipeline using xxHash and perceptual hashing (pHash) to catch duplicate and near-duplicate content before it reaches the blockchain. This cut redundant on-chain verifications significantly. On top of that, I extended the IncogniSense protocol with a reputation-weighted voting mechanism using zero-knowledge proofs (Idemix) so users could participate anonymously without sacrificing result quality.',
          },
          {
            type: 'text',
            content:
              'The prototype integrated Redis for off-chain caching and Hyperledger Fabric for distributed ledger operations. The architecture was built to be deployable in real-world, privacy-aware detection scenarios rather than remaining a theoretical contribution.',
          },
        ],
      },
      {
        title: 'Results',
        blocks: [
          {
            type: 'text',
            content:
              'Evaluation showed a 91% reduction in blockchain load through the filtration layer, with 90% of verification requests resolved in under 100ms via caching and duplicate detection. The privacy protocol demonstrated user anonymity, vote unlinkability, and Sybil resistance under the experimental conditions tested.',
          },
          {
            type: 'text',
            content:
              'The main engineering challenge was balancing cryptographic privacy with throughput. Zero-knowledge proofs and pseudonym transfers add overhead, and tuning perceptual hash thresholds to catch near-duplicates without false positives required careful iteration across inconsistent deepfake datasets.',
          },
        ],
      },
      {
        title: 'Recognition',
        blocks: [
          {
            type: 'text',
            content:
              'The paper was published in the proceedings of the 9th Symposium on Distributed Ledger Technology (SDLT 2025), held at Deakin University in November 2025. It received the Best Paper award at the symposium. I was awarded Honours Class I at UNSW for this work.',
          },
        ],
      },
      {
        title: 'Stack',
        blocks: [
          {
            type: 'text',
            content:
              'Python, Hyperledger Fabric, Redis, xxHash, and pHash. The system was evaluated as an end-to-end prototype covering content filtration, privacy-preserving consensus, and blockchain integration.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Published paper (Springer)',
        href: 'https://www.springerprofessional.de/en/scalable-and-privacy-preserving-deepfake-detection-framework/52503022',
      },
      {
        label: 'Best Paper certificate',
        href: 'https://drive.google.com/file/d/1h-kkdTqEAWdOiyvX3wUm1ewvRSbxcQl2/view?usp=sharing',
      },
      {
        label: 'SDLT 2025',
        href: 'https://symposium-dlt.org/',
      },
    ],
  },
  {
    slug: 'vvdn-hr-survey',
    title: 'HR Survey Management Application',
    role: 'Software Engineering Intern',
    organisation: 'VVDN Technologies',
    dates: 'March to May 2024',
    summary:
      'Built a full-stack HR survey app during my internship on the Cloud & Apps Engineering team. Flutter frontend, Django REST backend, shipped a prototype that HR now uses internally.',
    tags: ['Flutter', 'Django', 'Full-Stack', 'Mobile', 'PostgreSQL'],
    tileDescription:
      'Full-stack HR survey app built at VVDN Technologies. Flutter and Django, now in active use by the HR department.',
    imageSize: 'phone',
    heroImage: {
      src: `${VVDN_IMG}/design-employee-login.png`,
      alt: 'Employee login screen for VVDN HR Survey app',
      caption: 'Employee login screen with VVDN branding.',
    },
    sections: [
      {
        title: 'The project',
        blocks: [
          {
            type: 'text',
            content:
              'I interned at VVDN Technologies on the Cloud & Apps Engineering team. VVDN is a global product engineering company working across cloud, IoT, networking, and embedded systems. The internal brief was to replace the company\'s email-based survey workflow with a secure, mobile-first platform where HR could create, distribute, and analyse employee surveys. I built the prototype largely on my own, but had consistent support from mentors on the Cloud team through stand-ups, demos, and code review.',
          },
        ],
      },
      {
        title: 'What I built',
        blocks: [
          {
            type: 'text',
            content:
              'I built a full-stack prototype from scratch using Flutter for the cross-platform mobile app and Django REST Framework for the backend API. The app supports separate admin and employee dashboards, user authentication, and multilingual survey delivery.',
          },
          {
            type: 'text',
            content:
              'The interface was built for both Android and iOS from a single Flutter codebase. I worked through daily stand-ups and weekly demos with the Cloud team, iterating on feedback throughout the internship.',
          },
          {
            type: 'image',
            src: `${VVDN_IMG}/admin-survey-list.png`,
            alt: 'Admin dashboard showing available surveys with toggle switches',
            caption:
              'HR admin view. Create, activate, and deactivate surveys from one screen.',
          },
          {
            type: 'image',
            src: `${VVDN_IMG}/design-create-survey.png`,
            alt: 'Create new survey screen with name, schedule, and file upload',
            caption: 'Creating a new survey with scheduling and file upload.',
          },
          {
            type: 'image',
            src: `${VVDN_IMG}/design-survey-question.png`,
            alt: 'Survey question screen with multiple choice answers',
            caption: 'Employee survey flow with step-by-step questions.',
          },
        ],
      },
      {
        title: 'Outcome',
        blocks: [
          {
            type: 'image',
            src: `${VVDN_IMG}/app-admin-surveys.png`,
            alt: 'Running app in Android emulator showing survey activation controls',
            size: 'medium',
            caption:
              'The app running on VVDN hardware during development. I only had access on my work machine, so this is what I kept from the internship.',
          },
          {
            type: 'text',
            content:
              'The application was completed within the internship and adopted by VVDN\'s HR department. It has since been expanded and remains in active internal use. My performance evaluation rated Excellent across all criteria, including technical proficiency, communication, teamwork, and initiative.',
          },
          {
            type: 'text',
            content:
              'Supervisor feedback highlighted completing the application from scratch, designing UI proactively ahead of schedule, and consistently delivering ahead of deadlines. This was my first experience shipping software that real users rely on day to day, even though it was a prototype.',
          },
        ],
      },
      {
        title: 'Stack',
        blocks: [
          {
            type: 'text',
            content:
              'Flutter, Django REST Framework, Python, PostgreSQL, and REST API design. CI/CD through GitHub Actions. The internship covered the full cycle from requirements gathering and API design through to demo and handover.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'VVDN Technologies',
        href: 'https://www.vvdntech.com/',
      },
    ],
  },
  {
    slug: 'devsoc',
    title: 'Software Development Society',
    role: 'Frontend Engineer → Director (Bridges)',
    organisation: 'UNSW Sydney',
    dates: 'March 2023 to November 2025',
    summary:
      'Three years across DevSoc project teams, shipping student-facing apps used on campus. Freerooms and Unilectives as a frontend engineer, then Director on Bridges.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Leadership'],
    tileDescription:
      'Freerooms, Unilectives, and Director on Bridges at DevSoc.',
    heroImage: {
      src: `${DEVSOC_IMG}/freerooms-landing.png`,
      alt: 'Freerooms landing page',
      caption: 'The Freerooms landing page I redesigned and built, top to bottom.',
    },
    sections: [
      {
        title: 'Why DevSoc',
        blocks: [
          {
            type: 'text',
            content:
              'DevSoc runs like a small tech company inside UNSW. Real project teams, designers, HR, marketing, and code that actual students use. I joined in 2023 and spent three years across different project teams, from frontend contributor to director.',
          },
          {
            type: 'text',
            content:
              'Most of my DevSoc work has been joining existing codebases and shipping features with a team, not building solo. That is a different skill, and honestly the more important one. I learned by watching how senior contributors reviewed my PRs, how designers thought about flows, and how teams disagreed productively before shipping.',
          },
        ],
      },
      {
        title: 'Freerooms',
        blocks: [
          {
            type: 'text',
            content:
              'Mar to Dec 2023 · Frontend Engineer. Freerooms shows you which classrooms are free on campus. It was my entry point into DevSoc and my first time touching a production app that other students actually opened on their phones between classes.',
          },
          {
            type: 'text',
            content:
              'I redesigned and rebuilt the entire landing page, from design through to implementation. Hero, features, FAQ, sponsors, the full page. I also contributed to the broader Next.js migration and performance work across the app. It was the first time pull requests, code review, and shared design systems clicked for me.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/freerooms-features.png`,
            alt: 'Freerooms features section with browse, map, and timetable cards',
            caption: 'The features section, part of the full landing page redesign.',
          },
        ],
      },
      {
        title: 'Unilectives',
        blocks: [
          {
            type: 'text',
            content:
              'Mar to Dec 2024 · Frontend Engineer. Unilectives is DevSoc\'s course review platform, sponsored by Jane Street and TikTok. By the time I joined, it was already serving thousands of students. My job was to add to something that mattered, not start from zero.',
          },
          {
            type: 'text',
            content:
              'I also designed sponsor placement layouts for the Unilectives homepage, fitting Jane Street, TikTok, and Macquarie branding into the existing UI without cluttering the page.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-sponsors.png`,
            alt: 'Unilectives homepage design with sponsor logos in the header area',
            caption: 'Sponsor layout explorations for the Unilectives homepage.',
          },
          {
            type: 'text',
            content:
              'I set up analytics tracking so the team could see what students actually used and make decisions from real data.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-analytics.png`,
            alt: 'Plausible analytics dashboard for Unilectives showing 10k pageviews',
            caption: 'Over 10,000 pageviews in a single month while I was on the team.',
          },
          {
            type: 'text',
            content:
              'I also helped ship Unilectives Wrapped, a year-in-review feature modelled on Spotify Wrapped. Picking your courses is stressful. Wrapped made the data feel fun instead of dry.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-wrapped-hero.png`,
            alt: 'Unilectives Wrapped 2024 hero screen',
            caption: 'Unilectives Wrapped 2024 opening screen.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-wrapped-course.png`,
            alt: 'Unilectives Wrapped slide showing most popular course stats',
            caption: 'A Wrapped slide showing course popularity and ratings.',
          },
        ],
      },
      {
        title: 'Bridges',
        blocks: [
          {
            type: 'text',
            content:
              'Jan to Nov 2025 · Director. Bridges is a platform to connect UNSW societies with industry sponsors. This one started from zero. Before any UI, we spent months on the idea itself: running surveys, talking to societies and sponsors, and doing proper requirements work to understand whether the problem was real and what a solution needed to look like.',
          },
          {
            type: 'text',
            content:
              'Design came last. The v1 screens were how we communicated what we believed the product should be, not where we started. My role was not to write the code myself. I led the team, helped others design and build, reviewed work, and stepped in only when someone needed support. The goal was to let people on the team do their best work and take ownership of what they shipped.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/bridges-browse.png`,
            alt: 'Bridges v1 browse partnerships page',
            caption: 'The v1 browse screen. Design as a shared picture of what the team was building toward.',
          },
          {
            type: 'text',
            content:
              'Leading for the first time meant learning when to guide and when to get out of the way. Sprint planning, unblocking people, keeping design and engineering talking to each other. The v1 covered browse, society login, and onboarding, built by the developers and designers on the team. I was there to make sure we solved the right problem and that everyone had room to contribute.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/bridges-login.png`,
            alt: 'Bridges society login page',
            caption: 'Society login and sign-up flows from the v1 release.',
          },
        ],
      },
      {
        title: 'What stuck',
        blocks: [
          {
            type: 'text',
            content:
              'DevSoc is where I learned that software is a team sport. Version control, CI/CD, code review, sprint planning, all of it in service of apps students actually use. Every project from Freerooms to Bridges marked a step up: first codebase, first feature at scale, first team to lead. I would not be where I am without the people who reviewed my code, pushed me to think bigger, and showed me what good collaboration looks like.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Freerooms',
        href: 'https://freerooms.devsoc.app/',
      },
      {
        label: 'Unilectives',
        href: 'https://unilectives.devsoc.app/',
      },
    ],
  },
  {
    slug: 'oshepro',
    title: 'Oshepro EHS Platform',
    role: 'UX Designer',
    organisation: 'Oshepro',
    dates: 'July to December 2023',
    summary:
      'I worked on Oshepro\'s core workflows so safety teams could complete forms properly without getting stuck in confusing UI.',
    tileDescription:
      'UX redesign across SHEMa, AMLA, and TRACI to make safety workflows clearer and easier to complete.',
    tags: ['UX Design', 'Figma', 'Enterprise', 'Research', 'Prototyping'],
    sections: [
      {
        title: 'The role',
        blocks: [
          {
            type: 'text',
            content:
              'Jul to Dec 2023 · Remote from Sydney, team based in Phoenix. Oshepro is an EHS platform for safety audits, risk assessments, and compliance reporting. The people using it are field workers and safety teams on job sites, not software people. They need to log hazards and close out tasks, then get back to work.',
          },
          {
            type: 'text',
            content:
              'The product had grown quickly, but the UX had not kept pace. Teams were doing safety-critical work in screens where navigation kept changing and controls behaved differently from one page to the next. I redesigned three connected parts of the same product: SHEMa (Safety, Health and Environmental Manager), AMLA (Accident Management and Loss Analysis), and TRACI (Task Risk Assessment, Control and Implementation).',
          },
        ],
      },
      {
        title: 'The problem',
        blocks: [
          {
            type: 'text',
            content:
              'The big issue was simple: people were fighting the interface. Most users were non-technical field and safety teams, but the product expected them to navigate dense layouts and inconsistent interactions. Instead of focusing on the actual task, they first had to figure out what the screen was trying to do.',
          },
          {
            type: 'text',
            content:
              'That led to real data quality problems. Required fields were missed, records were submitted half-finished, and teams could not trust that every entry was complete. In compliance software, that is not just annoying UX. It can create real safety and audit risk.',
          },
          {
            type: 'bullets',
            items: [
              'Navigation changed across modules, so users could not build a reliable routine.',
              'Controls looked similar but behaved differently, which led to avoidable mistakes.',
              'Common tasks took too many clicks and had unclear next steps.',
              'User reviews said the same thing: easy for some, too complicated for less technical users.',
            ],
          },
        ],
      },
      {
        title: 'SHEMa',
        blocks: [
          {
            type: 'text',
            content:
              'SHEMa was the module people touched most, so its issues were felt every day. On the surface it looked simple, but once users started creating tasks, the flow became confusing and easy to misread.',
          },
          {
            type: 'bullets',
            items: [
              'Next and Back did not always behave the way users expected, so people thought they had finished when they had not.',
              'Entered text looked too similar to placeholder text, which made users doubt whether information was actually saved.',
              'After creating a task, users were not guided cleanly back to the task list.',
              'Task list actions were fiddly: small click targets, unclear sort arrows, and inconsistent permission visibility.',
              'Sidebar behavior added friction with hidden navigation, small labels, and a default landing page that did not match the main user intent.',
            ],
          },
          {
            type: 'text',
            content:
              'I designed two versions of the same SHEMa workflow, compared the tradeoffs, and then pushed a cleaner direction. The redesigned flow made progress visible, grouped related fields more clearly, and made navigation feel predictable from start to submit.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/form-multi-step.png`,
            alt: 'Multi-step modal for adding a task with progress bar',
            caption: 'SHEMa concept: multi-step flow with visible progress.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/form-accordion-overview.png`,
            alt: 'Accordion-based add task flow with numbered sections',
            caption: 'SHEMa concept: sectioned accordions for clearer grouping.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/Sidebar.png`,
            alt: 'SHEMa dashboard and sidebar redesign concept',
            caption: 'SHEMa navigation cleanup to reduce menu friction.',
          },
        ],
      },
      {
        title: 'AMLA',
        blocks: [
          {
            type: 'text',
            content:
              'AMLA had a different problem. The form asked for important incident information, but the UI made people work too hard before they could even start thinking about the incident itself.',
          },
          {
            type: 'bullets',
            items: [
              'Moving between tabs felt slower than it should have been.',
              'Accordions depended on tiny click targets, so expanding sections was easy to miss.',
              'Mixing MCQs and dropdowns made the interaction feel inconsistent.',
              'Column-heavy layouts made forms feel more complicated than the task itself.',
              'Some sections needed clearer grouping and more flexible root-cause input.',
            ],
          },
          {
            type: 'text',
            content:
              'I simplified AMLA into a more linear, consistent flow. Tabs and accordions became easier to interact with, input patterns were standardized, and the structure was cleaned up so users could complete incident forms with fewer second guesses.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/Employee Information_ Accordion Expanded.png`,
            alt: 'AMLA employee information section in expanded accordion view',
            caption: 'AMLA: clearer section hierarchy using expanded accordions.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/Inquiry Questions.png`,
            alt: 'AMLA inquiry questions section redesign',
            caption: 'AMLA: inquiry section redesigned for faster completion.',
          },
        ],
      },
      {
        title: 'TRACI',
        blocks: [
          {
            type: 'text',
            content:
              'TRACI was naturally the most complex part of the product, but the interface made that complexity feel heavier than it needed to be. Hazard assessment screens were dense, nested, and easy to lose your place in.',
          },
          {
            type: 'bullets',
            items: [
              'Nested tabs hid important sections, so users could miss key risk details.',
              'Long checklists increased visual load and slowed repeated workflows.',
              'Control behavior changed across tabs and fields, which reduced user confidence.',
              'Some core dropdowns (plant, department, equipment) were unreliable, blocking key selections.',
              'Risk summary and risk control information were grouped in ways that made review harder.',
            ],
          },
          {
            type: 'text',
            content:
              'I restructured TRACI into clearer task-level sections with stronger hierarchy and easier expansion. I also cleaned up checklist interactions, separated key risk views, and improved severity cues so high-risk items stand out quickly during review.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/traci-task-list.png`,
            alt: 'TRACI task list with equipment photos and add task button',
            caption: 'Task breakdown with visual context for each step.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/traci-risk-collapsed.png`,
            alt: 'TRACI risk assessment with collapsed task accordions',
            caption: 'Scan the task list, expand only what you need.',
          },
          {
            type: 'text',
            content:
              'Expanded task views showed detail without overwhelming the page. Summary views used clear severity colors so high-risk items were obvious during review.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/traci-risk-expanded.png`,
            alt: 'TRACI risk assessment with expanded task showing hazard dropdowns',
            caption: 'Expanded task with hazard, injury, and consequence fields.',
          },
          {
            type: 'image',
            src: `${OSHEPRO_IMG}/traci-risk-summary.png`,
            alt: 'TRACI risk summary with color-coded HIGH risk indicator',
            caption: 'Risk summary with a color-coded severity score.',
          },
        ],
      },
      {
        title: 'What I took away',
        blocks: [
          {
            type: 'text',
            content:
              'This project taught me what enterprise UX means in practice. In compliance products, good design is not about making screens look nice. It is about helping people enter the right information at the right time, with confidence.',
          },
        ],
      },
    ],
    links: [],
  },
  {
    slug: 'whereabouts',
    title: 'Whereabouts',
    role: 'Product Engineer',
    organisation: 'Personal Project',
    dates: '2026',
    summary:
      'I built this for myself while deciding between India and Australia. I was in India for a few months working remotely, and I did not want to waste that window of experimentation.',
    tags: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'PWA'],
    tileDescription:
      'A personal project that turns indecision into data through daily tracking, reflection, and patterns.',
    imageSize: 'phone',
    heroImage: {
      src: `${WHEREABOUTS_IMG}/log-lean-slider.png`,
      alt: 'Whereabouts daily log screen with lean slider',
      caption: 'Daily check-in screen with lean slider, tags, and note.',
      size: 'phone',
    },
    sections: [
      {
        title: 'The idea',
        blocks: [
          {
            type: 'text',
            content:
              'This is one of my favorite projects because it came from a real decision in my own life: India vs Australia. I was in India for a few months while working remotely, which gave me a rare chance to test what day-to-day life actually felt like instead of deciding from a distance.',
          },
          {
            type: 'text',
            content:
              'I did not want to waste that opportunity by relying on vague memory later. So I built a daily system: log where I am leaning on a 1-10 scale, tag what influenced it, and write a short note. Over time, it shows me not just what I felt, but why.',
          },
        ],
      },
      {
        title: 'What it does',
        blocks: [
          {
            type: 'text',
            content:
              'I kept the product structure simple so it is easy to use every day: Log, Patterns, Past entries, and Settings.',
          },
          {
            type: 'bullets',
            items: [
              'Log: one entry per day with a lean slider, factor tags, and journal note.',
              'Patterns: trend charts, pivot count, and top factors influencing each direction.',
              'Past entries: reverse chronological history with quick jump back to any day.',
              'Settings: place names, account controls, and partner sharing.',
            ],
          },
          {
            type: 'text',
            content:
              'I built it around India and Australia at first, but both sides are customizable so it works for any two-place decision.',
          },
          {
            type: 'text',
            content:
              'On the Log tab, I pick factor tags and write a short journal note alongside the daily lean score.',
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/log-tags-journal.png`,
            alt: 'Whereabouts log screen with factor tags and journal note',
            caption: 'Log tab with factor tags and journal entry.',
            size: 'phone',
          },
          {
            type: 'text',
            content:
              'The Patterns tab is where the analysis lives: lean over time, pivot count, and how my direction shifts across days.',
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/patterns-overview-chart.png`,
            alt: 'Whereabouts patterns dashboard with lean over time chart',
            caption: 'Patterns dashboard with lean-over-time chart and pivot stats.',
            size: 'phone',
          },
          {
            type: 'text',
            content:
              'The top-factors view was important for me. It shows which tags keep showing up on India-leaning vs Australia-leaning days, so I can see what is driving my decisions instead of guessing.',
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/patterns-top-factors.png`,
            alt: 'Whereabouts top factors chart with tag frequencies by lean direction',
            caption: 'Top factors chart showing what repeatedly influences my lean.',
            size: 'phone',
          },
          {
            type: 'text',
            content:
              'Past entries keeps a reverse-chronological history so I can jump back to any day and see what I logged.',
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/history-entries-list.png`,
            alt: 'Whereabouts past entries history list',
            caption: 'Past entries in reverse chronological order.',
            size: 'phone',
          },
        ],
      },
      {
        title: 'Product decisions',
        blocks: [
          {
            type: 'text',
            content:
              'My main product goal was low friction. If daily logging feels heavy, people stop doing it. So I optimized for speed, clarity, and momentum.',
          },
          {
            type: 'text',
            content:
              'The point was not to force a decision every day. It was to run a real experiment on myself while I had the chance, collect honest data over time, and then decide with more clarity.',
          },
          {
            type: 'bullets',
            items: [
              'One entry per calendar day to keep the habit clear and consistent.',
              'Optimistic save with local cache so date switching feels instant.',
              'Pivot detection to show when I cross from one side to the other.',
              'Sharp-pivot markers for big day-over-day swings.',
              'Read-only partner mode so someone close can follow the journey without account overlap.',
            ],
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/settings-account-places.png`,
            alt: 'Whereabouts settings screen with India and Australia place names',
            caption: 'Settings for custom place names and account controls.',
            size: 'phone',
          },
        ],
      },
      {
        title: 'Partner sharing',
        blocks: [
          {
            type: 'text',
            content:
              'I added partner sharing because this decision was personal and ongoing. I wanted someone close to be able to follow my progress without logging into my account or editing anything.',
          },
          {
            type: 'bullets',
            items: [
              'Invite by email from Settings.',
              'Partner accepts the invite on their own account.',
              'Access is read-only, so entries stay private and unchanged.',
              'Partner can open a summary view with lean, pivots, and top factors.',
            ],
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/settings-sharing-overview.png`,
            alt: 'Whereabouts partner invite and shared-with settings screen',
            caption: 'Invite flow in Settings, with shared partner access below.',
            size: 'phone',
          },
          {
            type: 'image',
            src: `${WHEREABOUTS_IMG}/partner-summary.png`,
            alt: 'Whereabouts partner summary with lean stats and top factors',
            caption: 'Partner summary: read-only snapshot with current lean and top factors.',
            size: 'phone',
          },
        ],
      },
      {
        title: 'Tech and architecture',
        blocks: [
          {
            type: 'text',
            content:
              'I built this as one React Native codebase using Expo, then shipped it across web, iOS, and Android. The web version runs as an installable PWA.',
          },
          {
            type: 'bullets',
            items: [
              'Frontend: Expo, React Native, TypeScript, Expo Router.',
              'Web/PWA: React Native Web static export, deployed on Vercel.',
              'Backend: Supabase Auth + Postgres with Row Level Security policies.',
              'Charts: react-native-gifted-charts for lean trends and factor analytics.',
              'State: React Context for auth and place configuration.',
            ],
          },
          {
            type: 'text',
            content:
              'I kept security policy-driven in the database with Supabase RLS. People can access their own data, and partner access is invite-only and read-only.',
          },
        ],
      },
      {
        title: 'What I learned',
        blocks: [
          {
            type: 'text',
            content:
              'I built this because I had a real question and no good way to answer it. Turning that into a daily log, then charts, then partner sharing felt natural because each step solved something I was actually running into. That is the kind of coding I care about: start from a problem that matters, ship something useful, and keep going until it works.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Live app (PWA)',
        href: 'https://whereabouts-eight.vercel.app',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/ur-ja/whereabouts',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
