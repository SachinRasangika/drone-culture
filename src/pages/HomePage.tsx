import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroBanner } from '../components/HeroBanner';
import { Portfolio } from '../components/Portfolio';
import { AboutProduct } from '../components/AboutProduct';
import { DroneModels } from '../components/DroneModels';
import { FieldInsights } from '../components/FieldInsights';
import { SmartModules } from '../components/SmartModules';
import { NewRelease } from '../components/NewRelease';
import { Pricing } from '../components/Pricing';
import { Feedback } from '../components/Feedback';
import { Footer } from '../components/Footer';

export function HomePage() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return (
    <div className="w-full min-h-screen">
      <HeroBanner />
      <AboutProduct />
      <Portfolio />
      <DroneModels />
      <FieldInsights />
      <SmartModules />
      <NewRelease />
      <Pricing />
      <Feedback />
      <Footer />
    </div>);

}