import React from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'
import Button from './utilities/Button'

const ContactSection = ({className}) => {
  return (
    <Section id='letsTalk' className={`bg-[var(--background-secondary)] mt-[40px] md:mt-[80px] ${className}`}>
        <Container>
            <Heading className='uppercase !text-center'>Looking to elevate the aesthetic of your space?</Heading>
            <Pera className='!text-center mt-[10px] md:!text-[16px]'>Have a question for us? Let’s talk.</Pera>
            <Button href='/contact-us' className='bg-white uppercase block w-fit !mx-auto mt-[30px] text-[var(--text-primary)] !text-[14px]'>contact us</Button>
        </Container>
    </Section>
  )
}

export default ContactSection
