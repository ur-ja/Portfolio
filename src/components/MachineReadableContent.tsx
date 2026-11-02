import { profile } from '../data/profile';
import { projects } from '../data/projects';
import type { SectionBlock } from '../data/projects';

function Block({ block }: { block: SectionBlock }) {
  if (block.type === 'text') {
    return <p>{block.content}</p>;
  }
  if (block.type === 'bullets') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={block.src} alt={block.alt} />
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
    </figure>
  );
}

/**
 * Server-rendered copy of every portfolio word for crawlers / AI agents.
 * Visually hidden so the interactive grid stays the human UI; content remains in the HTML.
 */
export default function MachineReadableContent() {
  return (
    <div className='sr-only' data-machine-readable='true'>
      <article>
        <h1>{profile.name}</h1>
        <p>
          <strong>{profile.headline}</strong>
        </p>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <section>
          <h2>Location</h2>
          <p>{profile.location.note}</p>
          <p>
            {profile.location.primary}; also {profile.location.secondary}
          </p>
        </section>

        <section>
          <h2>Contact and links</h2>
          <ul>
            <li>
              Email:{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              Resume:{' '}
              <a href={profile.links.resume}>{profile.links.resume}</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href={profile.links.linkedin}>{profile.links.linkedin}</a>
            </li>
            <li>
              GitHub:{' '}
              <a href={profile.links.github}>{profile.links.github}</a>
            </li>
            <li>
              Projects index:{' '}
              <a href={profile.site.projectsPath}>{profile.site.projectsPath}</a>
            </li>
            <li>
              Seeds: <a href={profile.site.seedsPath}>{profile.site.seedsPath}</a>
            </li>
            <li>
              Full text dump for AI:{' '}
              <a href={profile.site.llmsPath}>{profile.site.llmsPath}</a>
            </li>
            <li>
              Structured JSON:{' '}
              <a href={profile.site.profileJsonPath}>
                {profile.site.profileJsonPath}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>{profile.seeds.title}</h2>
          <p>{profile.seeds.description}</p>
        </section>

        <section>
          <h2>Projects</h2>
          {projects.map((project) => (
            <article key={project.slug} id={`project-${project.slug}`}>
              <h3>
                <a href={`/projects/${project.slug}`}>{project.title}</a>
              </h3>
              <p>
                {project.role} · {project.organisation} · {project.dates}
              </p>
              <p>{project.summary}</p>
              <p>{project.tileDescription}</p>
              <p>Tags: {project.tags.join(', ')}</p>
              {project.sections.map((section) => (
                <section key={`${project.slug}-${section.title}`}>
                  <h4>{section.title}</h4>
                  {section.blocks.map((block, index) => (
                    <Block
                      key={`${project.slug}-${section.title}-${index}`}
                      block={block}
                    />
                  ))}
                </section>
              ))}
              {project.links.length > 0 ? (
                <ul>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </article>
    </div>
  );
}
