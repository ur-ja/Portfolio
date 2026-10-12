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
          {
            type: 'text',
            content: `See the [official UNSW project page](${TDS_AI_INDEX_URL}) for the AI Index, where my colleague and I walk through the dashboard on video.`,
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
              "Key contributions include linking OpenAlex publications to quality indicators, using Scimago for journal rankings and CORE for conference rankings. Matching conferences to publications required building a DBLP full-text search index, because conference naming has none of the standardisation that journal publishing does: the same venue appears as an abbreviation, a full name, with and without the year, in variants that never match on string comparison. I also developed patent ingestion pipelines from IP RAPID and PATSTAT, implemented AI classification across all data sources, and built talent mobility tracking from ORCID to analyse researcher movement in and out of Australia.",
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
    dates: '2026 to present',
    segments: ['experience'],
    summary:
      'A work order and document system for a gear manufacturer in Ghaziabad. Everyone in the company needs the drawings and specifications for a job, but the purchase orders attached to that same job carry the rates, and those are commercially sensitive. The system had to serve both needs out of one set of documents, which meant building proper access levels rather than a shared folder. I was the only engineer on the project, from the first conversation through to deployment.',
    tags: ['Full-Stack', 'Security', 'Postgres', 'Next.js', 'TypeScript'],
    tileDescription:
      'Work order and document system for a gear manufacturer: access rules in the database, not the UI.',
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
        title: 'The problem',
        blocks: [
          {
            type: 'text',
            content:
              'Global Gears is a gear manufacturer with about fourteen staff. Purchase orders and engineering drawings arrived by email into a single inbox, were printed, and were carried down to the manufacturing floor. The printing was never the problem and still happens.',
          },
          {
            type: 'text',
            content:
              'The first problem was that once documents existed, nobody could find them again. Everything lived in one inbox and on paper, so answering a question about an order meant asking the person who had opened the email.',
          },
          {
            type: 'text',
            content:
              'The second problem was pricing. A client\'s purchase order shows what the customer is paying. The purchase orders the company sends its own suppliers show what it pays for forging, heat treatment and so on. Put the two together and you have the margin on the job, which is close to the most sensitive number the business has. In an industry this size, rates that start circulating affect what the company can quote later, so the number of people who can open a priced document needs to stay as small as the work allows. Everything else, the drawings, the inspection reports, the quality plans, has to be open to the whole floor, because that is what the job runs on.',
          },
        ],
      },
      {
        title: 'Why I didn\'t use an off-the-shelf tool',
        blocks: [
          {
            type: 'text',
            content:
              'I spent a while looking at Google Drive before writing any code, and two shared drives would have worked technically. The problem was that it depends on people filing things correctly. Every new order would require someone to name a folder exactly right and put the purchase order in the restricted drive, and if either went wrong there would be no indication of it. A priced document sitting in the open drive looks exactly like one that belongs there.',
          },
          {
            type: 'text',
            content:
              'Building something custom moves that work from every order at runtime to one time during the build. This mattered because the client had told me plainly that they couldn\'t enforce filing discipline, and the people who would have been responsible for getting it right every time were the two the project was meant to help.',
          },
        ],
      },
      {
        title: 'Access levels',
        blocks: [
          {
            type: 'text',
            content:
              'Access is organised as three levels rather than per-document permissions, which keeps it explainable to the people using it.',
          },
          {
            type: 'text',
            content:
              'Full access covers the director and the person who runs procurement. They can create work orders, change status, open priced documents and manage everyone else\'s access. Pricing access covers accounts, who can open priced documents but cannot create orders or change anyone\'s access. Standard access covers production and quality control, which is most of the company, and allows finding orders, downloading drawings and uploading documents, but never opens a priced document.',
          },
          {
            type: 'text',
            content:
              'The levels are named for privilege rather than department, so someone moving between teams doesn\'t require anybody to reinterpret what their role means. In practice this means three people can open a priced document and eleven cannot, and the People screen shows that count at the top, because it is the question the director keeps asking.',
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
              'The access rules are in the database rather than the interface, so the system behaves correctly even if the application code has a bug in it.',
          },
          {
            type: 'text',
            content:
              'Purchase orders have their own table and their own storage bucket instead of sitting in the general document table behind a flag. If they shared a table, every query written from then on would have to remember to exclude them, and a single forgotten filter would leak one.',
          },
          {
            type: 'text',
            content:
              'The purchase order bucket has no storage policy at all, which is intentional. Postgres row level security denies anything that no policy allows, so every request from a browser is refused, including requests from administrators. The only credential that opens the bucket is the service key, which lives in server environment variables and never reaches the browser.',
          },
          {
            type: 'text',
            content:
              'This means a purchase order can only be served by a server route. The route looks the record up by its id, derives the storage path from that record rather than taking it from the request, checks the caller\'s level through their own session, writes an audit entry, and then streams the file. The audit entry is written before any of the file is sent, and if that write fails the whole request fails.',
          },
          {
            type: 'text',
            content:
              'Access comes from holding an active row in the application\'s user table, not from having a valid session. The distinction matters because Supabase issues a session as soon as Google sign-in succeeds, which happens before any of my code runs. Checking whether someone is signed in therefore only tells you that they have a Google account.',
          },
          {
            type: 'text',
            content:
              'The audit log cannot be written from the browser at all, and the server\'s own key has insert and select permissions but nothing else. The log is append-only even to the most privileged credential in the system, so a compromised or buggy server route could add entries to it but could not alter the ones already there. This matters because the honest control over a priced document is traceability rather than prevention. Anyone who can legitimately open a purchase order can photograph the screen, and the system doesn\'t pretend otherwise, but a leak points at one of three named people rather than being anonymous.',
          },
        ],
      },
      {
        title: 'Testing the model rather than trusting it',
        blocks: [
          {
            type: 'text',
            content:
              'Since the schema is doing the security work, reading through it carefully isn\'t sufficient. I wrote an adversarial test suite that runs against a local Postgres instance and currently holds 100 assertions.',
          },
          {
            type: 'text',
            content:
              'It covers five identities: an administrator, a user with pricing access, an ordinary floor user, an employee whose access has been removed, and a stranger who has completed Google sign-in but was never added to the system. It also tests the public anonymous key and the server\'s own key. Each assertion is a property of the database itself, so it holds regardless of what the application code does.',
          },
          {
            type: 'text',
            content:
              'The suite found the most serious problem in the project, which I had introduced myself. The original policies checked whether the caller was signed in, which would have made every work order, document and drawing readable by anyone with a Gmail address and the public key that ships in the browser bundle by design. Access now derives from membership instead, and the suite demonstrates the difference in both directions: run it against the original schema and the stranger can read work orders, documents and notes, and run it against the current one and they get nothing back.',
          },
          {
            type: 'text',
            content:
              'A second issue came from a change in the platform. Supabase stopped automatically granting table privileges on newly created projects, while the local development stack kept the previous behaviour. The result would have been a system where every test passed locally and every request failed in production. Privileges are now granted explicitly, the anonymous role has none at all, and the relevant test iterates over every table in the schema instead of a list I maintain by hand, so any table added later is covered automatically.',
          },
        ],
      },
      {
        title: 'Designing for people who won\'t be trained',
        blocks: [
          {
            type: 'text',
            content:
              'Most of the staff are in their fifties and sixties and aren\'t confident with software. The director had previously needed help uploading photographs to Google Drive. One of the client\'s constraints was that the system couldn\'t require people to learn new habits, so it had to be usable without a training session.',
          },
          {
            type: 'text',
            content:
              'The five document categories are always visible, with "None yet" shown under the empty ones, which gives every type of document a fixed home. Uploads sit inside each category section instead of behind a dropdown, so the category is determined by which button was pressed and nobody has to make a filing decision.',
          },
          {
            type: 'text',
            content:
              'Priced documents are shown in a visually distinct block instead of behind a confirmation dialog. The person in accounts opens purchase orders often enough that a dialog would become muscle memory within a couple of weeks, whereas a visual difference doesn\'t wear off. For everyone on standard access that block isn\'t greyed out, it simply isn\'t rendered, so they never discover there is something they cannot see.',
          },
          {
            type: 'text',
            content:
              'Legibility was treated as a requirement rather than a finishing touch, with a minimum type size, a contrast floor and a minimum touch target size, all measured rather than judged by eye. The system also generates the cover sheet that was previously typed by hand for every order, and assigns work order numbers itself.',
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
              'Next.js (App Router), TypeScript, Tailwind, Supabase for Postgres, Auth and Storage, Postgres row level security, SQL migrations, Vercel and Google OAuth.',
          },
          {
            type: 'text',
            content:
              'Both the database and the serverless functions are pinned to the Mumbai region, so files showing the company\'s rates don\'t leave India in transit. The purchase order route runs on the Node runtime rather than Edge because edge functions can\'t be pinned to a specific region.',
          },
          {
            type: 'text',
            content:
              'The project keeps a written decision record alongside the code, which captures the reasoning behind each choice and not only the conclusion, and gets updated whenever something changes. A number of decisions were overturned during the build, including how purchase orders are delivered, the numbering scheme and the entire sign-in model, and those reversals are recorded with their reasons as well.',
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
    slug: 'patent-classification',
    title: 'Teaching a small model to classify patents',
    role: 'Research Assistant',
    organisation: 'Trustworthy Digital Society (UNSW × UTS)',
    dates: '2026 to present',
    segments: ['experience'],
    summary:
      'Early-stage research on teaching a small, local model to classify patents and explain its choice, using reasoning from a larger model as the teaching signal. Work with a colleague at Trustworthy Digital Society. Paper in progress.',
    tags: ['Research', 'Machine Learning', 'LLMs', 'Python'],
    tileDescription:
      'Early-stage research on local patent classification with explanations. Paper in progress.',
    sections: [
      {
        title: 'The idea',
        blocks: [
          {
            type: 'text',
            content:
              'Patent classification is slow expert work against a large hierarchy of codes. Large models can help, but they are expensive to run at scale, and patent applications cannot be sent to external APIs. The goal is a small model that can run locally, assign a code, and give a reason for it.',
          },
        ],
      },
      {
        title: 'Status',
        blocks: [
          {
            type: 'text',
            content:
              'This work is still in development. More detail will go up when the paper is further along.',
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
    // TODO: add paper link when published
    linksNote: 'Nothing else yet. Paper in progress.',
  },
  {
    slug: 'sdlt-deepfake-framework',
    title: 'Scalable and Privacy-Preserving Deepfake Detection Framework',
    role: 'Honours Thesis Author',
    organisation: 'UNSW Sydney',
    dates: '2024 to 2025',
    segments: ['experience'],
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
    segments: ['experience'],
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
    segments: ['experience'],
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
    segments: ['experience'],
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
