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
    title: "sunworld arista",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/sunworld-arista/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/sunworld-arista/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/sunworld-arista/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/sunworld-arista/4.webp", alt: "image 4" },
      { src: "/assets/images/projects/sunworld-arista/5.webp", alt: "image 5" },
    ],
  },
  {
    title: "ELITE GOLF GREENS",
    location: "sector 168 Noida",
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
    title: "CLEO COUNTY",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/cleo-county/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/cleo-county/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/cleo-county/3.webp", alt: "image 3" },
      { src: "/assets/images/projects/cleo-county/4.webp", alt: "image 4" },
      // {
      //   src: "/assets/images/projects/cleo-county/video-1.MP4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/cleo-county/1.webp",
      // },
      // {
      //   src: "/assets/images/projects/cleo-county/video-2.MP4",
      //   alt: "video 2",
      //   type: "video",
      //   poster: "/assets/images/projects/cleo-county/1.webp",
      // },
      // {
      //   src: "/assets/images/projects/cleo-county/video-3.MP4",
      //   alt: "video 3",
      //   type: "video",
      //   poster: "/assets/images/projects/cleo-county/3.webp",
      // },
      // {
      //   src: "/assets/images/projects/cleo-county/video-4.MP4",
      //   alt: "video 4",
      //   type: "video",
      //   poster: "/assets/images/projects/cleo-county/4.webp",
      // },
      // {
      //   src: "/assets/images/projects/cleo-county/video-5.MP4",
      //   alt: "video 5",
      //   type: "video",
      //   poster: "/assets/images/projects/cleo-county/5.webp",
      // },
    ],
  },
  {
    title: "IENERGIZER OFFICE",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/elite-golf-greens/1.webp", alt: "image 1" },
    ],
  },
  {
    title: "ATS Happy trails",
    location: "sector 168 Noida",
    images: [
      { src: "/assets/images/projects/ats-happy-trails/1.webp", alt: "image 1" },
      { src: "/assets/images/projects/ats-happy-trails/2.webp", alt: "image 2" },
      { src: "/assets/images/projects/ats-happy-trails/3.webp", alt: "image 3" },
      // {
      //   src: "/assets/images/projects/ats-happy-trails/video-1.mp4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/ats-happy-trails/poster-1.webp",
      // },
    ],
  },
  {
    title: "parx laureate",
    location: "cedar",
    images: [
      { src: "/assets/images/projects/ats-happy-trails/1.webp", alt: "image 1" },
      // {
      //   src: "/assets/images/projects/parx-laureate/LIV Audio.mp4",
      //   alt: "video 1",
      //   type: "video",
      //   poster: "/assets/images/projects/ats-happy-trails/poster-1.webp",
      // },
    ],
  },
];

const Projects = () => {
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
          className="relative before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]"
        >
          <Container className="lg:!w-[75%]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
              <div className="md:col-span-5">
                <Heading className="uppercase mt-[0px] md:mt-[50px]">
                  {item.title}
                </Heading>
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
                    pagination={{ clickable: true }}
                    className="customSwiper"
                  >
                    {item.images.map((img, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="pb-[20px]"
                        onClick={() => {
                          setLightboxImages(formatSlidesForLightbox(item.images));
                          setLightboxIndex(idx);
                        }}
                      >
                        {img.type === "video" ? (
                          <div className="relative w-full h-[300px] md:h-[450px] rounded-[15px] overflow-hidden">
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
                          <div className="relative w-full h-[300px] md:h-[450px] rounded-[15px] overflow-hidden cursor-pointer">
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

      <ContactSection />
    </>
  );
};

export default Projects;
