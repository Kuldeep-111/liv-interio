import React from "react";
import Section from "./utilities/Section";
import Image from "next/image";
import Pera from "./utilities/Pera";
import Heading from "./utilities/Heading";
import Container from "./utilities/Container";
import TeamCard from "./utilities/TeamCard";

const TeamSection = () => {
  const teamList = [
    {image:"/assets/images/team/maninder-singh.jpeg", alt:"Maninder Singh", name: "Maninder Singh", designation: "Purchase Head" },
    {image:"/assets/images/team/muskan-sharma.jpeg", alt:"Muskan Sharma", name: "Muskan Sharma", designation: "Designer" },
    {image:"/assets/images/team/akshat-singhal.jpeg", alt:"Akshat Singhal", name: "Akshat Singhal", designation: "3D Visualiser" },
    {image:"/assets/images/team/kunal-panchal.jpeg", alt:"Kunal panchal", name: "Kunal Panchal", designation: "2D Designer" },
  ];
  return (
    <Section
      id="teamSection"
      className="overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6">
            <Heading animation="fade-up" className="uppercase !text-center">Meet Our Team</Heading>
            <TeamCard
            animation="fade-up"
            data={{image:"/assets/images/about-us/about-section.webp",
              alt:"Manmeet Kaur",
              name:"Manmeet Kaur",
              designation:"Founder"}}
              className="h-[300px] md:h-[450px] w-full max-w-[400px] "
            />
          </div>
          <div  className="md:col-span-6">
            <div className="grid grid-cols-12">
            {teamList.map((data,index)=>(
              <div key={index} className="col-span-6">
              <TeamCard animation="fade-up" data={data} className="w-full max-w-[200px] h-[150px] sm:h-[200px]"/>
            </div>
            ))}
            </div>
          </div>
        </div>
      </Container>

      {/* <Image src="/assets/images/team/team-section.webp" alt='Our Team' fill className='object-cover'/>
            <Heading className='absolute top-[80px] left-0 w-full text-white md:!text-[20px] !text-center uppercase' data-aos="fade-down">Core Team</Heading>
            <div data-aos="fade-bottom" className='hidden md:grid grid-cols-1 md:grid-cols-12 gap-[30px] absolute bottom-0 left-0 w-full px-[50px] py-[50px] bg-gradient-to-b from-transparent via-black/50 to-black'>
              {data.map((data,index)=>(
              <div key={index} className='col-span-3'>
                <h4 className='tracking-[1px] text-white text-center text-[18px] lg:text-[16px] 2xl-[24px] mb-[10px]'>{data.name}</h4>
                <Pera className='text-white !text-center'>{data.designation}</Pera>
              </div>
            ))}
            </div> */}
    </Section>
  );
};

export default TeamSection;
