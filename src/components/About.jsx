import React from 'react'
import Image from 'next/image'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Button from './utilities/Button'
import Pera from './utilities/Pera'

const About = () => {
  return (
      <Section id="about">
        <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <Image 
              src="/assets/images/about-section.webp" 
              alt="About Liv Interio" 
              width={800}
              height={500}
              className="w-full h-[500px] object-contain "
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
              <Heading className='mb-[40px]'>About Us</Heading>
              <Pera>Founded in 2018, Liv Interio is a boutique interior design studio that brings thoughtful design, refined aesthetics, and exceptional functionality to residential and commercial spaces. With over 8 years of expertise and 50+ completed projects, our work is guided by a passion to create environments that speak to the soul and serve everyday living with grace and elegance.</Pera>
              {/* <Button>View More</Button> */}
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
              View More
            </button>
          </div>
        </div>
      </Container>
      </Section>
  )
}

export default About 