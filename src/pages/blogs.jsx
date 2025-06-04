import Hero from "@/components/Hero";
import BlogCard from "@/components/utilities/BlogCard";
import Container from "@/components/utilities/Container";
import LatestBlog from "@/components/utilities/LatestBlog";
import Pagination from "@/components/utilities/Pagination";
import SearchInput from "@/components/utilities/SearchInput";
import Section from "@/components/utilities/Section";
import React, { useState } from "react";

const blogData = [
  {
    image: "/assets/images/blogs/blog-1.jpg",
    alt: "blog 1",
    type: "Interior Design",
    title:
      "Why Hiring an Interior Designer in Noida Extension is Worth the Investment?",
    date: "January 31, 2025",
    description:
      "Noida Extension is now identified as a suitable residential location for families, the working class, and all those who are keen on owning modern houses at a reasonable cost. The growth of more people settling in this soon-to-be busy estate has seen a heightened need for quality interiors.",
    slug: "blog-1",
  },
  {
    image: "/assets/images/blogs/blog-2.jpg",
    alt: "blog 2",
    type: "Interior Style",
    title: "The Best Interior Designer in Noida for Modern Spaces",
    date: "January 24, 2025",
    description:
      "If you want to redecorate the living or working environment and make it look like a piece of art from a modern art gallery you’ve come to the right place. Noida is one of the fastest-growing cities with innovative architecture, and therefore, many gifted interior designers work here in India.",
    slug: "blog-2",
  },
  {
    image: "/assets/images/blogs/blog-3.jpg",
    alt: "blog 3",
    type: "Interior Design",
    title:
      "How to Choose the Best Interior Designer in Greater Noida for Your Dream Home?",
    date: "January 20, 2025",
    description:
      "Your home is supposed to be your refuge, the place that has to be in harmony with your personality and your manners of living. There is no better person to help you design your dream home from the floor to the roof than your interior designer. ",
    slug: "blog-3",
  },
];
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Fetch data or update URL query here if needed
  };
  return (
    <>
      <Hero imageSrc="/assets/images/blogs/blog-banner.webp" title="Blogs" />
      <Section id="Blogs" className="overflow-hidden relative before:absolute before:bottom-0 before:left-[7.5%] before:w-[85%] before:h-[0.5px] before:bg-[var(--text-primary)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px]">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[40px]">
                {blogData.map((blog, index) => (
                  <div
                    key={index}
                    className={`md:col-span-6 ${
                      index === 0 || index === 1 ? "mt-0" : "mt-[30px]"
                    }`}
                  >
                    <BlogCard data={blog} />
                  </div>
                ))}
              </div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="lg:col-span-4">
              <SearchInput
                className="mb-[30px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items..."
              />
              <LatestBlog />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Blogs;
