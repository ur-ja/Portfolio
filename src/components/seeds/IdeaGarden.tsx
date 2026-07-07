'use client';

import { useCallback, useEffect, useState } from 'react';
import BackToHome from '../BackToHome';
import { getFlowerEmoji } from '../../lib/flowerEmoji';
import type { SeedStage, SeedWithStage } from '../../types/seeds';
import { SPROUT_THRESHOLD } from '../../types/seeds';

function stageLabel(stage: SeedStage): string {
  if (stage === 'flower') return 'FLOWER';
  if (stage === 'sprout') return 'SPROUT';
  return 'SEED';
}

function stageBadgeClass(stage: SeedStage): string {
  if (stage === 'flower') return 'bg-blue-100 text-blue-700';
  if (stage === 'sprout') return 'bg-green-100 text-green-700';
  return 'bg-gray-100 text-gray-600';
}

function GardenMarker({
  seed,
  onSelect,
}: {
  seed: SeedWithStage;
  onSelect: (seed: SeedWithStage) => void;
}) {
  return (
    <button
      type='button'
      onClick={() => onSelect(seed)}
      className='absolute bottom-[18%] -translate-x-1/2 flex flex-col items-center gap-0.5 group'
      style={{ left: `${seed.x}%` }}
      aria-label={`View idea: ${seed.title}`}
    >
      {seed.stage === 'flower' && (
        <span className='text-xl leading-none group-hover:scale-110 transition-transform'>
          {getFlowerEmoji(seed.id)}
        </span>
      )}
      {seed.stage === 'sprout' && (
        <span className='text-lg leading-none group-hover:scale-110 transition-transform'>🌱</span>
      )}
      {seed.stage === 'seed' && (
        <span className='w-2.5 h-2.5 rounded-full bg-gray-400 group-hover:scale-125 transition-transform' />
      )}
    </button>
  );
}

function SeedModal({
  seed,
  onClose,
  onWater,
  onBloom,
  onFertilize,
  onDelete,
  watering,
  blooming,
  fertilizing,
  deleting,
  canWater,
}: {
  seed: SeedWithStage;
  onClose: () => void;
  onWater: () => void;
  onBloom: (adminKey: string) => void;
  onFertilize: (adminKey: string) => void;
  onDelete: (adminKey: string) => void;
  watering: boolean;
  blooming: boolean;
  fertilizing: boolean;
  deleting: boolean;
  canWater: boolean;
}) {
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState('');

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-[2px]'
      onClick={onClose}
      role='presentation'
    >
      <div
        className='bg-white rounded-3xl shadow-xl ring-1 ring-black/5 w-full max-w-sm p-6 relative'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='seed-modal-title'
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl leading-none'
          aria-label='Close'
        >
          ×
        </button>

        <span
          className={`inline-block text-[10px] font-semibold tracking-widest px-2.5 py-1 rounded-full mb-4 ${stageBadgeClass(seed.stage)}`}
        >
          {seed.stage === 'flower' ? (
            <span className='inline-flex items-center gap-1.5'>
              <span aria-hidden='true'>{getFlowerEmoji(seed.id)}</span>
              {stageLabel(seed.stage)}
            </span>
          ) : (
            stageLabel(seed.stage)
          )}
        </span>

        <h2 id='seed-modal-title' className='text-xl font-bold mb-1 pr-6 lowercase'>
          {seed.title}
        </h2>
        <p className='text-sm text-gray-500 mb-6'>
          planted by <span className='text-gray-700'>{seed.gardener}</span>
        </p>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onWater}
            disabled={!canWater || watering}
            className='inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
          >
            <span aria-hidden='true'>♥</span>
            water
          </button>
          <span className='text-sm text-gray-500'>
            {seed.waters} {seed.waters === 1 ? 'drop' : 'drops'}
          </span>
        </div>

        {!canWater && (
          <p className='text-xs text-gray-400 mt-3'>You already watered this one today.</p>
        )}

        {seed.stage === 'seed' && (
          <p className='text-xs text-gray-400 mt-4 leading-relaxed'>
            {SPROUT_THRESHOLD}+ drops and it sprouts.
          </p>
        )}
        {seed.stage === 'sprout' && (
          <p className='text-xs text-gray-400 mt-4 leading-relaxed'>
            Sprouts bloom when I actually ship the idea. That part is manual on my end.
          </p>
        )}
        {seed.stage === 'flower' && (
          <p className='text-xs text-gray-400 mt-4 leading-relaxed'>
            This one made it out of the garden.
          </p>
        )}

        <div className='mt-4 pt-4 border-t border-gray-100'>
          {!showAdmin ? (
            <button
              type='button'
              onClick={() => setShowAdmin(true)}
              className='text-xs text-gray-400 hover:text-gray-600'
            >
              Gardener tools
            </button>
          ) : (
            <div className='flex flex-col gap-2'>
              <input
                type='password'
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder='admin key'
                className='px-3 py-2 rounded-xl bg-gray-50 ring-1 ring-black/5 text-xs focus:outline-none focus:ring-2 focus:ring-gray-300'
              />
              {seed.stage === 'seed' && (
                <button
                  type='button'
                  onClick={() => onFertilize(adminKey)}
                  disabled={fertilizing || !adminKey.trim()}
                  className='text-xs font-medium text-green-700 hover:text-green-900 disabled:opacity-40 text-left'
                >
                  {fertilizing ? 'Fertilizing…' : 'Add fertilizer (sprout now)'}
                </button>
              )}
              {seed.stage === 'sprout' && (
                <button
                  type='button'
                  onClick={() => onBloom(adminKey)}
                  disabled={blooming || !adminKey.trim()}
                  className='text-xs font-medium text-blue-600 hover:text-blue-800 disabled:opacity-40 text-left'
                >
                  {blooming ? 'Blooming…' : 'Mark as flower'}
                </button>
              )}
              <button
                type='button'
                onClick={() => onDelete(adminKey)}
                disabled={deleting || !adminKey.trim()}
                className='text-xs font-medium text-red-600 hover:text-red-800 disabled:opacity-40 text-left'
              >
                {deleting ? 'Deleting…' : 'Delete seed'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function waterKey(seedId: string): string {
  const today = new Date().toISOString().slice(0, 10);
  return `seeds-watered-${seedId}-${today}`;
}

export default function IdeaGarden() {
  const [seeds, setSeeds] = useState<SeedWithStage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SeedWithStage | null>(null);
  const [watering, setWatering] = useState(false);
  const [blooming, setBlooming] = useState(false);
  const [fertilizing, setFertilizing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [planting, setPlanting] = useState(false);
  const [idea, setIdea] = useState('');
  const [gardener, setGardener] = useState('');
  const [error, setError] = useState('');

  const fetchSeeds = useCallback(async () => {
    const res = await fetch('/api/seeds');
    const data = await res.json();
    setSeeds(data.seeds ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  const canWater = (seedId: string) => {
    if (typeof window === 'undefined') return true;
    return !localStorage.getItem(waterKey(seedId));
  };

  const handleWater = async () => {
    if (!selected || !canWater(selected.id)) return;
    setWatering(true);
    setError('');

    try {
      const res = await fetch(`/api/seeds/${selected.id}/water`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to water');

      localStorage.setItem(waterKey(selected.id), '1');
      setSelected(data.seed);
      setSeeds((prev) => prev.map((s) => (s.id === data.seed.id ? data.seed : s)));
    } catch {
      setError('Could not water this seed. Try again.');
    } finally {
      setWatering(false);
    }
  };

  const handleBloom = async (adminKey: string) => {
    if (!selected) return;
    setBlooming(true);
    setError('');

    try {
      const res = await fetch(`/api/seeds/${selected.id}/bloom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to bloom');

      setSelected(data.seed);
      setSeeds((prev) => prev.map((s) => (s.id === data.seed.id ? data.seed : s)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not bloom seed.');
    } finally {
      setBlooming(false);
    }
  };

  const handleFertilize = async (adminKey: string) => {
    if (!selected) return;
    setFertilizing(true);
    setError('');

    try {
      const res = await fetch(`/api/seeds/${selected.id}/fertilize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fertilize');

      setSelected(data.seed);
      setSeeds((prev) => prev.map((s) => (s.id === data.seed.id ? data.seed : s)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not fertilize seed.');
    } finally {
      setFertilizing(false);
    }
  };

  const handleDelete = async (adminKey: string) => {
    if (!selected) return;
    if (!window.confirm('Delete this seed from the garden?')) return;

    setDeleting(true);
    setError('');

    try {
      const res = await fetch(`/api/seeds/${selected.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete');

      setSeeds((prev) => prev.filter((s) => s.id !== selected.id));
      setSelected(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete seed.');
    } finally {
      setDeleting(false);
    }
  };

  const handlePlant = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlanting(true);
    setError('');

    try {
      const res = await fetch('/api/seeds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: idea, gardener }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to plant');

      setSeeds((prev) => [...prev, data.seed]);
      setIdea('');
      setGardener('');
      setSelected(data.seed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not plant seed.');
    } finally {
      setPlanting(false);
    }
  };

  return (
    <div className='max-w-2xl mx-auto px-6 py-10'>
      <BackToHome />

      <section className='mb-8'>
        <p className='text-xs tracking-widest text-gray-400 mb-3'>SEEDS</p>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 leading-tight'>
          A garden of things I want to build.
        </h1>
        <p className='text-gray-500 leading-relaxed'>
          Plant an idea. Water the ones you want to see grow. At {SPROUT_THRESHOLD}+ drops a
          seed sprouts. If I actually build it, I mark it as a flower.
        </p>
      </section>

      <section
        className='relative bg-gradient-to-b from-white to-[#f5f0e8] rounded-3xl ring-1 ring-black/5 shadow-sm overflow-hidden mb-4'
        style={{ minHeight: '220px' }}
      >
        <div className='absolute inset-x-0 bottom-0 h-[22%] bg-[#d4c4a8] border-t border-dashed border-[#b8a88c]' />

        {loading && (
          <p className='absolute inset-0 flex items-center justify-center text-sm text-gray-400'>
            Loading garden…
          </p>
        )}

        {!loading && seeds.length === 0 && (
          <p className='absolute inset-x-0 top-1/3 text-center text-sm text-gray-400 px-6'>
            No seeds yet. Plant the first idea below.
          </p>
        )}

        {seeds.map((seed) => (
          <GardenMarker key={seed.id} seed={seed} onSelect={setSelected} />
        ))}
      </section>

      <div className='flex flex-wrap gap-4 text-xs text-gray-500 mb-10'>
        <span className='flex items-center gap-1.5'>
          <span className='w-2 h-2 rounded-full bg-gray-400' />
          Seed — raw idea
        </span>
        <span className='flex items-center gap-1.5'>
          <span className='w-2 h-2 rounded-full bg-green-500' />
          Sprout — gaining traction ({SPROUT_THRESHOLD}+ drops)
        </span>
        <span className='flex items-center gap-1.5'>
          <span className='w-2 h-2 rounded-full bg-blue-500' />
          Flower — I shipped it (manual)
        </span>
      </div>

      <section className='bg-white rounded-3xl ring-1 ring-black/5 shadow-sm p-6 sm:p-8'>
        <h2 className='text-lg font-bold mb-1'>Plant a seed</h2>
        <p className='text-sm text-gray-500 mb-5'>
          Drop an idea into the garden. Your name shows up as the gardener who planted it.
        </p>

        <form onSubmit={handlePlant} className='flex flex-col sm:flex-row gap-3'>
          <input
            type='text'
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder='an app that…'
            maxLength={120}
            className='flex-1 px-4 py-3 rounded-2xl bg-gray-50 ring-1 ring-black/5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300'
          />
          <input
            type='text'
            value={gardener}
            onChange={(e) => setGardener(e.target.value)}
            placeholder='your name (optional)'
            maxLength={40}
            className='sm:w-44 px-4 py-3 rounded-2xl bg-gray-50 ring-1 ring-black/5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300'
          />
          <button
            type='submit'
            disabled={planting || idea.trim().length < 3}
            className='px-6 py-3 bg-[#c4b5fd] text-white text-sm font-semibold rounded-2xl hover:bg-[#a78bfa] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
          >
            {planting ? 'Planting…' : 'Plant'}
          </button>
        </form>

        {error && <p className='text-sm text-red-500 mt-3'>{error}</p>}
      </section>

      {selected && (
        <SeedModal
          seed={selected}
          onClose={() => setSelected(null)}
          onWater={handleWater}
          onBloom={handleBloom}
          onFertilize={handleFertilize}
          onDelete={handleDelete}
          watering={watering}
          blooming={blooming}
          fertilizing={fertilizing}
          deleting={deleting}
          canWater={canWater(selected.id)}
        />
      )}
    </div>
  );
}
