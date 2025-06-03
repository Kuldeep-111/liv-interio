import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import InteriorSection from "@/components/InteriorSection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import DesigningSection from "@/components/DesigningSection";
import ProjectsSection from "@/components/ProjectsSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import JourneySection from "@/components/JourneySection";
import Testimonials from "@/components/Testimonials";
import ClientSection from "@/components/ClientSection";



export default function Home({openModal}) {
  return (
    <>
      <Hero video={true}/>
      {/* <AboutSection/> */}
      <TeamSection/>
      <InteriorSection onOpen={openModal}/>
      <PhilosophySection onOpen={openModal}/>
      <WhatWeDoSection/>
      <DesigningSection/>
      <ProjectsSection/>
      <ChooseUsSection/>
      <JourneySection/>
      <Testimonials/>
      <ClientSection/>
    </>
  );
}
