import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from './Heading'
import Pera from './Pera'

const BlogCard = ({ data, detailsPage }) => {
  const {image , type,date,title,description,slug} = data;
  const titleLimit = 8;
  const peraLimit = 10;

  
  // Limit title to 10 words
  const limitedTitle = title
    .split(' ')
    .slice(0, titleLimit)
    .join(' ') + (title.split(' ').length > titleLimit ? '...' : '');

   // Limit to 100 words
   const limitedDescription = description
   .split(' ')
   .slice(0, peraLimit)
   .join(' ') + (description.split(' ').length > peraLimit ? '...' : '');
  return (
    <div className=" overflow-hidden transition-shadow duration-300 ">
      {/* Image Section */}
      <div className={`relative w-full  ${detailsPage ? 'h-[400px]' : 'h-48'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[10px]"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {/* Title and Date Row */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="bg-[var(--text-primary)] text-white rounded-[5px] py-[7px] px-[15px] text-[12px]">{type}</h3>
          <span className="text-[12px] text-back">{date}</span>
        </div>
         <Heading className='!text-left md:!text-[18px] my-[20px]'>{detailsPage ? title : limitedTitle}</Heading>
        {/* Description */}
        <Pera className='mb-[20px] !text-justify'>{detailsPage ? description : limitedDescription}</Pera>

        {/* View Details Button */}
        {!detailsPage && (
        <Link 
          href={`/blog-details?slug=${slug}`}
          className="inline-block pb-[10px] text-[var(--text-primary)] transition-colors duration-300 border-b border-[var(--text-primary)]"
        >
          View Details <Image src="/assets/icons/next-arrow.webp" alt='next arrow' width={20} height={0} className='h-auto inline-block ml-[5px]'/>
        </Link>
        )}
      </div>
    </div>
  )
}

export default BlogCard
