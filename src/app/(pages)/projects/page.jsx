import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

function ProjectsPage({ showHeroSection = true }) {
  return (
    <div>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title="Projects" pageName="Projects"/>}

      <div className="flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase text-blue-600 border-b-4">
          Projects
        </span>

        <p className="text-4xl font-semibold text-md text-opacity-85 font_barlow text-center md:w-[35%]">
          Explore Our Projects
        </p>
      </div>

      <div className="h-[250vh] py-10 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

export default ProjectsPage;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Auto Detailing</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Welcome to Benedetto Auto Detail, your one-stop solution for premium
        auto detailing services. We are a team of experienced...
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ceramic Coating
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        CRYSTAL SERUM CERAMIC COATING provides a Supreme Hard Protection,
        Scratch & Swirls Resistant. This Coating Provides...
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Interior Coating
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        LEATHER GUARD COATING is made out of nanotechnology and is a Super
        Hydro-Phobic Coating that Protects, Leather...
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/fdsacvfgd-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/dsadsadsadas-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-2",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },
  
];

const cards2 = [
  {
    id: 1,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 3,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    id: 4,
    content: <SkeletonEight />,
    className: "md:col-span-2",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },
];
