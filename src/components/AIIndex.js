import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function AIIndex() {
  return (
    <TextProjectTile
      href='/projects/ai-index-australia'
      ariaLabel='Open AI Index for Australia case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='wide'
      dates='August 2025 to present'
      title='AI Index for Australia'
      description='Data pipelines and interactive dashboard for AI Index Australia at Trustworthy Digital Society.'
      footer='Python · React · Postgres · ARDC Nectar'
    />
  );
}
