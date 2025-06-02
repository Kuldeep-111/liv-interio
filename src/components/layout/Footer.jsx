import React from 'react';
import Section from '../utilities/Section';
import Container from '../utilities/Container';
import Link from 'next/link';
import Image from 'next/image';
import Pera from '../utilities/Pera';
import Heading from '../utilities/Heading';

// Config Data
const FooterLinks = [
  { link: '/', label: 'Home' },
  { link: '/about-us', label: 'About Us' },
  { link: '/services', label: 'Services' },
  { link: '/projects', label: 'Projects' },
  { link: '/blogs', label: 'Blogs' },
  { link: '/contact-us', label: 'Contact Us' },
];

const latestBlog = [
  { slug: '/blog/first', content: '5 Benefits of Hiring Professional Interior Designing Company' },
  { slug: '/blog/second', content: '5 Benefits of Hiring Professional Interior Designing Company' },
  { slug: '/blog/third', content: '5 Benefits of Hiring Professional Interior Designing Company' },
];

const whatWeDo = [
  { slug: '/services?category=consultancy', label: 'Consultancy' },
  { slug: '/services?category=turnkey-solution', label: 'Turnkey Solutions' },
  { slug: '/services?category=residential-design', label: 'Residential Design' },
  { slug: '/services?category=office-interiors', label: 'Office Interiors' },
];

const contactLink = [
  {link:"", label: 'C-67, 2nd Floor, Sector 63, Noida', icon: '/assets/icons/location.webp', alt: 'Location' },
  {link:"", label: '+91-9071000645, +91-8510021041', icon: '/assets/icons/phone.webp', alt: 'Phone' },
  {link:"", label: 'livinterio@gmail.com', icon: '/assets/icons/mail.webp', alt: 'Mail' },
];

const sociolMedia = [
    {link:'https://www.facebook.com/livinterio',icon:'/assets/icons/facebook.webp',alt:'Facebook'},
    {link:'https://www.instagram.com/liv.interio?igsh=MXFuOWU5ZGpwMnAyNQ==',icon:'/assets/icons/instagram.webp',alt:'Instagram'},
    {link:'https://www.youtube.com/@livinteriosocial',icon:'/assets/icons/youtube.webp',alt:'Youtube'},
    {link:'https://www.linkedin.com/company/liv-interio/',icon:'/assets/icons/linkedin.webp',alt:'LinkedIn'}
]

// Reusable Column Component
const FooterColumn = ({ title, items ,whatWeDo=false, className=""}) => (
  <div className={className}>
    <Heading className="font-montserrat font-[600] !text-left md:!text-left !text-[14px] mb-[25px] uppercase">
      {title}
    </Heading>
    <div className="flex flex-col">
      {items.map((item, index) => {
        const href = item.link || item.slug || '#';
        return (
          <Link
            key={item.slug || item.link || index}
            href={href}
            className={`border-b border-[#ecebeb]  last:border-none ${whatWeDo ? 'block w-full' : 'block w-full' }  pb-[10px] mb-[10px]`}
          >
            <Pera className={`hover:text-[var(--text-primary)] !leading-[20px] !text-left  !tracking-[2px] ${whatWeDo ? ' !text-[14px]' : '!text-[12px]'} flex gap-[10px]  items-center`}>
              {item.icon && (
                <Image src={item.icon} alt={item.alt} width={18} height={18} />
              )}
              {item.content || item.label}
            </Pera>
          </Link>
        );
      })}
    </div>
  </div>
);

const Footer = () => {
  return (
    <Section as="footer" id="footer" className="!pb-[30px]">
      <Container>
       

        {/* Navigation Links */}
        {/* <ul className="flex items-center justify-center gap-[15px] md:gap-0 border-t border-b border-[var(--text-primary)] py-[20px] mb-[40px] flex-wrap">
          {FooterLinks.map((links, index) => (
            <li
              key={index}
              className="border-r last:border-none border-[var(--text-primary)] px-[20px]"
            >
              <Link
                href={links.link}
                className="text-[var(--text-primary)] text-[12px] md:text-[14px] uppercase font-montserrat tracking-[2px] font-[600]"
              >
                {links.label}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-12">
          <div className='sm:col-span-12 md:col-span-5'>
             {/* Logo and Description */}
        <div className="mb-4 text-left w-full">
          <Image
            src="/assets/images/logo-black-2.webp"
            alt="Livinterio Logo"
            width={190}
            height={60}
            className="inline-block mt-[-10px] mb-[10px]"
          />
        </div>
        <Pera className="text-justify md:!text-left mb-[20px]">
          Livinterio.com is your trusted source for elegant, high-quality furniture and décor. Explore an ever-growing selection of modern, contemporary, and timeless pieces designed for every corner of your home. 
        </Pera>
        <div className='w-full md:w-fit flex items-end justify-center md:justify-start gap-[5px] '>
                {sociolMedia.map((data,index)=>(
                    <Link key={data.link} href={data.link} target='_blank' className='p-[5px] border-transparent border hover:border-[var(--text-primary)] transition-all duration-300 ease-in-out'><Image src={data.icon} alt={data.alt} width={index ==2 || index ==3 ? 24 :  18} height={index ==2 || index ==3 ? 24 : 18}/></Link>
                ))}
            </div>
          </div>
          <FooterColumn title="What we do" items={whatWeDo} whatWeDo={true} className='sm:col-span-6 md:col-span-3'/>
          <FooterColumn title="Contact Us" items={contactLink} className='sm:col-span-6 md:col-span-4'/>
        </div>

        {/* copyright container */}
        <div className='flex justify-between flex-wrap md:flex-nowrap border-t border-[var(--text-primary)] mt-[10px] pt-[10px]'>
            <Pera className=''>© Copyright 2025 - LivInterio | Design by GTF Technologies</Pera>
            <div><Link href="#" className='hover:text-[var(--text-primary)] font-montserrat text-[12px]'>Disclaimer </Link> | <Link href="#" className='hover:text-[var(--text-primary)] font-montserrat text-[12px]'>Privacy Policy</Link></div>
            
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
