import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function GlobalGears() {
  return (
    <TextProjectTile
      href='/projects/global-gears'
      ariaLabel='Open Global Gears work order system case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='wide'
      dates='2026 to present'
      title='Global Gears work order system'
      description='Work orders and documents for a gear manufacturer, with access levels so priced files stay with the few people who need them.'
      footer='Next.js · Postgres · Supabase · Vercel'
    />
  );
}
