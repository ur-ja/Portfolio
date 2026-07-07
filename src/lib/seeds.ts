import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import type { Seed, SeedStage, SeedWithStage } from '../types/seeds';
import { SPROUT_THRESHOLD } from '../types/seeds';

export { SPROUT_THRESHOLD };

const DATA_PATH = path.join(process.cwd(), 'data', 'seeds.json');

export function getStage(seed: Seed): SeedStage {
  if (seed.bloomed) return 'flower';
  if (seed.waters >= SPROUT_THRESHOLD) return 'sprout';
  return 'seed';
}

export function withStage(seed: Seed): SeedWithStage {
  return { ...seed, stage: getStage(seed) };
}

async function readStore(): Promise<Seed[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as { seeds: Seed[] };
    return parsed.seeds ?? [];
  } catch {
    return [];
  }
}

async function writeStore(seeds: Seed[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify({ seeds }, null, 2), 'utf-8');
}

export async function listSeeds(): Promise<SeedWithStage[]> {
  const seeds = await readStore();
  return seeds.map(withStage).sort(
    (a, b) => new Date(a.plantedAt).getTime() - new Date(b.plantedAt).getTime(),
  );
}

export async function plantSeed(title: string, gardener?: string): Promise<SeedWithStage> {
  const seeds = await readStore();
  const usedX = seeds.map((s) => s.x);
  let x = 12 + Math.random() * 76;
  for (let i = 0; i < 12; i++) {
    if (!usedX.some((ux) => Math.abs(ux - x) < 8)) break;
    x = 12 + Math.random() * 76;
  }

  const seed: Seed = {
    id: randomUUID(),
    title: title.trim(),
    gardener: gardener?.trim() || 'anonymous gardener',
    waters: 0,
    bloomed: false,
    x: Math.round(x),
    plantedAt: new Date().toISOString(),
  };

  seeds.push(seed);
  await writeStore(seeds);
  return withStage(seed);
}

export async function waterSeed(id: string): Promise<SeedWithStage | null> {
  const seeds = await readStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  seeds[index] = { ...seeds[index], waters: seeds[index].waters + 1 };
  await writeStore(seeds);
  return withStage(seeds[index]);
}

export async function bloomSeed(id: string): Promise<SeedWithStage | null> {
  const seeds = await readStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const seed = seeds[index];
  if (getStage(seed) === 'seed') return null;

  seeds[index] = { ...seed, bloomed: true };
  await writeStore(seeds);
  return withStage(seeds[index]);
}

export async function fertilizeSeed(id: string): Promise<SeedWithStage | null> {
  const seeds = await readStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const seed = seeds[index];
  if (getStage(seed) !== 'seed') return null;

  seeds[index] = {
    ...seed,
    waters: Math.max(seed.waters, SPROUT_THRESHOLD),
  };
  await writeStore(seeds);
  return withStage(seeds[index]);
}

export async function deleteSeed(id: string): Promise<boolean> {
  const seeds = await readStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return false;

  seeds.splice(index, 1);
  await writeStore(seeds);
  return true;
}
