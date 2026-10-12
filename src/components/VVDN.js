import React from 'react';
import TextProjectTile from './TextProjectTile';
import { SEGMENT_TILE_VARIANT } from '../data/segments';

export default function VVDN() {
  return (
    <TextProjectTile
      href='/projects/vvdn-hr-survey'
      ariaLabel='Open VVDN HR Survey case study'
      variant={SEGMENT_TILE_VARIANT.experience}
      size='tall'
      dates='March to May 2024'
      title='HR Survey at VVDN'
      description='Full-stack HR survey app built during my internship. Flutter and Django, now in active use by the HR department.'
      footer='Software Engineering Intern · Flutter · Django'
    />
  );
}
