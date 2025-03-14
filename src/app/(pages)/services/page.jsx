import Link from "next/link";
import React from "react";
import ServiceCard from "@/components/shared/ServiceCard";

const cardsdetail = [
  {
    image: "/images/services/Custom-Development.jpg",
    title: "Custom Development",
    description:
      "Unleash your business potential with Rank BPO's tailored digital solutions. From innovative web development to seamless software integration, our expert team crafts custom applications that drive efficiency and growth.",
    url: "/services/custom-development",
    iconVideoSrc: "/videos/0lVW4c3VGL0RIs9Ad5.mp4",
  },
  {
    image: "/images/services/Digital-Marketing.jpg",
    title: "Digital Marketing",
    description:
      "Elevate your brand with Rank BPO's cutting-edge digital marketing services. Our comprehensive strategies, including SEO, social media marketing, and PPC, are designed to enhance your online presence and maximize your reach.",
    url: "/services/digital-marketing",
    iconVideoSrc: "/videos/K93ci7841DV532yJ8u.mp4",
  },
  {
    image: "/images/services/Customer-Support.jpg",
    title: "Customer Support",
    description:
      "Deliver exceptional customer experiences with Rank BPO's top-tier customer support services. Our dedicated team provides prompt, effective assistance through various channels, ensuring high satisfaction and loyalty.",
    url: "/services/customer-support",
    iconVideoSrc: "/videos/1Jnw4Nae2Bg39q.mp4",
  },
];

function ServicesPage({ limit }) {
  const cardsToShow = limit ? cardsdetail.slice(0, limit) : cardsdetail;

  return (
    <div className="bg-[#1d2026] pt-10">
      {/* Service Header */}
      <div className="flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase text-blue-600">
          OUR SERVICES
        </span>

        <p
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold text-white text-opacity-85 font_barlow text-center md:w-[35%]"
        >
          Explore Our Services
        </p>
      </div>

      {/* Service Cards Container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-6 p-10 max-w-7xl">
          {cardsToShow.map(
            ({ image, title, description, url, iconVideoSrc }) => (
              <ServiceCard
                key={title}
                image={image}
                title={title}
                description={description}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;