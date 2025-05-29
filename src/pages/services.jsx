
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
    image:"/assets/images/services/consultancy-2.webp",
    altTag:"Consultancy",
    info:[
      {desc:"Liv Interio Interior Design Consultant in Noida Liv Interio is a leading interior design consultancy based in Noida, India, specialising in crafting living spaces that seamlessly blend aesthetics and functionality. Committed to understanding each client's unique lifestyle and preferences, their expert designers create customized interior concepts that transform ordinary spaces into extraordinary, bespoke sanctuaries reflecting one's personality and dreams."},
      {title:"What Makes Liv Interio Special",desc:"Liv Interio sets itself apart through interior designs that masterfully integrate visual appeal and comfort to create livable dream homes. Their award-winning designers recognise that an ideal space balances striking style with unfettered functionality to craft surroundings that dazzle the eyes while responding intuitively to residents' needs, facilitating inspired living and effortless daily habits. Through this harmonious marriage of sleek aesthetics and efficient functionality, Liv Interio unravels the full potential of any home."},
   
    ],
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
    ]   
   },
    "turnkey-solution":{
     title: "Turnkey Solutions",
     image:"/assets/images/services/turnkey-solutions.webp",
    altTag:"Turnkey Solutions",
    info:[
      {desc:"Are you confused about Turnkey Solutions being enough for a growing business? Many small and medium-sized business owners find themselves overwhelmed as their companies grow. There are many things to manage, from operations and hiring to marketing and technology. It can be confusing trying to handle everything at once. This is where turnkey solutions can help. But what exactly are turnkey solutions, and how can they benefit a growing business? This article will explain turnkey solutions, their business advantages, and some things to consider when choosing a provider."},
      {title:"What are Turnkey Solutions?",desc:"A turnkey solution is a complete product or service ready for immediate use. It is designed to simplify business processes by having an external provider handle the development, implementation, and maintenance."},
      {desc:"For example, a website design company may offer a turnkey website solution. This means they handle everything from site architecture and development to hosting, security, backups, and updates. All the business owner needs to do is provide content. The website is then ready to use immediately without any technical expertise required."},

    ],
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
    title:"Access Expertise",
    desc:["Quality turnkey providers develop deep expertise in their particular solution because they focus on continuously improving and refining that one offering, handling it for many customers over time. This level of specialised knowledge is hard for an individual company to replicate on its own."]
  },
  {
    title:"Reduce Costs",
    desc:["Since turnkey solutions are sold to multiple customers, providers can spread development costs across a large customer base. This results in lower per-customer costs than one-off custom solutions, allowing turnkey providers to offer reduced pricing due to economies of scale."]
  },
  {
    title:"Focus on Growth",
    desc:["Rather than getting bogged down in managing supplementary systems, turnkey solutions let leadership concentrate on strategic initiatives to grow the organisation."]
  },
  {
    heading:true,
    title:"How to Choose the Right Turnkey Solutions",
    desc:["With many turnkey service providers available, selecting the right one is essential. Here are a few key factors to evaluate:"]
  },
  {
    inline:true,
    title:"Core competency match -",
    desc:["Ensure the turnkey solution aligns well with your core business."]
  },
  {
    inline:true,
    title:"Features -",
    desc:["Prioritise must-have functionality versus nice-to-have. Extra unused features lead to unnecessary costs."]
  },
  {
    inline:true,
    title:"Reliability and support - ",
    desc:["Check reviews and testimonials about a provider’s reliability and customer service."]
  },
  {
    inline:true,
    title:"Scalability -",
    desc:["Choose a flexible solution that adapts as business needs change."]
  },
  {
    inline:true,
    title:"Data Security - ",
    desc:["Review how well it will be secured if handling sensitive data."]
  },
  {
    inline:true,
    title:"Cost -",
    desc:["Compare pricing models (one-time, subscription, transaction fees) to find the best value."]
  },
  {
    title:"Conclusion",
    desc:["Growing a business is full of challenges, so leaders should evaluate where turnkey solutions could provide leverage. While not a fit for every situation, turnkey services excel at handling supplementary needs like technology, HR, marketing, and more. This frees up resources to focus directly on revenue-generating activities. With some research into providers, turnkey solutions efficiently fuel scalable business growth."]
  },
    ] 
    },
    "residential-design":{
     title: "Residential Design",
     image:"/assets/images/services/residential.webp",
    altTag:"Residential Design",
    info:[
      {title:"Residential Design at Best Price in Noida",desc:["Liv Interio is Noida's top interior design studio specialising in creating high-value, budget-friendly living spaces. For a decade, we have been helping homeowners across Noida plan and execute residential interiors aligned with their aesthetic tastes, lifestyle needs, and financial capabilities. Our designers combine insightful consultations, innovative solutions, and stringent execution to craft dream homes within affordable budgets."]},
      {title:"Understanding Ideal Residential Design",desc:["Thoughtful residential design ensures homes look good, feel comfortable, and function efficiently for daily living needs. It involves designing architectural layouts and integrating decor elements like stylish fixtures, furniture, artwork, and harmonious colour schemes. With urbanisation, space constraints are a key challenge. Liv Interio's designers have the expertise to develop compact yet liveable floor plans. We optimize room dimensions, storage solutions, and lighting schemes to create spacious illusions within small spaces using ergonomic principles. The result is happy, convenient living."]},
     
    ],
    list:[
      {title:"Choosing a Home Design in Noida",desc:["Noida caters to diverse residential needs through varied housing types:"]},
      {desc:[
        "Compact apartments for urban convenience",
        "Independent floors allow suburban tranquility.",
        "Premium villas for resort-style luxury"
      ]},
      {desc:["An interior space is only as good as its base foundation. To design a well-optimised space, one must start by selecting the correct type of home. Liv Interio conducts detailed consultations to understand your lifestyle, family size, priorities, and hobbies and recommends suitable property types and locations that align with your vision of an ideal home."]},
      {heading:true,title:"Customising Interiors with Liv Interio",desc:["Once you've purchased your new Noida home, our designers can customise its feel & functionality for your lifestyle through:"]},
      {inline:true, title:"Mood Boards –",desc:["Collaborative sessions to understand your decorative taste, interests, and vision for each space."]},
      {inline:true, title:"Space Planning –",desc:["Floor plans to optimize room layouts, storage, spatial flow, and future flexibility."]},
      {inline:true, title:"Style Integration –",desc:["Curate thematic styles with customised furniture, light fixtures, upholstery, artwork, etc."]},
      {inline:true, title:"Ergonomic Solutions –",desc:[" Design storage hacks, anti-fatigue installations, and senior-friendly modifications."]},
      {inline:true, title:"Visualisation Renderings –",desc:["Photorealistic 3d illustrations to experience completed interiors before execution."]},
      {inline:true, title:"Project Handholding –",desc:["Seamless execution with allocated client servicing personnel."]},
      {heading:true, title:"Liv Interio Advantage",desc:["When designing your Noida home with us, benefit from:"]},
      {desc:["Industry-Best Rates – High-quality outputs at value-driven costs"]},
      {desc:["Single Point Contact – Hassle-free coordination for all design and execution"]},
      {desc:["Timely Delivery – Stringent project plans for punctual completion"]},
      {desc:["Transparent Processes – Clear payment terms. There are no hidden charges."]},
      {desc:["Our designers are versatile, so whether you fancy a contemporary minimalist look, breezy tropical vibes, industrial warehouse edge, or vintage French charm, Team Liv Interio can consult, curate, and execute interiors that fit your preferred aesthetic at surprisingly affordable rates. We deliver the rooms of your dreams while maximising value."]},
      {title:"Top Affordable Housing Projects in Noida",desc:["Here are some well-designed, value-for-money Noida housing projects for interior upgrade through Liv Interio:"]},
      {desc:["Lotus Panache by The 3C Company – Sector 110"]},
      {desc:["Axon Residency by Axon Developers – Sector 137"]},
      {desc:["Exquisite Business Park by Exquisite Group - Sector 132"]},
      {desc:["Centrum by Assotech – Sector 137"]},
      {desc:["Princely Estate by Saya Group - Sector 168"]},
      {desc:["Team Liv Interio provides design-to-execution interior upgrade services for homes across Noida. Contact us today for personalised consultations!"]},
      {title:"Conclusion",desc:["Liv Interio offers reliable residential design services to craft lived-in interiors that balance aesthetics, comfort, functionality, and affordability. By understanding homeowner preferences and property specifics, our experts provide bespoke solutions for harmonious living."]}
    ]
  },
    "office-interiors":{
    title: "Office Interiors",
    image:"/assets/images/services/office.webp",
    altTag:"Consultancy",
    info:[
      {desc:"Modern Office Interior Design Ideas at the Best Price in India Welcome to Liv Interio’s guide to modern office interior design! Transforming your office into a stylish and functional workspace doesn’t have to cost a fortune. Our talented team of designers can help create an inspiring interior within your budget that enhances productivity and company culture."},
      {desc:"This article will highlight some of our favourite contemporary office design ideas to spruce up your space while getting the most value. Keep reading for an insider’s look at affordable finishes, spatial layouts, branded environments, and dècor elements that make an impact."},
      
    ],
    list:[
      {title:"Furniture and Non-Permanent Partitions",desc:["When designing an office space, it’s essential to enable productivity flow with group and solo work areas while utilising cost-saving pieces that withstand regular wear and tear.",
        "Furniture like stackable chairs, adjustable desks, mobile storage units and tables, and fabric cubicle dividers or glass partitions allow you to adapt spaces over time at an economical rate and block noise for concentrated work. Mobility and customisation are key components in creating flexible, modern environments."]},
      {title:"Amenities Promote Wellness and Collaboration",desc:["Office amenities such as lounge areas with sofas, small group dining or kitchen spaces, space for wellness such as yoga, outdoor balconies, or terraces don’t have to be extravagant to serve their purpose.",
        "Simple sofas and chairs facilitate informal conversations and dinners together, sustainable yoga mats provide breaks in the action, and affordable outdoor furniture offers fresh air to connect. Comfort is key, so the least expensive options often do.",
        "Even a tiny space for a coffee pot or microwave can allow coworkers to socialise and enjoy a short break while sparking creative ideas. The right amenities encourage employees to gather, support them professionally and personally, and foster community."
      ]},
      {title:"Wall Graphics, Artwork, Plants, and Stylish Lighting",desc:["Any brand can be conveyed with style and budget in mind through savvy choices in wall art, slogans, logos, environmental graphics, framed prints, canvas pieces, subtle wallpaper, and clever lighting selections.",
        "Regarding plants, many attractive low-light greenery selections clean indoor air and boost mood. Likewise, large floor lamps, pendant lights, sconces in energising colours, and linear fixture arrangements sculpt ceilings and guide foot traffic flow through office pathways.",
      "Themed wall graphics, tasteful sculptures, bold patterns, and custom shelves displaying objects representing an organisation’s values or services help convey brand identity to clients and potential new team members in a refined light. The stylistic potential here is limitless."]},
      {title:"Defined Seating nooks and Eating spaces with Color",desc:["Give collaboration its “space within a space” by introducing seating nooks with comfortable sofas, ottomans, side chairs, and coffee tables. Break up large expanses of floor and define functional areas for eating and idea sessions by cleverly placing stylish rugs in bold patterns and colourful accent chairs surrounding dining-height tables.",
        "Use colourful accent walls, throw pillows, artwork with vibrant hues, small shelving units, and space-dividing solutions to create visual interest while supporting areas for productivity and recharging employee batteries. Keep the dècor and furniture flexible to rearrange spaces for events or large meetings when needed."
      ]},
      {title:"Conclusion",desc:["A trendy, modern office doesn’t need fancy finishes and custom millwork to make an exciting impact on company culture, branding efforts, the work environment, and your budget.",
        "Thoughtful choices in paint colours, flooring, multipurpose furniture on casters, collaborative amenities, wall graphics, advanced lighting, and pops of colour go far in reinvigorating unattractive spaces into areas for productivity flow and inspiration at any budget level.",
      "At Liv Interio, our talented designers have extensive experience implementing office designs that elevate culture at an affordable price. Contact us today for a consultation!"
    ]},
    ]
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
              {serviceData.info.map((data,index)=>(
                <div key={index}>
                  {data.title && <Heading className="md:!text-[24px] my-[10px] lg:my-[20px] 2xl:my-[30px]">{data.title}</Heading>} 
                  { data.desc && <Pera>{data.desc}</Pera>}
                </div>
              ))}
            </div>
            <div className="md:col-span-6">
              <div className="h-[300px] 2xl:h-[400px] w-full relative ">
                <Image src={serviceData.image} alt={serviceData.altTag} fill className='rounded-[10px]'/>
              </div>
            </div>
          </div>
          <div className="mt-[50px] pb-[50px] border-b border-[var(--text-primary)]">
            {serviceData.list.map((data, index) => (
              <div key={index} className="mt-[20px]">
                <Heading className={`mb-2  ${data.heading ? "md:!text-[22px] border-b border-[var(--text-primary)] pb-[20px] mb-[10px]" : "md:!text-[18px] "} ${data.inline && "!inline-block"}`}>{data.title}</Heading>
                {/* {data.types &&<ul>
                  {data.types.map((data,index)=>(
                    <li key={index}>{data}</li>
                  ))}
                </ul>} */}
                {data.desc.map((para, i) => (
                  <Pera key={i} className={`!text-[12px] text-justify ${data.inline && "!inline-block"}`}>
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
