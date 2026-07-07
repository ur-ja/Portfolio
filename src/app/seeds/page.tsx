import type { Metadata } from 'next';
import IdeaGarden from '../../components/seeds/IdeaGarden';

export const metadata: Metadata = {
  title: 'Seeds | Urja Arora',
  description: 'A garden of things I want to build. Plant an idea, water what you like.',
};

export default function SeedsPage() {
  return <IdeaGarden />;
}
