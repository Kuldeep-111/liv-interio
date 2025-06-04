"use client"
import React from 'react'
import Overlay from './utilities/Overlay'
import Image from 'next/image'
import Heading from './utilities/Heading'
import Link from 'next/link'
import Breadcrumb from './utilities/BreadCrumb'

const Hero = ({ video = false, imageSrc = '/assets/images/projects/projects-banner.webp',title ,parent}) => {
  return (
    <section
      className="relative w-full h-[50vh] md:h-screen overflow-hidden"
      aria-label="Background media showing Liv Interio interiors"
      role="img"
    >
      {video ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/Livinterio Version3-1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <>
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className='z-3 absolute top-0 left-0 w-full h-full flex items-center justify-center p-5'>
          <div>
          <Heading animation='fade-down' className='uppercase text-white !text-center'>{title}</Heading>
          <Breadcrumb title={title} parent={parent}/>
          </div>
        </div>
        </>
      )}

      <Overlay  className={`${!video && "opacity-40"}`}/>
    </section>
  )
}

export default Hero
