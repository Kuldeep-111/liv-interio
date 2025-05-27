import React from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'


const data =[
  {url:"/assets/videos/clients/video-1.mp4",title:"Mr Gopal gupta Testimonial sunworld arista"},
  {url:"https://www.youtube.com/embed/JtyfqwwyKus",title:"Elite golf greens Testimonial"},
]

const ClientSection = () => {
  return (
    <Section
      id="clientSection"
      className="relative before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]"
    >
      <Container>
        <Heading className='lg:!text-[28px]'>What Our Clients Say About Livinterio</Heading>
        <Pera className='w-full md:w-[80%] !text-[16px] mt-[15px] '>
          Livinterio transforms spaces with unmatched craftsmanship and personalized design, creating homes that truly reflect your style and comfort.
        </Pera>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] mt-[50px]">
          {data.map((data,index)=>(
          <div key={index} className="lg:col-span-6">
            <iframe
              className="w-full h-[300px] md:h-[400px] rounded-lg"
              src={data.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Heading className='!text-[20px] !font-[600] font-montserrat mt-[20px] text-center capitalize'>{data.title}</Heading>
          </div>
          ))}
        </div>
      </Container>

      {/* modal start */}
      
    </Section>
  );
}

export default ClientSection
