import AuthModal from '../../ui/AuthModal';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getApiBase } from '../../../lib/api';
import { useAuthUser } from '../../../hooks/useAuthUser';
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
  const { user, signOut } = useAuthUser();
  const apiBase = getApiBase();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'success' || params.get('auth') === 'error') {
      const next = new URL(window.location.href);
      next.searchParams.delete('auth');
      next.searchParams.delete('reason');
      window.history.replaceState({}, '', next.pathname + next.search);
    }
  }, []);

  return (
    <>
      <Navbar
        onOpenAuth={() => setIsAuthModalOpen(true)}
        user={user}
        onSignOut={signOut}
        googleAuthUrl={`${apiBase}/api/auth/google`}
      />
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
