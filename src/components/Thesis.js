import React from 'react';
import TextProjectTile from './TextProjectTile';

export default function Thesis() {
  return (
    <TextProjectTile
      href='/projects/sdlt-deepfake-framework'
      ariaLabel='Open SDLT deepfake detection research case study'
      variant='light'
      size='tall'
      dates='November 2025'
      title='Best Paper, SDLT 2025'
      description='Honours thesis on scalable, privacy-preserving deepfake detection. Published and presented at the Symposium on Distributed Ledger Technology.'
      footer='Honours Class I · Springer proceedings'
    />
  );
}
