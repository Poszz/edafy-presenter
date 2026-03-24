import React, { useState } from 'react';
import { Overview } from './components/Overview';
import { Presentation } from './components/Presentation';
import { Presentation2 } from './components/Presentation2';
import { Presentation3 } from './components/Presentation3';
import { Presentation4 } from './components/Presentation4';

type View = 'overview' | 'platform' | 'asset' | 'plan' | 'basin';

export function App() {
  const [view, setView] = useState<View>('overview');

  if (view === 'platform') {
    return <Presentation onBack={() => setView('overview')} />;
  }

  if (view === 'asset') {
    return <Presentation2 onBack={() => setView('overview')} />;
  }

  if (view === 'plan') {
    return <Presentation3 onBack={() => setView('overview')} />;
  }

  if (view === 'basin') {
    return <Presentation4 onBack={() => setView('overview')} />;
  }

  return <Overview onSelect={(deck) => setView(deck)} />;
}
