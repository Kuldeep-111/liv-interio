import React from 'react'
import Section from './utilities/Section'
import Image from 'next/image'
import Pera from './utilities/Pera'
import Heading from './utilities/Heading'

const TeamSection = () => {
  const data = [
    {name:"MS. MANMEET KAUR",designation:"Principal Designer"},
    {name:"MR. MANINDER SINGH",designation:"Purchase Head"},
    {name:"MS. MUSKAN SHARMA",designation:"Design & Concept Designer"},
    {name:"2D Designer",designation:"MS. RITU PANCHAL"},
  ]
  return (
        <Section id='teamSection' className='relative w-full h-[100vh] overflow-hidden'>
            <Image src="/assets/images/team/team-section.webp" alt='Our Team' fill className='object-cover'/>
            <Heading className='absolute top-[80px] left-0 w-full text-white md:!text-[20px] !text-center uppercase' data-aos="fade-down">Core Team</Heading>
            <div data-aos="fade-bottom" className='hidden md:grid grid-cols-1 md:grid-cols-12 gap-[30px] absolute bottom-0 left-0 w-full px-[50px] py-[50px] bg-gradient-to-b from-transparent via-black/50 to-black'>
              {data.map((data,index)=>(
              <div key={index} className='col-span-3'>
                <h4 className='tracking-[1px] text-white text-center text-[18px] lg:text-[16px] 2xl-[24px] mb-[10px]'>{data.name}</h4>
                <Pera className='text-white !text-center'>{data.designation}</Pera>
              </div>
            ))}
            </div>

        </Section>
  )
}

export default TeamSection
