"use client";
import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import NumberAnimation from "@/components/shared/NumberAnimation";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import React from "react";
import { RiCustomerService2Fill, RiTeamFill } from "react-icons/ri";

function AboutUsPage({ showHeroSection = true }) {
  return (
    <div className="bg-base-200">y

      {showHeroSection && <ImagesSliderShower title="About Us" pageName="About Us" />}

      {/* about us  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-10  p-10">
        {/* left side  */}

        <div className="text-white">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
            About Us
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-lg md:text-3xl font-semibold">
            Our Passion Is To Work, Build, and Grow Businesses through Local
            Leads Generation
          </h1>

          <p
            data-aos="fade-up"
            className="mt-5 text-md text-opacity-85 text-justify font_barlow"
          >
            Local Leads Generation (LLG) is a global cooperation that delivers
            perfection in IT, Business Consulting, and Outsourcing Services. We
            are a company of highly qualified minds with years of professional
            experience and expertise.
          </p>
        </div>

        {/* right side  */}
        <div className="flex justify-center mt-10">
          <MediaPlayer src={"/videos/creative-idea.json"} />
        </div>
      </div>

      {/* counter section  */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around py-5 pb-10 text-blue-600">
        <div className="flex flex-col justify-center ">
          <div className="flex items-center gap-2 justify-center text-xl">
            <RiCustomerService2Fill className="text-4xl md:text-6xl mt-3" />
            <NumberAnimation end={22345} suffix={"+"} />
          </div>

          <p className="text-center text-xl text-white">Happy Customers</p>
        </div>

        <div className="flex flex-col justify-center ">
          <div className="flex items-center gap-2 justify-center text-xl">
            <RiTeamFill className="text-4xl md:text-6xl" />
            <NumberAnimation end={500} suffix={"+"} />
          </div>

          <p className="text-center text-xl text-white">Team Members</p>
        </div>
      </div>

      {/* Who We Are  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-10  p-10">
        {/* left side  */}
        <div className="flex justify-center">
          <MediaPlayer src={"/videos/time-management.json"} />
        </div>

        {/* right side  */}
        <div className="text-white">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
            Who We Are
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-semibold">
            Business Potential Lies in Human Connection
          </h1>

          <p
            data-aos="fade-up"
            className="mt-5 text-md text-opacity-85 text-justify font_barlow"
          >
            Local Leads Generation is committed to delivering lasting value to
            our clients. We wield technology and effectuate staunch practices to
            deliver a range of cut-above, cost-effective information technology
            results from global locations that enable customers to achieve their
            business goals.
          </p>

          {/* <div className="grid grid-cols-2 gap-5 p-10">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/icons/business-direction.svg"
                alt="My Icon"
                width="100"
                height="100"
              />
              <h2 className="text-lg font-semibold">Data-Driven Decisions</h2>
              <p className="text-md text-center">
                With our strategies, we turn complex problems into growth
                opportunities.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/icons/ideas.svg"
                alt="My Icon"
                width="100"
                height="100"
              />
              <h2 className="text-lg font-semibold">Out-Smarting Ideas</h2>
              <p className="text-md text-center">
              We have united diverse intellectual minds to work harmoniously for your business outgrowth.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/icons/trust.svg"
                alt="My Icon"
                width="100"
                height="100"
              />
              <h2 className="text-lg font-semibold">Infallible Trust</h2>
              <p className="text-md text-center">
              LLG is dedicated to total transparency and the satisfaction of our clients.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/icons/24-support.svg"
                alt="My Icon"
                width="100"
                height="100"
              />
              <h2 className="text-lg font-semibold">24/7 Support</h2>
              <p className="text-md text-center">
              We are here, ready to tackle any problem that comes your way to growth anytime.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* icons  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/icons/business-direction.svg"
            alt="My Icon"
            width="100"
            height="100"
            className="mb-5"
          />
          <h2 className="text-lg font-semibold">Data-Driven Decisions</h2>
          <p className="text-md text-center">
            With our strategies, we turn complex problems into growth
            opportunities.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/icons/ideas.svg"
            alt="My Icon"
            width="100"
            height="100"
            className="mb-5"
          />
          <h2 className="text-lg font-semibold">Out-Smarting Ideas</h2>
          <p className="text-md text-center">
            We have united diverse intellectual minds to work harmoniously for
            your business outgrowth.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/icons/trust.svg"
            alt="My Icon"
            width="100"
            height="100"
            className="mb-5"
          />
          <h2 className="text-lg font-semibold">Infallible Trust</h2>
          <p className="text-md text-center">
            LLG is dedicated to total transparency and the satisfaction of our
            clients.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/icons/24-support.svg"
            alt="My Icon"
            width="100"
            height="100"
            className="mb-5"
          />
          <h2 className="text-lg font-semibold">24/7 Support</h2>
          <p className="text-md text-center">
            We are here, ready to tackle any problem that comes your way to
            growth anytime.
          </p>
        </div>
      </div>

      {/* testimonials */}
      <div className="pb-10">
        <div className="flex flex-col justify-center items-center text-black p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
            Testimonials
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-white text-3xl font-semibold">
            What Clients Say About Our Car detailing Service?
          </h1>
        </div>

        <div data-aos="fade-up" className="w-[85vw] m-auto">
          <TestimonialCarousel />
        </div>
      </div>

    </div>
  );
}

export default AboutUsPage;
