import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { Portfolio } from '../components/Portfolio';
import { AboutProduct } from '../components/AboutProduct';
import { DroneModels } from '../components/DroneModels';
import { FieldInsights } from '../components/FieldInsights';
import { SmartModules } from '../components/SmartModules';
import { NewRelease } from '../components/NewRelease';
import { Feedback } from '../components/Feedback';
import { Footer } from '../components/Footer';
export function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroBanner />
      <AboutProduct />
      <Portfolio />
      <DroneModels />
      <FieldInsights />
      <SmartModules />
      <NewRelease />
      <Feedback />
      <Footer />
    </div>);

}