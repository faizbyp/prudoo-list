import { Analytics } from '@vercel/analytics/react';
import Todo from './pages/Todo';
import Router from 'preact-router';
import Landing from './pages/Landing';

export function App() {
  return (
    <main>
      <Router>
        <Landing path='/' />
        <Todo path='/app' />
      </Router>
      
      <Analytics />
    </main>
  )
}
