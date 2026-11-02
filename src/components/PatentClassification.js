import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function PatentClassification() {
  return (
    <TextProjectTile
      href='/projects/patent-classification'
      ariaLabel='Open patent classification research case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='wide'
      dates='2026 to present'
      title='Teaching a small model to classify patents'
      description='Early-stage collaborative research. Paper in progress, not published yet.'
      footer='Research · LLMs · Python'
    />
  );
}
