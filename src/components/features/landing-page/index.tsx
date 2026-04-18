import AuthModal from '../../ui/AuthModal';
import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import { getApiBase } from '../../../lib/api';
import type { AuthUser } from './Navbar/types';
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
  const [user, setUser] = useState<AuthUser | null>(null);

  const apiBase = getApiBase();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'success' || params.get('auth') === 'error') {
      const next = new URL(window.location.href);
      next.searchParams.delete('auth');
      next.searchParams.delete('reason');
      window.history.replaceState({}, '', next.pathname + next.search);
    }

    void fetch(`${apiBase}/api/auth/me`, { credentials: 'include' })
      .then((r) => r.json())
      .then((data: { user: AuthUser | null }) => {
        setUser(data.user ?? null);
      })
      .catch(() => setUser(null));
  }, [apiBase]);

  const handleSignOut = useCallback(async () => {
    try {
      await fetch(`${apiBase}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      setUser(null);
    }
  }, [apiBase]);

  return (
    <>
      <Navbar
        onOpenAuth={() => setIsAuthModalOpen(true)}
        user={user}
        onSignOut={handleSignOut}
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
