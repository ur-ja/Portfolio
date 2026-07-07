export type SeedStage = 'seed' | 'sprout' | 'flower';

export const SPROUT_THRESHOLD = 3;

export interface Seed {
  id: string;
  title: string;
  gardener: string;
  waters: number;
  bloomed: boolean;
  x: number;
  plantedAt: string;
}

export interface SeedWithStage extends Seed {
  stage: SeedStage;
}
