import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Card from "@/components/utilities/Card";
import Container from "@/components/utilities/Container";
import CustomModal from "@/components/utilities/CustomModal";
import Heading from "@/components/utilities/Heading";
import Pera from "@/components/utilities/Pera";
import Section from "@/components/utilities/Section";
import React, { useState } from "react";

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
   const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Function to open modal
    const openModal = () => setIsModalOpen(true);
  
    // Function to close modal
    const closeModal = () => setIsModalOpen(false);

    const desc = [
      "Meet Manmeet Kaur – Interior Designer | Creating Inspired Spaces with Purpose and Elegance Manmeet Kaur is a visionary interior designer who believes that every space tells a story—and it's her mission to bring that story to life with creativity, clarity, and an impeccable sense of style. With a professional background rooted in both aesthetics and functionality, Manmeet combines artistic vision with practical expertise to design interiors that are beautiful, livable, and deeply personal.",
      "With over 8 years in the industry, Manmeet has worked across a diverse range of projects including luxury residences, commercial spaces, hospitality venues, and bespoke renovations. Her approach is collaborative, thoughtful, and highly detail-oriented. She takes the time to truly understand her clients’ needs, personalities, and aspirations, then translates that insight into designs that reflect individuality while maintaining a cohesive and elegant flow.",
      "What Sets Manmeet Kaur Apart: Tailored Design Philosophy: Manmeet does not believe in one-size-fits-all design. Every project begins with a blank canvas and a deep dive into the client's vision and lifestyle.",
      "Balance of Form and Function: Aesthetics are important, but so is the way a space lives and breathes. Manmeet ensures that her interiors not only look stunning but are also intuitive and practical to use.",
      "Innovative Use of Materials: From natural textures and rich fabrics to sustainable and modern finishes, she curates materials that elevate each design while supporting environmental consciousness.",
      "Meticulous Attention to Detail: Whether it’s custom millwork, lighting design, or spatial flow, Manmeet obsesses over the details that truly define a high-end, professionally curated space. From initial sketches to the final reveal, Manmeet Kaur guides each client through a seamless, stress-free process—ensuring their vision is not only realized but elevated beyond expectation."
    ]
  return (
    <>
      <Hero
        imageSrc="/assets/images/about-us/banner.webp"
        title="About Us"
      />
      <Section className="!pb-0">
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
                    className="text-[var(--text-primary)] text-[22px] lg:text-[26px] 2xl:text-[32px] "
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
      <AboutSection onOpen={openModal}  title="MS. MANMEET KAUR" designation="Principal Designer" className="!before:content-none before:hidden"/>
      {/* <Section>
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
      </Section> */}
      <ContactSection className="!mt-0" />
      {isModalOpen &&
      <CustomModal onClose={closeModal} className="!max-w-[80%] ">
       <div className="max-h-[80vh] overflow-auto ">
        {desc.map(()=>(
        <Pera className="text-justify">{desc}</Pera>
        ))}
     </div>
      </CustomModal>
      }
      
    </>
  );
};

export default about;
