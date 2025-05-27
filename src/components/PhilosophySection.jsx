import React from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Image from 'next/image'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'
import Button from './utilities/Button'

const PhilosophySection = ({onOpen}) => {
  return (
         <Section id="aboutSection" className='relative   '>
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-[60px]">
          {/* Left side - Image */}
          <div className="lg:col-span-6">
            <Image 
              src="/assets/images/philosophy/1.webp" 
              alt="Philosophy" 
              width={800}
              height={500}
              className="w-full max-w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-[10px]"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-5">
              <Heading className='mb-[20px]'>Our Philosophy</Heading>
              <Pera className='mb-[40px]'>At Liv Interio, we believe in creating spaces that reflect the people who inhabit them. Every design begins with a deep understanding of our clients' lifestyles, dreams, and values. We strive to balance form and function, ensuring every corner tells a story while serving a purpose. With timeless elegance and contemporary sensibilities, our work transcends trends to create lasting impressions.</Pera>
              <Button button={true} onOpen={onOpen}>View More</Button>
          </div>

        </div>
      </Container>
          <Image src="/assets/images/philosophy/bg-1.webp" alt='Philosophy Background' 
                 width={250} height={400}
                 className='absolute right-0 opacity-20 md:opacity-100 bottom-0 md:bottom-[100px] w-auto h-auto max-h-[600px]'/>
      </Section>
  )
}

export default PhilosophySection
