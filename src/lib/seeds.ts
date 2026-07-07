import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import type { Seed, SeedStage, SeedWithStage } from '../types/seeds';
import { SPROUT_THRESHOLD } from '../types/seeds';
import { createSupabaseAdmin, isSupabaseConfigured } from './supabase';

export { SPROUT_THRESHOLD };

const DATA_PATH = path.join(process.cwd(), 'data', 'seeds.json');

type SeedRow = {
  id: string;
  title: string;
  gardener: string;
  waters: number;
  bloomed: boolean;
  x: number;
  planted_at: string;
};

export function getStage(seed: Seed): SeedStage {
  if (seed.bloomed) return 'flower';
  if (seed.waters >= SPROUT_THRESHOLD) return 'sprout';
  return 'seed';
}

export function withStage(seed: Seed): SeedWithStage {
  return { ...seed, stage: getStage(seed) };
}

function rowToSeed(row: SeedRow): Seed {
  return {
    id: row.id,
    title: row.title,
    gardener: row.gardener,
    waters: row.waters,
    bloomed: row.bloomed,
    x: row.x,
    plantedAt: row.planted_at,
  };
}

function sortSeeds(seeds: Seed[]): SeedWithStage[] {
  return seeds
    .map(withStage)
    .sort((a, b) => new Date(a.plantedAt).getTime() - new Date(b.plantedAt).getTime());
}

function pickGardenX(usedX: number[]): number {
  let x = 12 + Math.random() * 76;
  for (let i = 0; i < 12; i += 1) {
    if (!usedX.some((ux) => Math.abs(ux - x) < 8)) break;
    x = 12 + Math.random() * 76;
  }
  return Math.round(x);
}

async function readFileStore(): Promise<Seed[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as { seeds: Seed[] };
    return parsed.seeds ?? [];
  } catch {
    return [];
  }
}

async function writeFileStore(seeds: Seed[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify({ seeds }, null, 2), 'utf-8');
}

async function listFileSeeds(): Promise<SeedWithStage[]> {
  return sortSeeds(await readFileStore());
}

async function listSupabaseSeeds(): Promise<SeedWithStage[]> {
  const supabase = createSupabaseAdmin();
  const { data, error } = await supabase
    .from('seeds')
    .select('id, title, gardener, waters, bloomed, x, planted_at')
    .order('planted_at', { ascending: true });

  if (error) throw error;
  return sortSeeds((data as SeedRow[]).map(rowToSeed));
}

export async function listSeeds(): Promise<SeedWithStage[]> {
  if (isSupabaseConfigured()) return listSupabaseSeeds();
  return listFileSeeds();
}

export async function plantSeed(title: string, gardener?: string): Promise<SeedWithStage> {
  const trimmedTitle = title.trim();
  const trimmedGardener = gardener?.trim() || 'anonymous gardener';

  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data: existing, error: listError } = await supabase.from('seeds').select('x');
    if (listError) throw listError;

    const usedX = (existing ?? []).map((row: { x: number }) => row.x);
    const seed: Seed = {
      id: randomUUID(),
      title: trimmedTitle,
      gardener: trimmedGardener,
      waters: 0,
      bloomed: false,
      x: pickGardenX(usedX),
      plantedAt: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('seeds')
      .insert({
        id: seed.id,
        title: seed.title,
        gardener: seed.gardener,
        waters: seed.waters,
        bloomed: seed.bloomed,
        x: seed.x,
        planted_at: seed.plantedAt,
      })
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .single();

    if (error) throw error;
    return withStage(rowToSeed(data as SeedRow));
  }

  const seeds = await readFileStore();
  const seed: Seed = {
    id: randomUUID(),
    title: trimmedTitle,
    gardener: trimmedGardener,
    waters: 0,
    bloomed: false,
    x: pickGardenX(seeds.map((s) => s.x)),
    plantedAt: new Date().toISOString(),
  };

  seeds.push(seed);
  await writeFileStore(seeds);
  return withStage(seed);
}

export async function waterSeed(id: string): Promise<SeedWithStage | null> {
  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data: current, error: fetchError } = await supabase
      .from('seeds')
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .eq('id', id)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (!current) return null;

    const { data, error } = await supabase
      .from('seeds')
      .update({ waters: (current as SeedRow).waters + 1 })
      .eq('id', id)
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .single();

    if (error) throw error;
    return withStage(rowToSeed(data as SeedRow));
  }

  const seeds = await readFileStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  seeds[index] = { ...seeds[index], waters: seeds[index].waters + 1 };
  await writeFileStore(seeds);
  return withStage(seeds[index]);
}

export async function bloomSeed(id: string): Promise<SeedWithStage | null> {
  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data: current, error: fetchError } = await supabase
      .from('seeds')
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .eq('id', id)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (!current) return null;
    if (getStage(rowToSeed(current as SeedRow)) === 'seed') return null;

    const { data, error } = await supabase
      .from('seeds')
      .update({ bloomed: true })
      .eq('id', id)
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .single();

    if (error) throw error;
    return withStage(rowToSeed(data as SeedRow));
  }

  const seeds = await readFileStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const seed = seeds[index];
  if (getStage(seed) === 'seed') return null;

  seeds[index] = { ...seed, bloomed: true };
  await writeFileStore(seeds);
  return withStage(seeds[index]);
}

export async function fertilizeSeed(id: string): Promise<SeedWithStage | null> {
  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data: current, error: fetchError } = await supabase
      .from('seeds')
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .eq('id', id)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (!current) return null;

    const seed = rowToSeed(current as SeedRow);
    if (getStage(seed) !== 'seed') return null;

    const { data, error } = await supabase
      .from('seeds')
      .update({ waters: Math.max(seed.waters, SPROUT_THRESHOLD) })
      .eq('id', id)
      .select('id, title, gardener, waters, bloomed, x, planted_at')
      .single();

    if (error) throw error;
    return withStage(rowToSeed(data as SeedRow));
  }

  const seeds = await readFileStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const seed = seeds[index];
  if (getStage(seed) !== 'seed') return null;

  seeds[index] = {
    ...seed,
    waters: Math.max(seed.waters, SPROUT_THRESHOLD),
  };
  await writeFileStore(seeds);
  return withStage(seeds[index]);
}

export async function deleteSeed(id: string): Promise<boolean> {
  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase.from('seeds').delete().eq('id', id).select('id');
    if (error) throw error;
    return (data?.length ?? 0) > 0;
  }

  const seeds = await readFileStore();
  const index = seeds.findIndex((s) => s.id === id);
  if (index === -1) return false;

  seeds.splice(index, 1);
  await writeFileStore(seeds);
  return true;
}
