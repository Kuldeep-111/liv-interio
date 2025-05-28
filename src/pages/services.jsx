
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
    pera1:"Liv Interio Interior Design Consultant in Noida Liv Interio is a leading interior design consultancy based in Noida, India, specialising in crafting living spaces that seamlessly blend aesthetics and functionality. Committed to understanding each client's unique lifestyle and preferences, their expert designers create customized interior concepts that transform ordinary spaces into extraordinary, bespoke sanctuaries reflecting one's personality and dreams.",
    pera2:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognise that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Consultancy",
    list : [
  {
    title: "Step-by-Step Design Service",
    desc: ["First, Liv Interio meets with clients to learn about their vision, likes, dislikes, and needs. They work in various spaces—apartments, villas, offices, etc. The designers listen closely and consider every detail before starting the design work."]
  },
  {
    title: "Creative Design Ideas",
    desc: ["Liv Interio is known for developing innovative interior design concepts that make spaces feel alive. They mix creativity with function, offering many styles from modern minimalist to classic ornate. Each design matches the client's taste and takes full advantage of the available area."]
  },
  {
    title: "Designs for Every Budget",
    desc: ["An essential part of Liv Interio's service is providing personalised design solutions for all budgets. They work with clients to find cost-effective options without sacrificing aesthetics or quality. They believe well-designed spaces should be accessible to everyone."]
  },
  {
    title: "Focus on Details",
    desc: ["Their sharp attention to detail is a big reason for Liv Interio's success. They carefully choose elements like colours, furnishings, etc, to create a cohesive look. Liv Interio believes the small finishing touches take a space from ordinary to extraordinary."]
  },
  {
    title: "Client-Focused Process",
    desc: ["Liv Interio structures the design process around client collaboration. There is clear communication and regular check-ins to allow real-time adjustments. This transparency builds trust and leads to spaces that resonate with the client."]
  },
  {
    title: "Expertise Across Project Types",
    desc: ["From modern kitchens to cosy bedrooms and professional offices, Liv Interio can do it. Their ability to work in vastly different styles shows their versatility as designers."]
  },
  {
    title: "Quality and Durability",
    desc: ["Liv Interior only uses top-quality materials and skilled artisans, so the designs have lasted for years. Attractive, durable spaces are central to their service commitment."]
  },
  {
    title: "Ongoing Support",
    desc: [
      "Liv Interio's service commitment extends well beyond project completion through its comprehensive aftercare support. It provides clients with personalised maintenance guidance, design tweaks, and prompt troubleshooting long after the final reveal.",
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
      "With an unrivalled fusion of avant-garde design originality, minimalist elegance, and unwavering customer focus, Liv Interio has emerged as Noida's premier interior design consultant.",
      "Their robust yet versatile expertise empowers them to conceive fully customised, world-class spaces for residential and commercial settings that strike the perfect equilibrium between visually stunning aesthetics and practical, everyday functionality.",
      "Liv Interio can actualise any client's most ambitious interior visions while enhancing livability through their savvy balancing act of form and function. "
    ]
  }
    ]    },
    "turnkey-solution":{
    title:"Turnkey Solutions",
    subTitle:"What are Turnkey Solutions?",
    pera1:"Are you confused about Turnkey Solutions being enough for a growing business? Many small and medium-sized business owners find themselves overwhelmed as their companies grow. There are many things to manage, from operations and hiring to marketing and technology. It can be confusing trying to handle everything at once. This is where turnkey solutions can help. But what exactly are turnkey solutions, and how can they benefit a growing business? This article will explain turnkey solutions, their business advantages, and some things to consider when choosing a provider.",
    pera2:"A turnkey solution is a complete product or service ready for immediate use. It is designed to simplify business processes by having an external provider handle the development, implementation, and maintenance.",
    pera3:"development, implementation, and maintenance. For example, a website design company may offer a turnkey website solution. This means they handle everything from site architecture and development to hosting, security, backups, and updates. All the business owner needs to do is provide content. The website is then ready to use immediately without any technical expertise required.",
    image:"/assets/images/services/CONSULTANCY.webp",
    altTag:"Turnkey Solution",
    list : [
  {
    title: "Benefits of Using Turnkey Solutions",
    desc: ["There are several essential benefits that turnkey solutions offer growing companies:"]
  },
  {
    title: "Save Time and Resources",
    desc: ["Instead of spending months building in-house skills and tools, an off-the-shelf turnkey solution can be implemented immediately. This allows businesses to reallocate resources like money and staff time to focus on core competencies."]
  },
  {
    title: "Access Expertise",
    desc: ["Quality turnkey providers develop deep expertise in their particular solution because they focus on continuously improving and refining that one offering, handling it for many customers over time. This level of specialised knowledge is hard for an individual company to replicate on its own."]
  },
  {
    title: "Reduce Costs",
    desc: ["Since turnkey solutions are sold to multiple customers, providers can spread development costs across a large customer base. This results in lower per-customer costs than one-off custom solutions, allowing turnkey providers to offer reduced pricing due to economies of scale."]
  },
  {
    title: "Focus on Growth",
    desc: ["Rather than getting bogged down in managing supplementary systems, turnkey solutions let leadership concentrate on strategic initiatives to grow the organisation."]
  },
  {
    heading:true,
    title: "How to Choose the Right Turnkey Solutions",
    desc: ["With many turnkey service providers available, selecting the right one is essential. Here are a few key factors to evaluate:"]
  },
  {
    inline:true,
    title: "Core competency match - ",
    desc: ["Ensure the turnkey solution aligns well with your core business."]
  },
  {
    title: "Features - ",
    desc: [
      "Prioritise must-have functionality versus nice-to-have. Extra unused features lead to unnecessary costs."
      ]
  },
  {
    title: "Reliability and support - ",
    desc: [
      "Check reviews and testimonials about a provider’s reliability and customer service."
    ]
  },
  {
    title: "Scalability -",
    desc: [
      "Choose a flexible solution that adapts as business needs change."
    ]
  },
  {
    title: "Data Security -",
    desc: [
      "Review how well it will be secured if handling sensitive data."
    ]
  },
  {
    title: "Cost - ",
    desc: [
      "Compare pricing models (one-time, subscription, transaction fees) to find the best value."
    ]
  },
  {
    title: "Conclusion",
    desc: [
      "Growing a business is full of challenges, so leaders should evaluate where turnkey solutions could provide leverage. While not a fit for every situation, turnkey services excel at handling supplementary needs like technology, HR, marketing, and more. This frees up resources to focus directly on revenue-generating activities. With some research into providers, turnkey solutions efficiently fuel scalable business growth."
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
  }
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
      <Hero imageSrc="/assets/images/services/banner.webp" title="Services" />
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
              { serviceData.pera1 && <Pera>{serviceData.pera1}</Pera>}
              {serviceData.subTitle && <Heading className="md:!text-[24px] my-[10px] lg:my-[20px] 2xl:my-[30px]">{serviceData.subTitle}</Heading>} 
              {serviceData.pera2 && <Pera>{serviceData.pera2}</Pera>} 
              {serviceData.pera3 && <Pera>{serviceData.pera3}</Pera>} 
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
                <Heading className={`mb-2  ${data.heading ? "md:!text-[22px] border-b border-[var(--text-primary)] pb-[20px] mb-[10px]" : "md:!text-[18px] "}`}>{data.title}</Heading>
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
