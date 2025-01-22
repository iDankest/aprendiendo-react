import React from 'react';
import { createRoot } from 'react-dom/client';
import { TwitterFollowCard } from './TwitterFollowCard';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className="tw-followCard-container">
    <TwitterFollowCard
      name="Kilian Sánchez"
      userName="iDankest_"
    ></TwitterFollowCard>

    <TwitterFollowCard name="NASA" userName="NASA"></TwitterFollowCard>
  </div>,
);
