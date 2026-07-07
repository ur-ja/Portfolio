import React from 'react';
import ProjectTile from './ProjectTile';

export default function Whereabouts() {
  return (
    <ProjectTile
      href='/projects/whereabouts'
      ariaLabel='Open Whereabouts case study'
      variant='blue'
      layout='tall'
      compact
      dates='2026'
      title='Whereabouts'
      description='Daily journal for India vs Australia.'
      image='/projects/whereabouts/log-lean-slider.png'
      imageAlt='Whereabouts daily log screen'
    />
  );
}
