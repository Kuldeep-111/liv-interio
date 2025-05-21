import React from 'react'
import Overlay from './utilities/Overlay'

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Background video showing Liv Interio interiors"
      role="img"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/Livinterio Version3-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Overlay/>
    </section>
  )
}

export default Hero
