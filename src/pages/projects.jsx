import Hero from "@/components/Hero";
import Button from "@/components/utilities/Button";
import Container from "@/components/utilities/Container";
import Heading from "@/components/utilities/Heading";
import Pera from "@/components/utilities/Pera";
import Section from "@/components/utilities/Section";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";


const data = [
    {title:"sunworld arista",location:"sector 168 Noida",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]},
    {title:"ELITE GOLF GREENS",location:"sector 168 Noida",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]},
    {title:"CLEO COUNTY",location:"sector 168 Noida",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]},
    {title:"IENERGIZER OFFICE",location:"sector 168 Noida",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]},
    {title:"ATS Happy trails",location:"sector 168 Noida",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]},
    {title:"parx laureate",location:"cedar",
      images:[
        {src:"/assets/images/projects/sunworld-arista/project-2.webp",alt:"Project 2"},
        {src:"/assets/images/projects/sunworld-arista/project-1.webp",alt:"Project 1"},
    ]}
]

const projects = () => {
  return (
    <>
      <Hero
        imageSrc="/assets/images/projects/projects-banner.webp"
        title="Our Projects"
      />
      {data.map((item,index)=>(
        
      <Section key={item.title} className='relative before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]'>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
            <div className="md:col-span-5">
              <Heading className="uppercase mt-[0px] md:mt-[50px]">{item.title}</Heading>
              <Pera className="md:text-[18px]">{item.location}</Pera>
              <Button
                href="/project"
                className="bg-white text-[14px] mt-[30px] md:mt-[70px] w-fit block text-[var(--text-primary)]"
              >
                Explore project
              </Button>
            </div>
            <div className="md:col-span-7">
              <div className="w-full h-full">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                className="customSwiper"
                >
                  {item.images.map((data, idx) => (
                    <SwiperSlide key={idx} className="pb-[20px]">
                      <div className="relative w-full h-[300px] md:h-[500px] rounded-[15px] overflow-hidden">
                        <Image
                          src={data.src}
                          alt={data.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      ))}

      {/* let's talk */}
      <ContactSection/>
    </>
  );
};

export default projects;
