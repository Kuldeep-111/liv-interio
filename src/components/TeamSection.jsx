import React from 'react'
import Section from './utilities/Section'
import Image from 'next/image'

const TeamSection = () => {
  return (
        <Section id='teamSection' className='relative w-full h-[90vh]'>
            <Image src="/assets/images/team/team-section.webp" alt='Our Team' fill className='object-cover'/>

        </Section>
  )
}

export default TeamSection
