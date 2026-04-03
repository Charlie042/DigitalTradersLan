import Cursor from '../../ui/Cursor';
import AuthModal from '../../ui/AuthModal';
import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Ticker from './Ticker';
import Problem from './Problem';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Rewards from './Rewards';
import Stats from './Stats';
import Differentiators from './Differentiators';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
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
