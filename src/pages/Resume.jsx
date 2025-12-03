import EducationCard from '@/components/Resume/Education'
import ExperienceSection from '@/components/Resume/Experience'
import ExperienceStack from '@/components/Resume/ExpStack'
import TechnicalSkills from '@/components/Resume/TechSkills'
import TargetCursor from '@/components/TargetCursor'
import React from 'react'

function Resume() {
  return (
    <div className="w-full min-h-screen">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <ExperienceSection />
      <ExperienceStack />
      <EducationCard />
      <TechnicalSkills />
    </div>
  );
}

export default Resume