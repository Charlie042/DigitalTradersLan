import { useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Rewards from './components/Rewards';
import Stats from './components/Stats';
import Differentiators from './components/Differentiators';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <Cursor />
      <Navbar onOpenAuth={() => setIsAuthModalOpen(true)} />
      <main>
        <Hero onOpenAuth={() => setIsAuthModalOpen(true)} />
        <Ticker type="electric" />
        <Ticker type="black" />
        <Problem />
        <Features />
        <HowItWorks />
        <Rewards />
        <Stats />
        <Differentiators />
        <CTA onOpenAuth={() => setIsAuthModalOpen(true)} />
      </main>
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default App;
