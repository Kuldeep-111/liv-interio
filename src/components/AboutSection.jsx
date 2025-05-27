import React from 'react'
import Image from 'next/image'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Button from './utilities/Button'
import Pera from './utilities/Pera'

const AboutSection = ({title="About Us",designation}) => {
  return (
      <Section id="aboutSection" className='relative before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]  '>
        <Container>
        <div className="flex flex-col md:flex-row items-center gap-[50px]">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <Image 
              src="/assets/images/about-us/about-section.webp" 
              alt="About Liv Interio" 
              width={800}
              height={500}
              className="w-full h-[400px] lg:h-[475px] xl:h-[575px] object-contain "
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 lg:pr-[100px]">
              <Heading className='mt-[20px] md:mt-0 md:mb-[30px]'>{title}</Heading>
              {designation && <Pera className='mb-[20px] font-[600] text-[var(--text-primary)]'>{designation}</Pera>}
              <Pera className='mb-[40px] text-center md:text-left'>Founded in 2018, Liv Interio is a boutique interior design studio that brings thoughtful design, refined aesthetics, and exceptional functionality to residential and commercial spaces. With over 8 years of expertise and 50+ completed projects, our work is guided by a passion to create environments that speak to the soul and serve everyday living with grace and elegance.</Pera>
              <Button href='/about-us'>View More</Button>
          </div>
        </div>
      </Container>
      </Section>
  )
}

export default AboutSection 