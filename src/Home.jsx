import Hero from './components/Hero'
import { AboutSection, CommitteesGrid, ProjectsPreview, ExchangesCTA, TeamPreview, CTASection } from './components/Sections'

export default function Home(){
  return (
    <>
      <Hero/>
      <AboutSection/>
      <CommitteesGrid/>
      <ProjectsPreview/>
      <ExchangesCTA/>
      <TeamPreview/>
      <div className="px-4 sm:px-6 lg:px-8">
        <CTASection/>
      </div>
    </>
  )
}
