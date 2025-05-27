import React from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'
import Button from './utilities/Button'
import BeforeAfterSlider from './utilities/BeforeAfterSlider'
import Image from 'next/image'

const JourneySection = () => {
  return (
    <Section id='journey'>
        <Container>
            <Heading className='uppercase !text-center'>A Smooth Journey to Your Dream Space</Heading>
            <Pera className='!text-center'>At LivInterio, we make transforming your space effortless and smooth — as easy as sliding this bar</Pera>
            {/* <div className='my-[50px]'>
                <BeforeAfterSlider
                 beforeImage="/assets/images/interior/1.webp" 
                 afterImage="/assets/images/interior/3.webp"
                />
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-[5px] my-[40px] md:w-[80%] mx-auto'>
              <div className='md:col-span-6'><Image src="/assets/images/journey/journey-before.webp" alt='before image' width={400} height={0} className='max-w-[600px] w-full h-[350px] lg:h-[400px] 2xl:h-[500px] object-cover'/></div>
              <div className='md:col-span-6'><Image src="/assets/images/journey/journey-after.webp" alt='before image' width={400} height={0} className='max-w-[600px] w-full h-[350px] lg:h-[400px] 2xl:h-[500px] object-cover'/></div>
            </div>
            <Pera className='!text-center'>With LivInterio, transforming your space is as smooth an experience as sliding this bar</Pera>
            <Button href='/projects' className='uppercase w-fit block md:mx-auto mt-[20px] text-[var(--text-primary)] tracking-[2px]'>SEE ALL PROJECTS</Button>
        </Container>
    </Section>
  )
}

export default JourneySection
