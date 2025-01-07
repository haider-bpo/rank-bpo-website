import React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";

const testimonials = [
  {
    username: "Jawad Saleem",
    comment:
      "Rank BPO is a professional digital marketing agency based in Lahore, Pakistan. They helped me market my product through Facebook and Google Ads in Karachi, Lahore, and Islamabad. ",
  },
  {
    username: "Jibran Aslam ",
    comment:
      "Professional SEOs! I am getting consistent rankings after I gave them the SEO project of my business website. My web organic traffic is cumulative every day. ",
  },
  {
    username: "Zahid Shahzad",
    comment:
      "I have worked with Rank BPO on several projects previously. Right now, my two websites are under contract with the SEO department, and the rankings are constantly getting better. ",
  },
  {
    username: "Sidra Ghaffar",
    comment:
      "As far as local social marketing agencies in Pakistan are concerned, Rank BPO stands at the top.  Thank you for managing our social media pages. ",
  },
];

function Testimonials() {
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center text-black p-10">
        <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
          Testimonials
        </span>

        <h1
          data-aos="fade-down"
          className="mt-10 text-white text-lg md:text-3xl font-semibold"
        >
          This is What Our Partners Say
        </h1>
      </div>

      <div data-aos="fade-up" className="w-[85vw] m-auto">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
}

export default Testimonials;
