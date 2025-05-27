import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Card from "@/components/utilities/Card";
import Container from "@/components/utilities/Container";
import Heading from "@/components/utilities/Heading";
import Pera from "@/components/utilities/Pera";
import Section from "@/components/utilities/Section";
import React from "react";

const data = [
  {
    title: "Manmeet Kaur",
    desc: "Principal Designer",
    src: "/assets/images/about-us/about-section.webp",
    alt: "Manmeet Kaur",
  },
  {
    title: "Mr. Maninder Singh Bamra",
    desc: "Purchase Head",
    src: "/assets/images/about-us/about-section.webp",
    alt: "Manmeet Kaur",
  },
  {
    title: "Ms. Muskan Sharma",
    desc: "Design & Concept Specialist",
    src: "/assets/images/about-us/about-section.webp",
    alt: "Manmeet Kaur",
  },
  {
    title: "Mr. Akshat Singhal",
    desc: "3D Designer",
    src: "/assets/images/about-us/about-section.webp",
    alt: "Manmeet Kaur",
  },
  {
    title: "Mr. Kunal Panchal",
    desc: "2D Designer",
    src: "/assets/images/about-us/about-section.webp",
    alt: "Manmeet Kaur",
  },
];

const about = () => {
  return (
    <>
      <Hero
        imageSrc="/assets/images/about-us/about-banner.webp"
        title="About Us"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            <div className="md:col-span-6">
              <div>
                <Heading className="uppercase !text-left md:!text-[24px]">
                  About 
                  <span className="inline-block  w-full max-w-[150px] h-[1px] bg-[var(--text-primary)]"></span></Heading>
                <Heading className="uppercase !text-left ms-[70px] md:ms-[100px] mt-[10px] md:mt-[20px]">Liv Interio</Heading>
              </div>
            </div>
            <div className="md:col-span-6">
              <Pera className="!text-justify md:!text-left">
                Founded in 2018, Liv Interio is a boutique interior design
                studio that brings thoughtful design, refined aesthetics, and
                exceptional functionality to residential and commercial spaces.
                With over 8 years of expertise and 50+ completed projects, our
                work is guided by a passion to create environments that speak to
                the soul and serve everyday living with grace and elegance.
              </Pera>
              <div className="flex items-center justify-start gap-[50px] md:gap-[100px] pb-[15px] md:pb-[30px] mt-[30px] md:mt-[40px] border-b border-[var(--text-primary)]">
                {[
                  { title: "8 Years", subtitle: "Experience" },
                  { title: "50+", subtitle: "Projects" },
                ].map((item, index) => (
                  <h4
                    key={index}
                    className="text-[var(--text-primary)] text-[22px] md:text-[32px] "
                  >
                    <span className="block font-[700] font-montserrat">{item.title}</span>
                    <span className="block font-[700] font-montserrat">{item.subtitle}</span>
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <AboutSection title="MS. MANMEET KAUR" designation="Principal Designer" />
      <Section>
        <Container>
          <Heading className="!text-center">Our Expert Team Members</Heading>
          <Pera className="!text-center">
            Behind every stunning design is a team of passionate
          </Pera>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px] mt-[20px] md:mt-[50px]">
            {data.map((item, index) => {
              const isSecondRowFirstItem = index === 3 && data.length === 5;
              return (
                <div
                  key={item?.title}
                  className={`md:col-span-4 ${
                    isSecondRowFirstItem ? "md:col-start-3" : ""
                  }`}
                >
                  <Card
                    data={item}
                    height="h-[300px] md:h-[400px]"
                    center="!text-center"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <ContactSection className="!mt-0" />
    </>
  );
};

export default about;
