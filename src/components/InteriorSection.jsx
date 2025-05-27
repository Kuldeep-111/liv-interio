import React from 'react'
import Image from 'next/image'
import Container from './utilities/Container'
import Section from './utilities/Section'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'

const InteriorSection = () => {
  return (
    <Section id="interiorSection">
      <Container>
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-[50px]">
          {/* First Column - Image */}
          <div className="relative w-full max-w-[400px] h-[300px] lg:h-[400px] hidden lg:block">
            <Image
              src="/assets/images/interior/1.webp"
              alt="Interior Design"
              fill
              className="object-cover rounded-lg position-center"
            />
          </div>

          {/* Second Column - Content */}
          <div className="flex flex-col justify-center">
            <Heading className='uppercase md:!text-center mb-[20px]'>interiors with a difference</Heading>
            <Pera className="!text-center">
              We make interior design accessible and affordable for everyone, regardless of budget.
            </Pera>
          </div>

          {/* Third Column - Image */}
          <div className="relative ms-auto w-full max-w-[400px] h-[300px] lg:h-[400px] hidden lg:block">
            <Image
              src="/assets/images/interior/2.webp"
              alt="Interior Design"
              fill
              className="object-cover rounded-lg position-center"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column - Image */}
          <div className="relative w-full max-w-[600px] h-[400px] mx-auto md:ml-auto">
            <Image
              src="/assets/images/interior/3.webp"
              alt="Interior Design"
              fill
              className="object-cover rounded-lg "
            />
          </div>

          {/* Second Column - Image */}
          <div className="relative w-full max-w-[600px] h-[400px] mx-auto md:mr-auto">
            <Image
              src="/assets/images/interior/4.webp"
              alt="Interior Design"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default InteriorSection
