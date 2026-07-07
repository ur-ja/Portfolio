import Image from 'next/image';
import BackToHome from '../BackToHome';
import type { Project, SectionBlock } from '../../data/projects';

interface ProjectCaseStudyProps {
  project: Project;
}

type ImageSize = 'full' | 'medium' | 'phone';

const imageSizeClasses: Record<ImageSize, string> = {
  full: 'w-full',
  medium: 'w-full max-w-md mx-auto',
  phone: 'w-full max-w-[240px] mx-auto',
};

function CaseStudyImage({
  src,
  alt,
  caption,
  size = 'full',
}: {
  src: string;
  alt: string;
  caption?: string;
  size?: ImageSize;
}) {
  const dimensions =
    size === 'phone'
      ? { width: 390, height: 844 }
      : size === 'medium'
        ? { width: 800, height: 600 }
        : { width: 1200, height: 750 };

  return (
    <figure className={`my-6 ${size !== 'full' ? 'flex flex-col items-center' : ''}`}>
      <div
        className={`overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white shadow-sm ${imageSizeClasses[size]}`}
      >
        <Image
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
          sizes={
            size === 'phone'
              ? '240px'
              : size === 'medium'
                ? '(max-width: 768px) 90vw, 448px'
                : '(max-width: 768px) 100vw, 720px'
          }
        />
      </div>
      {caption && (
        <figcaption
          className={`mt-2.5 text-sm text-gray-500 leading-relaxed ${size !== 'full' ? 'max-w-md text-center' : ''}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function renderBlock(block: SectionBlock, index: number, defaultImageSize: ImageSize) {
  switch (block.type) {
    case 'text':
      return (
        <p
          key={index}
          className="text-base leading-relaxed text-gray-700 mb-3 last:mb-0"
        >
          {block.content}
        </p>
      );
    case 'bullets':
      return (
        <ul
          key={index}
          className="list-disc list-outside ml-5 space-y-2 text-base text-gray-700 my-4"
        >
          {block.items.map((item) => (
            <li key={item.slice(0, 48)} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <CaseStudyImage
          key={index}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          size={block.size ?? defaultImageSize}
        />
      );
  }
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <BackToHome />

      <header className="mb-8">
        <p className="text-sm text-gray-400 mb-2">{project.dates}</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>
        <p className="text-base text-gray-600 mb-4">
          {project.role} · {project.organisation}
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white ring-1 ring-black/5 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.dashboardUrl && (
          <a
            href={project.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors"
          >
            View live dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        )}
      </header>

      {project.heroImage && (
        <CaseStudyImage
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          caption={project.heroImage.caption}
          size={project.heroImage.size ?? project.imageSize ?? 'full'}
        />
      )}

      <div className="space-y-12 mt-10">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {section.blocks.map((block, i) =>
              renderBlock(block, i, project.imageSize ?? 'full'),
            )}
          </section>
        ))}
      </div>

      {project.links.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-black/5">
          <h2 className="text-sm font-medium text-gray-400 mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
