import React from 'react';
import { createRoot } from 'react-dom/client';
import { TwitterFollowCard } from './TwitterFollowCard';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <TwitterFollowCard
      userName="iDankest_"
      name="Kilian Sánchez"
      urlImage="https://pbs.twimg.com/profile_images/1881316873155014656/w5jZap4j_400x400.jpg"
    />
  </React.Fragment>,
);
