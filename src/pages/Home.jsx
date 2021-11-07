import React from 'react';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import FeaturedProjects from '@/components/FeaturedProjects';
// import ScrollUp from '@/components/ScrollUp';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
