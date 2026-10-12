import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function Devsoc() {
  return (
    <TextProjectTile
      href='/projects/devsoc'
      ariaLabel='Open DevSoc case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='wide'
      dates='March 2023 to November 2025'
      title='DevSoc'
      description='Freerooms, Unilectives, and Director on Bridges. Three years shipping student-facing apps at UNSW.'
      footer='Frontend Engineer to Director · React · Next.js'
    />
  );
}
