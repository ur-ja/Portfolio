import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectCaseStudy from '../../../components/projects/ProjectCaseStudy';
import { getProject, projects } from '../../../data/projects';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} | Urja Arora`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
