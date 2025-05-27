
import React, { useState, useEffect, useRef } from 'react';
import Hero from "@/components/Hero";
import Container from "@/components/utilities/Container";
import Heading from "@/components/utilities/Heading";
import Pera from "@/components/utilities/Pera";
import Section from "@/components/utilities/Section";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Image from "next/image";
import { useRouter } from 'next/router';


const data = {
    consultancy:{
    title:"Consultancy",
    subTitle:"What Makes Liv Interio Special",
    pera1:"Welcome to Livinterio.com, the premier online destination for stylish, high-quality furniture and home décor. We offer an ever-evolving selection of modern, contemporary and transitional pieces for every room in the home. Our goal is to make it easy for customers to find the perfect piece for their home, no matter their budget.",
    pera2:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognize that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Consultancy",
    list : [
  {
    title: "Step-by-Step Design Service",
    desc: ["First, Liv Interio meets with clients to learn about their vision, likes, dislikes, and needs. They work on various spaces - apartments, villas, offices, etc. The designers listen closely so they can consider every detail before starting the design work."]
  },
  {
    title: "Creative Design Ideas",
    desc: ["Liv Interio is known for coming up with innovative interior design concepts that make spaces feel alive. They mix creativity with function, offering many styles from modern minimalist to classic ornate. Each design matches the client's taste and takes full advantage of the available area."]
  },
  {
    title: "Designs for Every Budget",
    desc: ["An important part of Liv Interio's service is providing personalized design solutions for all budgets. They work with clients to find cost-effective options without sacrificing aesthetics or quality. They believe well-designed spaces should be accessible to everyone."]
  },
  {
    title: "Focus on Details",
    desc: ["A big reason for Liv Interio's success is their sharp attention to detail. They carefully choose elements like colors, furnishings etc to create a cohesive look. Liv Interio believes it's the small finishing touches that take a space from ordinary to extraordinary."]
  },
  {
    title: "Client-Focused Process",
    desc: ["Liv Interio structures the design process around client collaboration. There is clear communication and regular check-ins to allow real-time adjustments. This transparency builds trust and leads to spaces that truly resonate with the client."]
  },
  {
    title: "Expertise Across Project Types",
    desc: ["From modern kitchens to cozy bedrooms and professional offices - Liv Interio can do it all. Their ability to work in vastly different styles shows their versatility as designers."]
  },
  {
    title: "Quality and Durability",
    desc: ["Liv Interio only uses top-quality materials and skilled craftsmen so the designs last for years. Attractive, durable spaces are central to their service commitment."]
  },
  {
    title: "Ongoing Support",
    desc: [
      "Liv Interio's service commitment extends well beyond project completion through its comprehensive aftercare support, providing clients with personalized maintenance guidance, design tweaks, and prompt troubleshooting long after the final reveal. ",
      "This steadfast dedication to each client fosters trusted relationships that guarantee enduring spaces and lasting satisfaction."
      ]
  },
  {
    title: "Happy Customers",
    desc: [
      "Liv Interio earns high acclaim for its unparalleled creativity, consummate professionalism, and unique mastery in translating abstract visions into tangible, bespoke spaces that exceed expectations.",
      "Their portfolio boasts countless glowing testimonials from delighted clients, affirming the company's stellar reputation for service excellence and commitment to every project."
    ]
  },
  {
    title: "Conclusion",
    desc: [
      "With an unrivaled fusion of avant-garde design originality, minimalist elegance, and unwavering customer focus, Liv Interio has emerged as Noida's premier interior design consultant. ",
      "Their robust yet versatile expertise empowers them to conceive fully customized, world-class spaces for residential and commercial settings alike that strike the perfect equilibrium between visually stunning aesthetics and practical, everyday functionality. ",
      "Through their savvy balancing act of form and function, Liv Interio can actualize any client's most ambitious interior visions while enhancing livability."
    ]
  }
    ]    },
    "turnkey-solution":{
    title:"Turnkey Solution",
    subTitle:"What Makes Liv Interio Special",
    pera1:"Welcome to Livinterio.com, the premier online destination for stylish, high-quality furniture and home décor. We offer an ever-evolving selection of modern, contemporary and transitional pieces for every room in the home. Our goal is to make it easy for customers to find the perfect piece for their home, no matter their budget.",
    pera2:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognize that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Turnkey Solution",
    list : [
  {
    title: "Step-by-Step Design Service",
    desc: ["First, Liv Interio meets with clients to learn about their vision, likes, dislikes, and needs. They work on various spaces - apartments, villas, offices, etc. The designers listen closely so they can consider every detail before starting the design work."]
  },
  {
    title: "Creative Design Ideas",
    desc: ["Liv Interio is known for coming up with innovative interior design concepts that make spaces feel alive. They mix creativity with function, offering many styles from modern minimalist to classic ornate. Each design matches the client's taste and takes full advantage of the available area."]
  },
  {
    title: "Designs for Every Budget",
    desc: ["An important part of Liv Interio's service is providing personalized design solutions for all budgets. They work with clients to find cost-effective options without sacrificing aesthetics or quality. They believe well-designed spaces should be accessible to everyone."]
  },
  {
    title: "Focus on Details",
    desc: ["A big reason for Liv Interio's success is their sharp attention to detail. They carefully choose elements like colors, furnishings etc to create a cohesive look. Liv Interio believes it's the small finishing touches that take a space from ordinary to extraordinary."]
  },
  {
    title: "Client-Focused Process",
    desc: ["Liv Interio structures the design process around client collaboration. There is clear communication and regular check-ins to allow real-time adjustments. This transparency builds trust and leads to spaces that truly resonate with the client."]
  },
  {
    title: "Expertise Across Project Types",
    desc: ["From modern kitchens to cozy bedrooms and professional offices - Liv Interio can do it all. Their ability to work in vastly different styles shows their versatility as designers."]
  },
  {
    title: "Quality and Durability",
    desc: ["Liv Interio only uses top-quality materials and skilled craftsmen so the designs last for years. Attractive, durable spaces are central to their service commitment."]
  },
  {
    title: "Ongoing Support",
    desc: [
      "Liv Interio's service commitment extends well beyond project completion through its comprehensive aftercare support, providing clients with personalized maintenance guidance, design tweaks, and prompt troubleshooting long after the final reveal. ",
      "This steadfast dedication to each client fosters trusted relationships that guarantee enduring spaces and lasting satisfaction."
      ]
  },
  {
    title: "Happy Customers",
    desc: [
      "Liv Interio earns high acclaim for its unparalleled creativity, consummate professionalism, and unique mastery in translating abstract visions into tangible, bespoke spaces that exceed expectations.",
      "Their portfolio boasts countless glowing testimonials from delighted clients, affirming the company's stellar reputation for service excellence and commitment to every project."
    ]
  },
  {
    title: "Conclusion",
    desc: [
      "With an unrivaled fusion of avant-garde design originality, minimalist elegance, and unwavering customer focus, Liv Interio has emerged as Noida's premier interior design consultant. ",
      "Their robust yet versatile expertise empowers them to conceive fully customized, world-class spaces for residential and commercial settings alike that strike the perfect equilibrium between visually stunning aesthetics and practical, everyday functionality. ",
      "Through their savvy balancing act of form and function, Liv Interio can actualize any client's most ambitious interior visions while enhancing livability."
    ]
  }
    ]    },
    "residential-design":{
     title: "Residential Design",
    subTitle:"What Makes Liv Interio Special",
    pera1:"Welcome to Livinterio.com, the premier online destination for stylish, high-quality furniture and home décor. We offer an ever-evolving selection of modern, contemporary and transitional pieces for every room in the home. Our goal is to make it easy for customers to find the perfect piece for their home, no matter their budget.",
    pera2:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognize that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Consultancy",
    list : [
  {
    title: "Step-by-Step Design Service",
    desc: ["First, Liv Interio meets with clients to learn about their vision, likes, dislikes, and needs. They work on various spaces - apartments, villas, offices, etc. The designers listen closely so they can consider every detail before starting the design work."]
  },
  {
    title: "Creative Design Ideas",
    desc: ["Liv Interio is known for coming up with innovative interior design concepts that make spaces feel alive. They mix creativity with function, offering many styles from modern minimalist to classic ornate. Each design matches the client's taste and takes full advantage of the available area."]
  },
  {
    title: "Designs for Every Budget",
    desc: ["An important part of Liv Interio's service is providing personalized design solutions for all budgets. They work with clients to find cost-effective options without sacrificing aesthetics or quality. They believe well-designed spaces should be accessible to everyone."]
  },
  {
    title: "Focus on Details",
    desc: ["A big reason for Liv Interio's success is their sharp attention to detail. They carefully choose elements like colors, furnishings etc to create a cohesive look. Liv Interio believes it's the small finishing touches that take a space from ordinary to extraordinary."]
  },
  {
    title: "Client-Focused Process",
    desc: ["Liv Interio structures the design process around client collaboration. There is clear communication and regular check-ins to allow real-time adjustments. This transparency builds trust and leads to spaces that truly resonate with the client."]
  },
  {
    title: "Expertise Across Project Types",
    desc: ["From modern kitchens to cozy bedrooms and professional offices - Liv Interio can do it all. Their ability to work in vastly different styles shows their versatility as designers."]
  },
  {
    title: "Quality and Durability",
    desc: ["Liv Interio only uses top-quality materials and skilled craftsmen so the designs last for years. Attractive, durable spaces are central to their service commitment."]
  },
  {
    title: "Ongoing Support",
    desc: [
      "Liv Interio's service commitment extends well beyond project completion through its comprehensive aftercare support, providing clients with personalized maintenance guidance, design tweaks, and prompt troubleshooting long after the final reveal. ",
      "This steadfast dedication to each client fosters trusted relationships that guarantee enduring spaces and lasting satisfaction."
      ]
  },
  {
    title: "Happy Customers",
    desc: [
      "Liv Interio earns high acclaim for its unparalleled creativity, consummate professionalism, and unique mastery in translating abstract visions into tangible, bespoke spaces that exceed expectations.",
      "Their portfolio boasts countless glowing testimonials from delighted clients, affirming the company's stellar reputation for service excellence and commitment to every project."
    ]
  },
  {
    title: "Conclusion",
    desc: [
      "With an unrivaled fusion of avant-garde design originality, minimalist elegance, and unwavering customer focus, Liv Interio has emerged as Noida's premier interior design consultant. ",
      "Their robust yet versatile expertise empowers them to conceive fully customized, world-class spaces for residential and commercial settings alike that strike the perfect equilibrium between visually stunning aesthetics and practical, everyday functionality. ",
      "Through their savvy balancing act of form and function, Liv Interio can actualize any client's most ambitious interior visions while enhancing livability."
    ]
  }
    ] 
    },
    "office-interiors":{
    title: "Office Interiors",
    subTitle:"What Makes Liv Interio Special",
    pera1:"Welcome to Livinterio.com, the premier online destination for stylish, high-quality furniture and home décor. We offer an ever-evolving selection of modern, contemporary and transitional pieces for every room in the home. Our goal is to make it easy for customers to find the perfect piece for their home, no matter their budget.",
    pera2:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognize that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Consultancy",
    list : [
  {
    title: "Step-by-Step Design Service",
    desc: ["First, Liv Interio meets with clients to learn about their vision, likes, dislikes, and needs. They work on various spaces - apartments, villas, offices, etc. The designers listen closely so they can consider every detail before starting the design work."]
  },
  {
    title: "Creative Design Ideas",
    desc: ["Liv Interio is known for coming up with innovative interior design concepts that make spaces feel alive. They mix creativity with function, offering many styles from modern minimalist to classic ornate. Each design matches the client's taste and takes full advantage of the available area."]
  },
  {
    title: "Designs for Every Budget",
    desc: ["An important part of Liv Interio's service is providing personalized design solutions for all budgets. They work with clients to find cost-effective options without sacrificing aesthetics or quality. They believe well-designed spaces should be accessible to everyone."]
  },
  {
    title: "Focus on Details",
    desc: ["A big reason for Liv Interio's success is their sharp attention to detail. They carefully choose elements like colors, furnishings etc to create a cohesive look. Liv Interio believes it's the small finishing touches that take a space from ordinary to extraordinary."]
  },
  {
    title: "Client-Focused Process",
    desc: ["Liv Interio structures the design process around client collaboration. There is clear communication and regular check-ins to allow real-time adjustments. This transparency builds trust and leads to spaces that truly resonate with the client."]
  },
  {
    title: "Expertise Across Project Types",
    desc: ["From modern kitchens to cozy bedrooms and professional offices - Liv Interio can do it all. Their ability to work in vastly different styles shows their versatility as designers."]
  },
  {
    title: "Quality and Durability",
    desc: ["Liv Interio only uses top-quality materials and skilled craftsmen so the designs last for years. Attractive, durable spaces are central to their service commitment."]
  },
  {
    title: "Ongoing Support",
    desc: [
      "Liv Interio's service commitment extends well beyond project completion through its comprehensive aftercare support, providing clients with personalized maintenance guidance, design tweaks, and prompt troubleshooting long after the final reveal. ",
      "This steadfast dedication to each client fosters trusted relationships that guarantee enduring spaces and lasting satisfaction."
      ]
  },
  {
    title: "Happy Customers",
    desc: [
      "Liv Interio earns high acclaim for its unparalleled creativity, consummate professionalism, and unique mastery in translating abstract visions into tangible, bespoke spaces that exceed expectations.",
      "Their portfolio boasts countless glowing testimonials from delighted clients, affirming the company's stellar reputation for service excellence and commitment to every project."
    ]
  },
  {
    title: "Conclusion",
    desc: [
      "With an unrivaled fusion of avant-garde design originality, minimalist elegance, and unwavering customer focus, Liv Interio has emerged as Noida's premier interior design consultant. ",
      "Their robust yet versatile expertise empowers them to conceive fully customized, world-class spaces for residential and commercial settings alike that strike the perfect equilibrium between visually stunning aesthetics and practical, everyday functionality. ",
      "Through their savvy balancing act of form and function, Liv Interio can actualize any client's most ambitious interior visions while enhancing livability."
    ]
  }
    ] }
  }

const Services = () => {
  const router = useRouter();
  const { category } = router.query;

  const categorySectionRef = useRef(null);

  // Set default to consultancy if no category in URL
  const defaultCategory = 'consultancy';


  // Local state for selected category
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  // On initial load or router change, update selectedCategory state from URL
  useEffect(() => {
    if (typeof category === 'string' && data[category]) {
      setSelectedCategory(category);
    } else {
      // If no valid category in URL, reset to default category in URL and state
      router.replace({
        pathname: router.pathname,
        query: { category: defaultCategory },
      }, undefined, { shallow: true });
      setSelectedCategory(defaultCategory);
    }
  }, [category, router]);

  // Scroll to category section whenever selectedCategory changes
  // useEffect(() => {
  //   if (categorySectionRef.current) {
  //     categorySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [selectedCategory]);

  // Handler when clicking on WhatWeDoSection button
const handleCategorySelect = (category) => {
  setSelectedCategory(category);
  router.push(
    { pathname: router.pathname, query: { category } },
    undefined,
    { shallow: true }
  );

  // Scroll to section after a tiny delay so DOM updates
  setTimeout(() => {
    if (categorySectionRef.current) {
      categorySectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};


  const serviceData = data[selectedCategory];

  return (
    <>
      <Hero imageSrc="/assets/images/about-us/about-banner.webp" title="Services" />
      <WhatWeDoSection
        services={true}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <Section id="categorySection" ref={categorySectionRef}>
        <Container>
          <Heading className="uppercase !text-center md:mb-[40px]">
            {serviceData.title}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px] ">
            <div className="md:col-span-6">
              <Pera>{serviceData.pera1}</Pera>
              <Heading className="md:!text-[24px] my-[10px] lg:my-[20px] 2xl:my-[30px]">{serviceData.subTitle}</Heading>
              <Pera>{serviceData.pera2}</Pera>
            </div>
            <div className="md:col-span-6">
              <div className="h-full w-full relative ">
                <Image src={serviceData.image} alt={serviceData.altTag} fill className='rounded-[10px]'/>
              </div>
            </div>
          </div>
          <div className="mt-[50px] pb-[50px] border-b border-[var(--text-primary)]">
            {serviceData.list.map((data, index) => (
              <div key={index} className="mt-[20px]">
                <Heading className="mb-2 md:!text-[18px]">{data.title}</Heading>
                {data.desc.map((para, i) => (
                  <Pera key={i} className="!text-[12px]">
                    {para}
                  </Pera>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Services;
