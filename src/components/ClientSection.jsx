import React, { useState } from "react";
import Section from "./utilities/Section";
import Container from "./utilities/Container";
import Heading from "./utilities/Heading";
import Pera from "./utilities/Pera";
import Overlay from "./utilities/Overlay";
import Image from "next/image";

const data = [
  {
    url: "/assets/videos/clients/video-1.mp4",
    title: " Sunworld Arista",
    type: "mp4",
    poster: "/assets/videos/clients/thumbnail.webp",
  },
  {
    url: "https://www.youtube.com/embed/JtyfqwwyKus",
    title: "Elite Golf Greens ",
    type: "youtube",
  },
];

const ClientSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const closeModal = () => setSelectedVideo(null);

  return (
    <Section
      id="clientSection"
      className="relative before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]"
    >
      <Container>
        <Heading className="lg:!text-[28px]">
          What Our Clients Say About Livinterio
        </Heading>
        <Pera className="w-full md:w-[80%] !text-[16px] mt-[15px]">
          Livinterio transforms spaces with unmatched craftsmanship and
          personalized design, creating homes that truly reflect your style and
          comfort.
        </Pera>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] mt-[50px]">
          {data.map((video, index) => (
            <div key={index} className="lg:col-span-6 relative group">
              {/* Preview */}
              {video.type === "youtube" ? (
                <iframe
                  className="w-full h-[250px] lg:h-[300px] 2xl:h-[400px] rounded-lg pointer-events-none"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-[250px] lg:h-[300px] 2xl:h-[400px] rounded-lg object-cover pointer-events-none"
                  src={video.url}
                  poster={video.poster}
                  muted
                  playsInline
                  preload="metadata"
                />
              )}

              
              <div
                className="z-50 absolute inset-0 bg-transparent flex items-center justify-center cursor-pointer transition"
                onClick={() => setSelectedVideo(video)}
              >
                {video.type === "youtube" ? null :
                <Image src="/assets/icons/youtube-icon.png" alt="youtube icon" width={70} height={0} className=""/>}
              </div>

              <Heading className="!text-[20px] !font-[600] font-montserrat mt-[20px] text-center capitalize">
                {video.title}
              </Heading>
            </div> 
          ))}
        </div>
      </Container>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0  flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <Overlay className="opacity-60"/>
          <div
            className="relative bg-black rounded-xl w-[90%] max-w-4xl z-"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="w-full h-0 pb-[56.25%] z-2 relative rounded-lg overflow-hidden">
              {selectedVideo.type === "youtube" ? (
                <iframe
                  src={`${selectedVideo.url}?autoplay=1`}
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default ClientSection;
