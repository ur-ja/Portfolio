import { profile } from '../data/profile';
import { projects, type Project, type SectionBlock } from '../data/projects';

function siteOrigin(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return '';
}

function absoluteUrl(path: string): string {
  const origin = siteOrigin();
  if (!origin) return path;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

function renderBlock(block: SectionBlock): string {
  if (block.type === 'text') return block.content;
  if (block.type === 'bullets') {
    return block.items.map((item) => `- ${item}`).join('\n');
  }
  const caption = block.caption ? ` Caption: ${block.caption}` : '';
  return `[Image: ${block.alt}${caption}] (${block.src})`;
}

function renderProject(project: Project): string {
  const lines: string[] = [
    `## ${project.title}`,
    `Slug: ${project.slug}`,
    `URL: ${absoluteUrl(`/projects/${project.slug}`)}`,
    `Role: ${project.role}`,
    `Organisation: ${project.organisation}`,
    `Dates: ${project.dates}`,
    `Segments: ${project.segments.join(', ')}`,
    `Tags: ${project.tags.join(', ')}`,
    '',
    project.summary,
    '',
    `Tile: ${project.tileDescription}`,
  ];

  if (project.heroImage) {
    const caption = project.heroImage.caption
      ? ` Caption: ${project.heroImage.caption}`
      : '';
    lines.push(
      `[Hero image: ${project.heroImage.alt}${caption}] (${project.heroImage.src})`
    );
  }

  for (const section of project.sections) {
    lines.push('', `### ${section.title}`, '');
    for (const block of section.blocks) {
      lines.push(renderBlock(block), '');
    }
  }

  if (project.links.length) {
    lines.push('Links:');
    for (const link of project.links) {
      lines.push(`- ${link.label}: ${link.href}`);
    }
  }

  if (project.primaryLink) {
    lines.push(
      `Primary link: ${project.primaryLink.label} — ${project.primaryLink.href}`
    );
    if (project.primaryLink.caption) {
      lines.push(project.primaryLink.caption);
    }
  }

  if (project.dashboardUrl) {
    lines.push(`Dashboard: ${project.dashboardUrl}`);
  }

  if (project.linksNote) {
    lines.push(`Note: ${project.linksNote}`);
  }

  return lines.join('\n').trim();
}

/** Full plain-text dump for AI crawlers (llms.txt). */
export function buildLlmsText(): string {
  const parts: string[] = [
    `# ${profile.name}`,
    '',
    profile.headline,
    '',
    `> This file is a machine-readable export of every word of portfolio content on this site.`,
    `> Structured JSON: ${absoluteUrl(profile.site.profileJsonPath)}`,
    `> Human site: ${absoluteUrl(profile.site.homePath) || '/'}`,
    '',
    '## About',
    '',
    ...profile.about,
    '',
    '## Location',
    '',
    profile.location.note,
    `Primary: ${profile.location.primary}`,
    `Also: ${profile.location.secondary}`,
    '',
    '## Contact & links',
    '',
    `Email: ${profile.email}`,
    `Resume: ${profile.links.resume}`,
    `LinkedIn: ${profile.links.linkedin}`,
    `GitHub: ${profile.links.github}`,
    `Projects index: ${absoluteUrl(profile.site.projectsPath)}`,
    `Seeds: ${absoluteUrl(profile.site.seedsPath)}`,
    '',
    '## Seeds (side project)',
    '',
    profile.seeds.description,
    '',
    '## Projects',
    '',
    'Full case studies follow. Each also has an HTML page under /projects/[slug].',
    '',
  ];

  for (const project of projects) {
    parts.push(renderProject(project), '', '---', '');
  }

  return parts.join('\n').trim() + '\n';
}

/** Structured JSON profile for machines. */
export function buildProfileJson() {
  return {
    name: profile.name,
    shortName: profile.shortName,
    headline: profile.headline,
    about: profile.about,
    location: profile.location,
    email: profile.email,
    links: profile.links,
    paths: {
      home: absoluteUrl(profile.site.homePath) || '/',
      projects: absoluteUrl(profile.site.projectsPath),
      seeds: absoluteUrl(profile.site.seedsPath),
      llmsTxt: absoluteUrl(profile.site.llmsPath),
      profileJson: absoluteUrl(profile.site.profileJsonPath),
    },
    seeds: profile.seeds,
    projects: projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      role: project.role,
      organisation: project.organisation,
      dates: project.dates,
      summary: project.summary,
      segments: project.segments,
      tags: project.tags,
      tileDescription: project.tileDescription,
      url: absoluteUrl(`/projects/${project.slug}`),
      heroImage: project.heroImage ?? null,
      sections: project.sections,
      links: project.links,
      primaryLink: project.primaryLink ?? null,
      dashboardUrl: project.dashboardUrl ?? null,
      linksNote: project.linksNote ?? null,
    })),
  };
}

export function buildPersonJsonLd() {
  const origin = siteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    description: profile.about.join(' '),
    email: profile.email,
    url: origin || undefined,
    jobTitle: profile.headline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsAbout: projects.flatMap((p) => p.tags),
  };
}
