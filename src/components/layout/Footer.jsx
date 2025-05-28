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
  { link: '/project', label: 'Projects' },
  { link: '#', label: 'Blogs' },
  { link: '/contact-us', label: 'Contact Us' },
];

const latestBlog = [
  { slug: '/blog/first', content: '5 Benefits of Hiring Professional Interior Designing Company' },
  { slug: '/blog/second', content: '5 Benefits of Hiring Professional Interior Designing Company' },
  { slug: '/blog/third', content: '5 Benefits of Hiring Professional Interior Designing Company' },
];

const whatWeDo = [
  { slug: '/consultancy', label: 'Consultancy' },
  { slug: '/turnkey-solutions', label: 'Turnkey Solutions' },
  { slug: '/residential-design', label: 'Residential Design' },
  { slug: '/office-interiors', label: 'Office Interiors' },
];

const contactLink = [
  {link:"", label: 'C-67, 2nd Floor, Sector 63, Noida', icon: '/assets/icons/location.webp', alt: 'Location' },
  {link:"", label: '+91-9071000645, +91-8510021041', icon: '/assets/icons/phone.webp', alt: 'Phone' },
  {link:"", label: 'livinterio@gmail.com', icon: '/assets/icons/mail.webp', alt: 'Mail' },
];

const sociolMedia = [
    {link:'',icon:'/assets/icons/facebook.webp',alt:'Facebook'},
    {link:'',icon:'/assets/icons/instagram.webp',alt:'Instagram'},
    {link:'',icon:'/assets/icons/youtube.webp',alt:'Youtube'},
    {link:'',icon:'/assets/icons/x.webp',alt:'X'}
]

// Reusable Column Component
const FooterColumn = ({ title, items ,whatWeDo=false, className=""}) => (
  <div className={className}>
    <Heading className="font-montserrat font-[600] !text-left md:!text-center !text-[14px] mb-[25px] uppercase">
      {title}
    </Heading>
    <div className="flex flex-col">
      {items.map((item, index) => {
        const href = item.link || item.slug || '#';
        return (
          <Link
            key={item.slug || item.link || index}
            href={href}
            className={`border-b border-[#ecebeb] ${whatWeDo ? 'block w-full md:w-auto md:inline-block mx-auto' : 'block w-full' }  pb-[10px] mb-[10px]`}
          >
            <Pera className={` !leading-[20px] !text-left  !tracking-[2px] ${whatWeDo ? 'md:!text-center !text-[14px]' : '!text-[12px]'} flex gap-[10px]  items-center`}>
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
        {/* Logo and Description */}
        <div className="mb-4 text-center w-full">
          <Image
            src="/assets/images/logo-black.webp"
            alt="Livinterio Logo"
            width={250}
            height={60}
            className="inline-block"
          />
        </div>
        <Pera className="md:px-[5%] text-justify md:text-center mb-[20px]">
          Livinterio.com is an online home décor store that offers customers a
          wide selection of furnishings and accessories. Due to its contemporary
          and trendy designs, Livinterio.com, which was founded in 2017, has
          rapidly become a favorite among upscale homeowners.
        </Pera>

        {/* Navigation Links */}
        <ul className="flex items-center justify-center gap-[15px] md:gap-0 border-t border-b border-[var(--text-primary)] py-[20px] mb-[40px] flex-wrap">
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
        </ul>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-12">
          <FooterColumn title="Latest Blogs" items={latestBlog}  className='sm:col-span-12 md:col-span-4'/>
          <FooterColumn title="What we do" items={whatWeDo} whatWeDo={true} className='sm:col-span-6 md:col-span-4'/>
          <FooterColumn title="Contact Us" items={contactLink} className='sm:col-span-6 md:col-span-4'/>
        </div>

        {/* copyright container */}
        <div className='flex justify-between flex-wrap md:flex-nowrap border-t border-[var(--text-primary)] mt-[20px] pt-[10px]'>
            <Pera className='mx-auto'>© Copyright 2025 - LivInterio | Design by GTF Technologies</Pera>
            <div className='w-full md:w-fit flex items-center justify-center md:justify-start gap-[15px] '>
                {sociolMedia.map((data,index)=>(
                    <Link key={data.link} href={data.link}><Image src={data.icon} alt={data.alt} width={18} height={18}/></Link>
                ))}
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
