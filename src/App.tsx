import React, { useState } from 'react';
import { Overview } from './components/Overview';
import { Presentation } from './components/Presentation';
import { Presentation2 } from './components/Presentation2';

type View = 'overview' | 'platform' | 'asset';

export function App() {
  const [view, setView] = useState<View>('overview');

  if (view === 'platform') {
    return <Presentation onBack={() => setView('overview')} />;
  }

  if (view === 'asset') {
    return <Presentation2 onBack={() => setView('overview')} />;
  }

  return <Overview onSelect={(deck) => setView(deck)} />;
}
