import type { SegmentId } from './segments';

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
  /** Portfolio nav segments this case study belongs to. */
  segments: SegmentId[];
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
  primaryLink?: {
    href: string;
    label: string;
    caption?: string;
  };
  linksNote?: string;
}

const IMG = '/projects/ai-index';
const VVDN_IMG = '/projects/vvdn';
const DEVSOC_IMG = '/projects/devsoc';
const OSHEPRO_IMG = '/projects/oshepro';
const WHEREABOUTS_IMG = '/projects/whereabouts';
const GEARS_IMG = '/projects/global-gears';
const TDS_URL =
  'https://www.unsw.edu.au/engineering/research-technology/research-centres-institutes/trustworthy-digital-society';
const TDS_AI_INDEX_URL = `${TDS_URL}/projects/ai-index-demonstration`;

export const projects: Project[] = [
  {
    slug: 'ai-index-australia',
    title: 'AI Index for Australia',
    role: 'Research Assistant',
    organisation: 'Trustworthy Digital Society (UNSW × UTS)',
    dates: 'August 2025 to present',
    segments: ['experience'],
    summary:
      "One of two engineers on AI Index Australia, a public dashboard and data platform for AI-related research activity in Australia. I own specific ingestion pipelines, quality linkages, and parts of the config-driven frontend on a shared React, FastAPI, and PostgreSQL stack hosted on ARDC Nectar.",
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
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              "AI Index Australia is a public dashboard and data pipeline for AI-related research and activity in Australia. It is built through Trustworthy Digital Society, a joint UNSW and UTS initiative. The platform integrates eight external datasets and serves interactive visualisations over publications, grants, patents, and talent mobility.",
          },
          {
            type: 'text',
            content:
              "I am one of two engineers on the platform. The work is shared: I own specific pipelines, linkages, and frontend architecture pieces described below. I do not claim sole ownership of every dataset integration or every chart on the site.",
          },
          {
            type: 'text',
            content: `See the [official UNSW project page](${TDS_AI_INDEX_URL}) for a walkthrough of the dashboard.`,
          },
        ],
      },
      {
        title: 'My contributions',
        blocks: [
          {
            type: 'text',
            content:
              "Within the engineering team, my contributions include:",
          },
          {
            type: 'bullets',
            items: [
              'ORCID data ingestion for talent mobility analysis (researcher movement into and out of Australia).',
              'PATSTAT ingestion and DOCDB patent-family methodology for international patent family views.',
              'Linking OpenAlex publications to Scimago journal rankings and CORE conference rankings.',
              'DBLP XML ingestion into a local SQLite FTS5 search index, with title normalisation, token-based matching, and year proximity. Records below the matching threshold stay unranked rather than receiving an unreliable ranking.',
              'A configuration-driven frontend architecture used across 37 charts, so new visualisations can be added through configuration instead of one-off frontend rewrites.',
              'Auth0 SSO with email verification, plus a PostgreSQL-backed user allowlist that gates access to the data pages.',
            ],
          },
          {
            type: 'text',
            content:
              "Conference matching needed the DBLP index because venue names are inconsistent: the same conference appears as an abbreviation, a full name, with or without a year, in forms that never match on simple string comparison. Leaving low-confidence matches unranked was a deliberate choice so quality signals stay trustworthy.",
          },
          {
            type: 'image',
            src: `${IMG}/filter-ui.png`,
            alt: 'Dashboard filter panel showing chapter, section, and topic selectors',
            caption:
              'Config-driven filters: chapter, section, and topic selectors that drive the chart layer.',
          },
          {
            type: 'image',
            src: `${IMG}/sankey-grants.png`,
            alt: 'Sankey diagram linking grant fields to AI publication topics',
            caption:
              'Cross-source linkage between grant fields of research and AI publication outcomes in the CSO taxonomy. Grant-publication linking work owned by a colleague is not claimed here.',
          },
        ],
      },
      {
        title: 'The dashboard',
        blocks: [
          {
            type: 'text',
            content:
              "Researchers and stakeholders can filter by year, topic, and visualisation type, then explore the underlying data. Access uses two layers: Auth0 SSO with email verification, and an email allowlist stored in PostgreSQL. Stakeholder access is provisioned by adding professional emails to that list before sign-up.",
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
              "The stack includes a React and TypeScript frontend, a Python and FastAPI backend, PostgreSQL, ingestion pipelines, and chart visualisations. Everything runs on ARDC Nectar: compute VMs, the database, object storage, and the production site.",
          },
          {
            type: 'text',
            content:
              "Pipeline work uses Python, pandas, SQLAlchemy, and Postgres, with OpenStack Swift for object storage. The web app uses React, TypeScript, Vite, and Tailwind, with Chart.js, Recharts, and D3. Auth0 handles authentication. Deployments go through Docker and GitLab CI. Sources include OpenAlex, ORCID, ARC, Scimago, CORE, IP RAPID, PATSTAT, and DBLP.",
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
        label: 'UNSW project page',
        href: TDS_AI_INDEX_URL,
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
    slug: 'global-gears',
    title: 'Global Gears work order system',
    role: 'Software Engineer (Contract)',
    organisation: 'Global Gears India Pvt. Ltd.',
    dates: '2026, deployed',
    segments: ['experience'],
    summary:
      'Sole engineer on an internal operations system for a ~14-person gear manufacturer. Searchable work orders and attachments, with purchase-order pricing restricted to three authorised people. Deployed in October 2026 with the first work orders onboarded. My current involvement is ad hoc support.',
    tags: ['Full-Stack', 'Security', 'Postgres', 'Next.js', 'TypeScript'],
    tileDescription:
      'Work orders and documents for a gear manufacturer, with access levels so priced files stay with the few people who need them.',
    primaryLink: {
      href: 'https://global-gears-register.vercel.app/',
      label: 'Open live system',
      caption: 'Sign-in is restricted to staff.',
    },
    heroImage: {
      src: `${GEARS_IMG}/work-orders-list.png`,
      alt: 'Global Gears work orders list with search, status filters, and summary cards',
      caption: 'The work orders list. Sensitive fields are redacted in these screenshots.',
    },
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'Global Gears is a gear manufacturer with about fourteen staff in Ghaziabad. Orders, documents, and technical drawings previously lived across a shared inbox and paper files. I was the only engineer from the first conversation through deployment.',
          },
          {
            type: 'text',
            content:
              'I built a searchable work-order system with attachments. Drawings and quality documents are available to the floor. Purchase orders carry pricing and stay restricted to three authorised people. The system was deployed and the first work orders were onboarded in October 2026. I now provide ad hoc support rather than ongoing product development.',
          },
        ],
      },
      {
        title: 'The problem',
        blocks: [
          {
            type: 'text',
            content:
              'Once documents existed, nobody could find them again. Answering a question about an order meant asking whoever had opened the email.',
          },
          {
            type: 'text',
            content:
              'Pricing made a shared folder unsafe. A client purchase order shows what the customer pays. Supplier purchase orders show what the company pays for forging, heat treatment, and related work. Together those numbers reveal the margin on the job. In a small industry, rates that circulate affect later quotes, so priced documents need a small authorised set. Everything else on the job still has to be open to production and quality.',
          },
          {
            type: 'text',
            content:
              'I looked at Google Drive first. Two shared drives would have worked technically, but only if people filed every order correctly forever. A priced document in the open drive looks identical to one that belongs there. The client said they could not enforce that discipline, so the rules had to live in the system rather than in habits.',
          },
        ],
      },
      {
        title: 'Access levels',
        blocks: [
          {
            type: 'text',
            content:
              'Access is three privilege levels, not per-document permissions, so it stays explainable:',
          },
          {
            type: 'bullets',
            items: [
              'Full access (director and procurement): create work orders, change status, open priced documents, manage other people\'s access.',
              'Pricing access (accounts): open priced documents, but cannot create orders or manage access.',
              'Standard access (production and quality): find orders, download drawings, upload documents. Never open a priced document.',
            ],
          },
          {
            type: 'text',
            content:
              'Levels are named for privilege rather than department. In practice three people can open a priced document and eleven cannot. The People screen shows that count because it is the question the director keeps asking.',
          },
          {
            type: 'image',
            src: `${GEARS_IMG}/create-work-order.png`,
            alt: 'Create new work order panel with client, project, PO fields and optional purchase order upload',
            caption:
              'Creating a work order. The number is assigned on save, and documents selected here upload with the order.',
          },
        ],
      },
      {
        title: 'The security model',
        blocks: [
          {
            type: 'text',
            content:
              'Access rules live in the database, not only in the UI, so a frontend bug cannot quietly expose a purchase order.',
          },
          {
            type: 'text',
            content:
              'Purchase-order records sit in a separate table, and files sit in a separate storage bucket. They are not general documents behind a boolean flag. Sharing a table would mean every future query has to remember to exclude them.',
          },
          {
            type: 'text',
            content:
              'The purchase-order bucket has no storage policy on purpose. In Postgres row-level security, a missing allow policy means deny. Browser requests are refused, including from administrators. The only credential that can open the bucket is the server service key, which never reaches the browser.',
          },
          {
            type: 'text',
            content:
              'A purchase order is therefore only served by a server route. The route looks up the record by id, derives the storage path from that database row (never from a client-supplied path), checks the active user record and role, writes an append-only audit entry, then streams the file. If the audit write fails, the request fails closed and no bytes are sent.',
          },
          {
            type: 'text',
            content:
              'Access depends on an active row in the application user table, not merely a successful Google login. Supabase issues a session as soon as Google sign-in succeeds, before application authorisation runs. A valid session only proves someone has a Google account.',
          },
          {
            type: 'text',
            content:
              'The audit log cannot be written from the browser. The server key can insert and select, nothing else, so the log is append-only even to the most privileged credential. Anyone who can open a purchase order can still photograph the screen. The system does not pretend otherwise. What it does provide is traceability: a leak points at one of three named people.',
          },
        ],
      },
      {
        title: 'Testing the model rather than trusting it',
        blocks: [
          {
            type: 'text',
            content:
              'Because the schema does the security work, reading it carefully is not enough. I wrote 100 database security assertions against a local Postgres instance across five identities plus anonymous and service roles: administrator, pricing user, ordinary floor user, removed employee, and a stranger who completed Google sign-in but was never added.',
          },
          {
            type: 'text',
            content:
              'The suite found the most serious bug in the project, which I had introduced myself. Early policies checked whether the caller was signed in. That would have made work orders, documents, and drawings readable by anyone with a Gmail account and the public browser key. Access now derives from membership. Against the old schema the stranger could read data; against the current one they get nothing.',
          },
          {
            type: 'text',
            content:
              'A second issue came from a platform change. Supabase stopped auto-granting table privileges on new projects while the local stack kept the old behaviour. Tests would have passed locally and failed in production. Privileges are now explicit, the anonymous role has none, and the privilege test iterates every table in the schema so new tables are covered automatically.',
          },
        ],
      },
      {
        title: 'Designing for people who won\'t be trained',
        blocks: [
          {
            type: 'text',
            content:
              'Most staff are in their fifties and sixties and are not confident with software. One constraint was that the system could not require a training session.',
          },
          {
            type: 'text',
            content:
              'Five document categories are always visible, with "None yet" under empty ones. Uploads sit inside each category, so filing is determined by which button was pressed. Priced documents use a visually distinct block rather than a confirmation dialog. For standard access that block is not greyed out; it is simply not rendered.',
          },
          {
            type: 'text',
            content:
              'Legibility was treated as a requirement: minimum type size, contrast floor, and touch targets, measured rather than judged by eye. The system also generates the cover sheet that used to be typed by hand and assigns work order numbers itself.',
          },
          {
            type: 'image',
            src: `${GEARS_IMG}/cover-sheet-panel.png`,
            alt: 'Cover sheet side panel with work order fields and Open PDF button',
            caption:
              'The cover sheet panel. Fields that used to be typed by hand are filled from the work order.',
          },
          {
            type: 'image',
            src: `${GEARS_IMG}/cover-sheet-pdf.png`,
            alt: 'Generated Global Gears India cover sheet PDF',
            caption: 'The printed cover sheet PDF the system generates for each order.',
            size: 'medium',
          },
        ],
      },
      {
        title: 'Stack and infrastructure',
        blocks: [
          {
            type: 'text',
            content:
              'Next.js App Router, TypeScript, React, Tailwind, shadcn/ui, Supabase Postgres, Auth, and Storage, SQL migrations, Google OAuth, and Vercel.',
          },
          {
            type: 'text',
            content:
              'Database and serverless functions are pinned to Mumbai so priced files do not leave India in transit. The purchase-order route uses the Node runtime rather than Edge because edge functions cannot be pinned to a region.',
          },
          {
            type: 'text',
            content:
              'A written decision record sits beside the code and records why choices changed, including purchase-order delivery, numbering, and the sign-in model.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Live system',
        href: 'https://global-gears-register.vercel.app/',
      },
    ],
    linksNote: 'The code is private, since it belongs to a real company.',
  },
  {
    slug: 'sdlt-deepfake-framework',
    title: 'Scalable and Privacy-Preserving Deepfake Detection Framework',
    role: 'Honours Thesis Author',
    organisation: 'UNSW Sydney',
    dates: '2024 to 2025',
    segments: ['experience'],
    summary:
      'Honours thesis on privacy-preserving deepfake-related verification using Hyperledger Fabric. In evaluation, the framework reduced blockchain load by 91% and completed 90% of verification operations in under 100 ms. Published by Springer and awarded Best Paper at SDLT 2025.',
    tags: ['Research', 'Blockchain', 'Privacy', 'Python', 'Hyperledger'],
    tileDescription:
      'Honours thesis on scalable, privacy-preserving deepfake detection. Published and awarded Best Paper at SDLT 2025.',
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'This was my Software Engineering Honours thesis at UNSW Sydney, supervised by Dr Hye-Young Paik. The work investigated privacy-preserving verification of deepfake-related content on Hyperledger Fabric, using Redis, xxHash, perceptual hashing, and Idemix zero-knowledge proofs.',
          },
          {
            type: 'text',
            content:
              'Deepfake content spreads quickly, but blockchain-backed detection systems struggle to stay fast without weakening privacy. The research improved an existing deepfake detection framework (DDS) with a two-stage filtering approach and a privacy-preserving voting protocol.',
          },
        ],
      },
      {
        title: 'Results',
        blocks: [
          {
            type: 'text',
            content:
              'These figures are from evaluating the framework under the experimental conditions in the thesis. They are not presented as universal benchmarks.',
          },
          {
            type: 'bullets',
            items: [
              '91% reduction in blockchain load through the two-stage filtration layer.',
              '90% of verification operations completed in under 100 ms via caching and duplicate detection.',
              'Privacy properties demonstrated in evaluation: anonymity, vote unlinkability, and Sybil resistance.',
              'Published by Springer in the SDLT 2025 proceedings (DOI: https://doi.org/10.1007/978-981-95-9230-2_13).',
              'Best Paper award at SDLT 2025, the 9th International Symposium on Distributed Ledger Technology at Deakin University, Melbourne, November 2025.',
              'Honours Class I at UNSW for this work.',
            ],
          },
        ],
      },
      {
        title: 'What I built',
        blocks: [
          {
            type: 'text',
            content:
              'I designed and implemented a two-stage filtration pipeline using xxHash and perceptual hashing (pHash) to catch duplicate and near-duplicate content before it reaches the blockchain. I also extended the IncogniSense protocol with reputation-weighted voting using Idemix zero-knowledge proofs so participants could stay anonymous without discarding result quality.',
          },
          {
            type: 'text',
            content:
              'The prototype used Redis for off-chain caching and Hyperledger Fabric for ledger operations. The main engineering tension was cryptographic privacy versus throughput: zero-knowledge proofs add cost, and perceptual-hash thresholds need careful tuning to catch near-duplicates without too many false positives.',
          },
        ],
      },
      {
        title: 'Stack',
        blocks: [
          {
            type: 'text',
            content:
              'Python, Hyperledger Fabric, Redis, xxHash, perceptual hashing (pHash), and Idemix. Evaluated as an end-to-end prototype covering filtration, privacy-preserving consensus, and blockchain integration.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Springer DOI',
        href: 'https://doi.org/10.1007/978-981-95-9230-2_13',
      },
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
    segments: ['experience'],
    summary:
      'Software Engineer Intern at VVDN Technologies (March to May 2024). Built a Flutter Android and iOS HR survey app with a Django REST and PostgreSQL backend. HR adopted the application after the internship, expanded it, and continues to use it.',
    tags: ['Flutter', 'Django', 'Full-Stack', 'Mobile', 'PostgreSQL'],
    tileDescription:
      'Full-stack HR survey app built during my internship. Flutter and Django, now in active use by the HR department.',
    imageSize: 'phone',
    heroImage: {
      src: `${VVDN_IMG}/design-employee-login.png`,
      alt: 'Employee login screen for VVDN HR Survey app',
      caption: 'Employee login screen with VVDN branding.',
    },
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'I interned at VVDN Technologies on the Cloud & Apps Engineering team from March to May 2024. The brief was to replace an email-based survey workflow with a mobile-first platform where HR could create, distribute, and collect employee surveys.',
          },
          {
            type: 'text',
            content:
              'I built most of the prototype myself, with mentor support through stand-ups, demos, and code review. This was not a throwaway classroom exercise: after the internship, HR adopted the application, expanded it, and continues to use it internally.',
          },
        ],
      },
      {
        title: 'What I built',
        blocks: [
          {
            type: 'text',
            content:
              'Flutter for Android and iOS from a shared codebase, with a Python Django REST Framework backend and PostgreSQL. Features included authentication, admin and employee dashboards, survey scheduling, file uploads, multilingual survey delivery, text-to-speech, and voice input.',
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
              'HR adopted the application after the internship and has continued to expand it for internal use. I do not have public user counts or performance metrics to share. Supervisor feedback noted completing the application from scratch, designing UI ahead of schedule, and delivering on deadlines. My performance evaluation rated Excellent across the criteria used by the team.',
          },
        ],
      },
      {
        title: 'Stack',
        blocks: [
          {
            type: 'text',
            content:
              'Flutter, Django REST Framework, Python, PostgreSQL, REST API design, and GitHub Actions CI/CD. The internship covered requirements, API design, implementation, demo, and handover.',
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
    segments: ['experience'],
    summary:
      'Three years with UNSW DevSoc: frontend contributor on Freerooms and Unilectives, then Director on Bridges. Bridges was leadership and coordination, not hands-on coding. I was not the sole developer of these products.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Leadership'],
    tileDescription:
      'Freerooms, Unilectives, and Director on Bridges. Three years shipping student-facing apps at UNSW.',
    heroImage: {
      src: `${DEVSOC_IMG}/freerooms-landing.png`,
      alt: 'Freerooms landing page',
      caption: 'The Freerooms landing page I redesigned and built, top to bottom.',
    },
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'DevSoc runs student project teams that ship apps used on campus. From March 2023 to November 2025 I progressed from frontend contributor to Director. Most of the work was joining existing codebases and shipping with a team, not building solo.',
          },
        ],
      },
      {
        title: 'Freerooms · March to December 2023 · Frontend contributor',
        blocks: [
          {
            type: 'text',
            content:
              'Freerooms shows which classrooms are free on campus. I redesigned and rebuilt the landing page (hero, features, FAQ, sponsors) and contributed to the Next.js migration and performance work. It was my first production app with pull requests, code review, and a shared design system.',
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
        title: 'Unilectives · March to December 2024 · Frontend contributor',
        blocks: [
          {
            type: 'text',
            content:
              'Unilectives is DevSoc\'s course review platform. I worked on sponsor layouts for Jane Street, TikTok, and Macquarie, contributed analytics so the team could see what students used, and helped ship Unilectives Wrapped. While I was on the team, the platform received more than 10,000 pageviews in one month.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-sponsors.png`,
            alt: 'Unilectives homepage design with sponsor logos in the header area',
            caption: 'Sponsor layout explorations for the Unilectives homepage.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/unilectives-analytics.png`,
            alt: 'Plausible analytics dashboard for Unilectives showing 10k pageviews',
            caption: 'Over 10,000 pageviews in a single month while I was on the team.',
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
        title: 'Bridges · January to November 2025 · Director',
        blocks: [
          {
            type: 'text',
            content:
              'Bridges connects UNSW societies with industry sponsors. I helped take the platform from zero to its first version. My role was leadership and coordination, not hands-on coding.',
          },
          {
            type: 'text',
            content:
              'Before UI work, we spent months on requirements through surveys and interviews with societies and sponsors. As Director I led the team, reviewed work, and unblocked contributors. Version one supported browsing, society login, and onboarding, built by the developers and designers on the team.',
          },
          {
            type: 'image',
            src: `${DEVSOC_IMG}/bridges-browse.png`,
            alt: 'Bridges v1 browse partnerships page',
            caption: 'The v1 browse screen. Design as a shared picture of what the team was building toward.',
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
              'DevSoc is where version control, CI/CD, code review, and sprint planning became normal for me, in service of apps students actually use. Freerooms taught me an existing codebase. Unilectives taught me shipping features into something already scaled. Bridges taught me leading without needing to write every line.',
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
    slug: 'patent-classification',
    title: 'Teaching a small model to classify patents',
    role: 'Research Assistant',
    organisation: 'Trustworthy Digital Society (UNSW × UTS)',
    dates: '2026 to present',
    segments: ['experience'],
    summary:
      'Early-stage collaborative research on teaching a small local model to classify patents and explain its choice. Paper in progress. Not published and not production-ready.',
    tags: ['Research', 'Machine Learning', 'LLMs', 'Python'],
    tileDescription:
      'Early-stage research on local patent classification with explanations. Paper in progress.',
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'This is ongoing early-stage research with a colleague at Trustworthy Digital Society. Patent classification is slow expert work against a large hierarchy of codes. Large models can help, but they are expensive to run at scale, and patent applications often cannot be sent to external APIs.',
          },
          {
            type: 'text',
            content:
              'The idea is a small model that can run locally, assign a code, and give a reason for it, using reasoning from a larger model as a teaching signal. The paper is still in progress. There are no published results yet, and the work is not a production system.',
          },
        ],
      },
      {
        title: 'Status',
        blocks: [
          {
            type: 'text',
            content:
              'More detail will go up when the paper is further along. Until then, treat this as research in progress rather than a finished case study.',
          },
        ],
      },
    ],
    links: [
      {
        label: 'Trustworthy Digital Society',
        href: TDS_URL,
      },
    ],
    linksNote: 'Paper in progress. No public paper or demo yet.',
  },
  {
    slug: 'oshepro',
    title: 'Oshepro EHS Platform',
    role: 'UX Designer',
    organisation: 'Oshepro',
    dates: 'July to December 2023',
    segments: ['experience'],
    summary:
      'UX Designer (July to December 2023), remote with a Phoenix team. Figma, prototypes, and UI documentation for three EHS modules used by non-technical field and safety teams in North America. This was UX design work, not software engineering or frontend implementation.',
    tileDescription:
      'UX redesign across SHEMa, AMLA, and TRACI so safety teams could complete forms without getting stuck.',
    tags: ['UX Design', 'Figma', 'Enterprise', 'Prototyping'],
    sections: [
      {
        title: 'Overview',
        blocks: [
          {
            type: 'text',
            content:
              'July to December 2023. Remote from Sydney with a team based in Phoenix. Oshepro is an EHS platform for safety audits, risk assessments, and compliance reporting. Users are non-technical field and safety teams in North America who need to log hazards and close out tasks, then get back to work.',
          },
          {
            type: 'text',
            content:
              'My role was UX design only: Figma, prototypes, and UI documentation. I reviewed existing product workflows and user reviews. I did not conduct direct user interviews or shadow field teams, and I did not implement frontend code. Incomplete forms in this product create audit and safety risk, so clarity mattered more than visual polish.',
          },
          {
            type: 'text',
            content:
              'I worked on three modules: SHEMa (Safety, Health and Environmental Manager), AMLA (Accident Management and Loss Analysis), and TRACI (Task Risk Assessment, Control and Implementation).',
          },
        ],
      },
      {
        title: 'The problem',
        blocks: [
          {
            type: 'text',
            content:
              'People were fighting the interface. Navigation changed across modules, similar controls behaved differently, and common tasks took too many clicks. User reviews said the product was easy for some users and too complicated for less technical ones. Missed required fields and half-finished records were a data quality problem with real compliance consequences.',
          },
        ],
      },
      {
        title: 'SHEMa',
        blocks: [
          {
            type: 'text',
            content:
              'SHEMa was the module people touched most. I designed two competing flows, including accordion layouts, sticky navigation, colour-coded status, and standardised patterns, then pushed a clearer direction. Single-page layouts in these deliverables were design specifications, not implemented features.',
          },
          {
            type: 'bullets',
            items: [
              'Next and Back behaviour was easy to misread, so people thought they had finished when they had not.',
              'Entered text looked too similar to placeholder text.',
              'After creating a task, return to the task list was unclear.',
              'Small click targets and inconsistent permission visibility on the task list.',
            ],
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
              'AMLA asked for important incident information, but the UI made people work too hard before they could focus on the incident. I simplified it into a more linear, consistent flow with clearer section hierarchy and standardised inputs.',
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
              'TRACI is the most complex module. Hazard screens were dense and nested. I restructured it into clearer task-level sections, cleaned up checklist interactions, and used colour-coded severity so high-risk items stand out during review.',
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
              'In compliance products, design is about helping people enter the right information at the right time. This experience sits beside my engineering work as product thinking and UX ability, not as software implementation experience.',
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
    segments: ['projects'],
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
