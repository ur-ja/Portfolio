'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import BackToHome from '../../components/BackToHome';
import { projects, type Project } from '../../data/projects';
import {
  SEGMENT_FILTERS,
  SEGMENT_LABELS,
  type SegmentFilter,
  type SegmentId,
} from '../../data/segments';

/** Reverse-chronological listing order for the projects index. */
const INDEX_ORDER = [
  'global-gears',
  'patent-classification',
  'whereabouts',
  'ai-index-australia',
  'sdlt-deepfake-framework',
  'devsoc',
  'vvdn-hr-survey',
  'oshepro',
];

function sortProjects(list: Project[]): Project[] {
  const rank = new Map(INDEX_ORDER.map((slug, i) => [slug, i]));
  return [...list].sort((a, b) => {
    const ai = rank.get(a.slug) ?? INDEX_ORDER.length;
    const bi = rank.get(b.slug) ?? INDEX_ORDER.length;
    return ai - bi;
  });
}

function SegmentPill({ segment }: { segment: SegmentId }) {
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-900 text-white">
      {SEGMENT_LABELS[segment]}
    </span>
  );
}

export default function ProjectsIndexPage() {
  const [filter, setFilter] = useState<SegmentFilter>('all');

  const listed = useMemo(() => {
    const sorted = sortProjects(projects);
    if (filter === 'all') return sorted;
    return sorted.filter((p) => p.segments.includes(filter));
  }, [filter]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <BackToHome />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h1>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Everything with a case study, reverse chronological.
        </p>

        <div
          className="inline-flex flex-wrap gap-1 bg-gray-200/80 py-1.5 px-2 rounded-full"
          role="tablist"
          aria-label="Filter projects by segment"
        >
          {SEGMENT_FILTERS.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id)}
                className={`text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
                  active
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </header>

      <ul className="space-y-6">
        {listed.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-black/5 hover:ring-black/10 transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-xs sm:text-sm text-gray-400">{project.dates}</p>
                {project.segments.map((segment) => (
                  <SegmentPill key={segment} segment={segment} />
                ))}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {project.tileDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white ring-1 ring-black/5 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {listed.length === 0 && (
        <p className="text-sm text-gray-500">Nothing in this segment yet.</p>
      )}
    </main>
  );
}
