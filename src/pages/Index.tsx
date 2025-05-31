
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import InviteAndEarn from '../components/InviteAndEarn';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import StickyBanner from '../components/StickyBanner';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <InviteAndEarn />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyBanner />
      <CookieBanner />
    </div>
  );
};

export default Index;
