import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '@/components/Home/Services'
import Projects from '@/components/Home/Projects'
import AutoLoopMarquee from '@/assets/AutoLoop'


export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Services />
      <section id="projects">
        <Projects />
      </section>
      <AutoLoopMarquee />
    </div>
  );
}
