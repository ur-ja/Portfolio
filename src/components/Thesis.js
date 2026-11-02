import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function Thesis() {
  return (
    <TextProjectTile
      href='/projects/sdlt-deepfake-framework'
      ariaLabel='Open privacy-preserving deepfake detection case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='tall'
      dates='2024 to 2025'
      title='Privacy-Preserving Deepfake Detection'
      subtitle='Best Paper, SDLT 2025'
      description='Honours thesis on scalable deepfake verification with Hyperledger Fabric. Published by Springer.'
      footer='Honours Class I · Springer proceedings'
    />
  );
}
