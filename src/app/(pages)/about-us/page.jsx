"use client";
import NumberAnimation from "@/components/shared/NumberAnimation";
import Testimonials from "@/components/shared/testimonials";
import { usePathname } from "next/navigation";
import React from "react";
import { RiCustomerService2Fill, RiTeamFill } from "react-icons/ri";

function AboutUsPage() {
  const pathname = usePathname();
  const showTestimonials = pathname === "/about-us";

  return (
    <div className="bg-base-200 pt-10">
      {/* about us  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-10 p-10">
        {/* left side  */}

        <div className="text-white">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
            About Us
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-lg md:text-3xl font-semibold"
          >
            We are Where People Generate Millions in Collaboration
          </h1>

          <p
            data-aos="fade-up"
            className="mt-5 text-md text-opacity-85 text-justify font_barlow"
          >
            Rank BPO is a top-ranked digital marketing agency, expertly
            maximizing the income streams of our customers within Pakistan and
            throughout the globe. We help our customers by targeting their
            business audience and converting them into returning customers. Do
            you, too, want to grow your business? No biggie! We can transform
            your small-scale business into a multi-million-dollar company!
          </p>
        </div>

        {/* right side  */}
        <div className="flex justify-center mt-10">
          <img
            src="/images/about-pic.jpeg"
            alt="Who We Are"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>

      {/* counter section  */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around py-5 pb-10 text-blue-600">
        <div className="flex flex-col justify-center ">
          <div className="flex items-center gap-2 justify-center text-xl">
            <RiCustomerService2Fill className="text-4xl md:text-6xl mt-3" />
            <NumberAnimation end={2500} suffix={"+"} />
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
          <img
            src="/images/ceo-pic.jpg"
            alt="Who We Are"
            className="rounded-lg w-full h-full"
          />
        </div>

        {/* right side  */}
        <div className="text-white">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 text-blue-600">
            Message From CEO
          </span>

          <p
            data-aos="fade-up"
            className="mt-5 text-md text-opacity-85 text-justify font_barlow"
          >
            At Rank BPO, our mission is simple: to enable businesses by
            optimizing their processes and enhancing efficiency. Since day one,
            our focus has been on providing innovative solutions, and we have
            always delivered without fail. With our team, we have not only
            fulfilled but surpassed all our client&apos;s expectations. The
            modern corporate landscape requires flexibility and accuracy with an
            unwavering commitment. And that&apos;s where we step in. With a team
            of committed experts, Rank BPO has effectively turned challenges
            into opportunities. We prioritize keeping your business at the top
            of a competitive market. As we look to the future, we remain
            committed to fostering innovation and driving success for our
            clients. Thank you for trusting Rank BPO as your partner in success.
            Together, let&apos;s achieve greatness. Atif Iqbal CEO, Rank BPO
          </p>
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
      {showTestimonials && <Testimonials />}
    </div>
  );
}

export default AboutUsPage;
