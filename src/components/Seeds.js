import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function Seeds() {
  return (
    <TextProjectTile
      href='/seeds'
      ariaLabel='Open Seeds idea garden'
      variant={SEGMENT_TILE_VARIANT.projects}
      size='square'
      dates='Not a project, just for fun'
      title='Seeds'
      description='A little idea garden on the side. Plant something you want to build, water what catches your eye, and watch the good ones sprout.'
      footer='No case study here, just seeds, water, and the occasional bloom'
    />
  );
}
