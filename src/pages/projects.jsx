"use client";

import Hero from "@/components/Hero";
import Button from "@/components/utilities/Button";
import Container from "@/components/utilities/Container";
import Heading from "@/components/utilities/Heading";
import Pera from "@/components/utilities/Pera";
import Section from "@/components/utilities/Section";
import ContactSection from "@/components/ContactSection";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const data = [
  {
    title: "parx laureate ",
    desc:"Rooted in nature, rising in style — Cedar Tower redefines modern warmth.",
    location: "sector 18",
    images: [
      { src: "/assets/images/projects/parx-laureate/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/parx-laureate/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/parx-laureate/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/parx-laureate/4.webp", alt: "image 4" },
      { src: "/assets/images/projects/parx-laureate/5.webp", alt: "image 5" },
      // {
      //   src: "/assets/images/projects/parx-laureate/LIV Audio.mp4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/ats-happy-trails/poster-1.webp",
      // },
    ],
  },
  {
    title: "sunworld arista",
    desc:"Designing joyful spaces where every corner feels like home.",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/sunworld-arista/new-2.webp", alt: "image 2" },
      { src: "/assets/images/projects/sunworld-arista/new-1.webp", alt: "image 1" },
      { src: "/assets/images/projects/sunworld-arista/new-3.webp", alt: "image 3" },
      { src: "/assets/images/projects/sunworld-arista/new-4.webp", alt: "image 4" },
      { src: "/assets/images/projects/sunworld-arista/5.webp", alt: "image 5" },
    ],
  },
  {
    title: "ELITE GOLF GREENS",
    desc:"Where soft tones meet timeless elegance — welcome to the Beige House.",
    location: "sector 79 Noida",
    images: [
      { src: "/assets/images/projects/elite-golf-greens/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/elite-golf-greens/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/elite-golf-greens/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/elite-golf-greens/4.webp", alt: "image 4" },
      { src: "/assets/images/projects/elite-golf-greens/5.webp", alt: "image 5" },
      { src: "/assets/images/projects/elite-golf-greens/6.webp", alt: "image 6" },
      // {
      //   src: "/assets/images/projects/elite-golf-greens/video-1.mp4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/elite-golf-greens/poster-1.webp",
      // },
    ],
  },
  {
    title: "IENERGIZER OFFICE",
    location: "sector 60 Noida",
    desc:"Elevating workspaces with smart design and professional elegance.",
    images: [
      { src: "/assets/images/projects/ienergizer-office/4.webp", alt: "image 4" },
      { src: "/assets/images/projects/ienergizer-office/new-1.webp", alt: "image 1" },
      { src: "/assets/images/projects/ienergizer-office/new-3.webp", alt: "image 2" },
      { src: "/assets/images/projects/ienergizer-office/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/ienergizer-office/5.webp", alt: "image 5" },
    ],
  },
  {
    title: "ATS Happy trails",
    desc:"Crafting personalized spaces that tell your unique story.",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/ats-happy-trails/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/ats-happy-trails/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/ats-happy-trails/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/ats-happy-trails/4.webp", alt: "image 4" },
      // {
      //   src: "/assets/images/projects/ats-happy-trails/video-1.mp4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/ats-happy-trails/poster-1.webp",
      // },
    ],
  },
  {
    title: "CLEO COUNTY",
    desc:"Elegant living, thoughtfully crafted — interiors that echo Cleo County’s charm.",
    location: "sector 121 Noida",
    images: [
      { src: "/assets/images/projects/cleo-county/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/cleo-county/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/cleo-county/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/cleo-county/4.webp", alt: "image 4" },
    
    ],
  },
];

const Projects = ({openModal}) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState([]);

  const formatSlidesForLightbox = (images) =>
    images.map((item) => {
      if (item.type === "video") {
        return {
          type: "video",
          sources: [
            {
              src: item.src,
              type: "video/mp4",
            },
          ],
          poster: item.poster || "",
        };
      }
      return {
        src: item.src,
        alt: item.alt,
      };
    });

  return (
    <>
      <Hero
        imageSrc="/assets/images/projects/banner.webp"
        title="Our Projects"
      />

      {data.map((item, projectIndex) => (
        <Section
          key={item.title}
          className="relative overflow-hidden before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]"
        >
          <Container className="lg:!w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
              <div className="md:col-span-4" data-aos="fade-up-right">
                <Heading className="uppercase mt-[0px] md:mt-[50px] md:!text-[24px]">
                  {item.title}
                </Heading>
                <Pera className="text-[14px] mb-[10px] md:!mb-[20px] capitalize">{item.location}</Pera>
                <Pera className="!text-[12px] 2xl:!text-[13px]">{item.desc}</Pera>
                <Button
                  href="/project"
                  className="bg-white mt-[30px] md:mt-[50px] 2xl:mt-[70px] w-fit block text-[var(--text-primary)]"
                  onOpen={openModal}
                  button={true}
                >
                  Explore project
                </Button>
              </div>
              <div className="md:col-span-8" data-aos="fade-up-left">
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="customSwiper"
                  >
                    {item.images.map((img, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="pb-[30px] 2xl:pb-[50px]"
                        onClick={() => {
                          setLightboxImages(formatSlidesForLightbox(item.images));
                          setLightboxIndex(idx);
                        }}
                      >
                        {img.type === "video" ? (
                          <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[450px] rounded-[15px] overflow-hidden">
                            <video
                              src={img.src}
                              poster={img.poster}
                              className="w-full h-full object-cover"
                              controls
                              muted
                              playsInline
                            />
                          </div>
                        ) : (
                          <div className="relative w-full h-[300px]  md:h-[400px] 2xl:h-[450px] rounded-[15px] overflow-hidden cursor-pointer">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={lightboxImages}
        index={lightboxIndex}
        plugins={[Video]}
      />

      <ContactSection  onOpen={openModal}/>
    </>
  );
};

export default Projects;
