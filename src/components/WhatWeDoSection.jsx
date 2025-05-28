import React, { useState } from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Image from 'next/image'
import Link from 'next/link'

const whatWeDoItems = [
  { 
    imageSrc:"/assets/images/whatwedo/whatwedo.webp",
    imgAlt:"Consultancy image",
    icon: '/assets/images/whatwedo/consultany.webp',
    alt: 'Consultancy Icon',
    label: 'Consultancy',
    link: "consultancy"
  },
  {
    imageSrc:"/assets/images/whatwedo/whatwedo.webp",
    imgAlt:"Turnkey Solutions",
    icon: '/assets/images/whatwedo/turnkey.webp',
    alt: 'Turnkey Solutions Icon',
    label: 'Turnkey Solutions',
    link:'turnkey-solution'
  },
  {
    imageSrc:"/assets/images/whatwedo/whatwedo.webp",
    imgAlt:"Residential Design",
    icon: '/assets/images/whatwedo/residential.webp',
    alt: 'Residential Design Icon',
    label: 'Residential Design',
    link:"residential-design"
  },
  {
    imageSrc:"/assets/images/whatwedo/whatwedo.webp",
    imgAlt:"Office Interiors",
    icon: '/assets/images/whatwedo/office.webp',
    alt: 'Office Interiors Icon',
    label: 'Office Interiors',
    link:"office-interiors"
  }
]

const WhatWeDoSection = ({ services, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(whatWeDoItems[0]);

  const handleSelect = (item) => {
    setSelectedCategory(item);
    if (onCategorySelect) {
      onCategorySelect(item.link);
    }
  };

  return (
    <Section className="py-[60px] bg-[var(--background-secondary)] overflow-hidden">
      <Container>
        {!services && (
          <Heading className="uppercase mb-[30px] lg:mb-[40px] 2xl:mb-[60px] !text-center">
            What We Do
          </Heading>
        )}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
          {/* Left Column */}
          <div className="md:col-span-4 flex items-center" data-aos="fade-right">
            <ul className="space-y-12 w-full">
              {whatWeDoItems.map((item, index) => (
                <li key={index} className="flex items-center gap-[25px] pb-[20px] border-b border-[var(--text-primary)]">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={35}
                    height={36}
                    className="object-contain w-[20px] lg:w-[25px] 2xl:w-[30px] h-[21px] lg:h-[26] 2xl:h-[31px]"
                  />
                  {services ? (
                    <button
                      onClick={() => handleSelect(item)}
                      className="text-[#804B1D] text-center text-[16px] lg:!text-[20px] 2xl:!text-[22px] font-normal not-italic leading-none tracking-[1px] capitalize"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={`/services?category=${item.link}`}
                      className="text-[#804B1D] text-center text-[16px] lg:!text-[20px] 2xl:!text-[22px] font-normal not-italic leading-none tracking-[1px] capitalize"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8" data-aos="fade-left">
            <div className="relative w-full h-[300px] lg:h-[425px] 2xl:h-[550px]">
              <Image
                src={services ? selectedCategory.imageSrc : whatWeDoItems[0].imageSrc}
                alt={services ? selectedCategory.imgAlt : whatWeDoItems[0].imgAlt}
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhatWeDoSection;
