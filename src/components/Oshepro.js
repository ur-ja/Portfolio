import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function Oshepro() {
  return (
    <TextProjectTile
      href='/projects/oshepro'
      ariaLabel='Open Oshepro UX design case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='tall'
      dates='July to December 2023'
      title='Oshepro EHS Platform'
      description='UX design (not engineering) across SHEMa, AMLA, and TRACI for non-technical safety teams.'
      footer='UX Designer · Figma · Enterprise'
    />
  );
}
