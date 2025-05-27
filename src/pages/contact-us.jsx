import Hero from "@/components/Hero";
import Container from "@/components/utilities/Container";
import Form from "@/components/utilities/Form";
import Heading from "@/components/utilities/Heading";
import Section from "@/components/utilities/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const contact = () => {

const detailsData = [
  {
    title: "ADDRESS",
    items: [
      {
        label: "C-67, 2nd Floor, Sector 63, Noida",
        link: "https://maps.google.com/?q=C-67+Sector+63+Noida"
      },
    ],
  },
  {
    title: "Phone",
    items: [
      { label: "+91-9071000645", link: "tel:+919071000645" },
      { label: "+91-8510021041", link: "tel:+918510021041" },
    ],
  },
  {
    title: "Email",
    items: [
      { label: "livinterio@gmail.com", link: "mailto:livinterio@gmail.com" },
    ],
  },
];

  return (
    <>
      <Hero
        imageSrc="/assets/images/about-us/about-banner.webp"
        title="Contact Us"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            <div className="md:col-span-6">
              <div>
                <Heading className="uppercase !text-left md:!text-[24px]">
                  Get In Touch
                  <span className="inline-block ms-[20px] w-full max-w-[150px] h-[1px] bg-[var(--text-primary)]"></span>
                </Heading>
                <Heading className="uppercase !text-left ms-[70px] md:ms-[150px] mt-[10px] md:mt-[20px]">
                  With Us
                </Heading>
              </div>
              <Form
                className="mt-[50px]"
              />
            </div>
            <div className="md:col-span-6">
              <Image
                src="/assets/images/contact-us/map.webp"
                alt="src"
                width={400}
                height={0}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-[var(--background-secondary)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
            {detailsData.map((section, index) => (
              <div className="md:col-span-4 text-center" key={index}>
                <Heading className="uppercase pb-[20px] md:!text-[24px]  px-[20px] mb-[25px] !text-center w-fit mx-auto border-b border-[var(--text-primary)]">
                  {section.title}
                </Heading>
                {section.items.map((item, idx) => (
                  <>
                  {idx > 0 && <span className="mx-[5px]">,</span>}
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-black text-[14px] 2xl:text-[18px] 2xl:leading-[50px] tracking-[2px] lowercase "
                    target="_blank"
                  >
                    {item.label}
                  </Link>
                  </>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default contact;
