import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

function HeroSection() {
  return (
    <div className="overflow-x-hidden pb-10">
      <HeroParallax products={products} />
    </div>
  );
}

export default HeroSection;

export const products = [
  {
    title: "services",
    link: "/services",
    thumbnail: "/images/589-scaled-1-1536x1024-1.jpg",
  },
  {
    title: "Cursor",
    link: "/services/custom-development",
    thumbnail: "/images/afsdcfgs-scaled-1-1536x1024-1-1.jpg",
  },
  {
    title: "Rogue",
    link: "/services/customer-support",
    thumbnail: "/images/asfdcasdf-scaled-1-1536x1024-1.jpg",
  },

  {
    title: "Editorially",
    link: "/services/digital-marketing",
    thumbnail: "/images/asfdfdsaq-scaled-1-1536x1024-1.jpg",
  },
  {
    title: "Editrix AI",
    link: "/services/custom-development/automation",
    thumbnail:
      "/images/business-colleagues-collaborating-and-discussing-project-plans-e1603078432543-1.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/services/customer-support/appointment-setting",
    thumbnail:
      "/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg",
  },

  {
    title: "Algochurn",
    link: "/services/digital-marketing/app-store-optimization-and-marketing",
    thumbnail: "/images/business-meeting-in-modern-conference-room.jpg",
  },
  {
    title: "Aceternity UI",
    link: "/services/custom-development/crm-development",
    thumbnail:
      "/images/creative-business-people-working-on-business-project-1536x1024-1.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "/services/customer-support/chat-support",
    thumbnail: "/images/dsadsadsadas-scaled-1-1536x1024-1.jpg",
  },
  {
    title: "SmartBridge",
    link: "/services/digital-marketing/content-writing-and-marketing",
    thumbnail: "/images/fdsacvfgd-scaled-1-1536x1024-1.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/services/custom-development/customization",
    thumbnail: "/images/fsadggfdsz-scaled-1-1536x1024-1.jpg",
  },

  {
    title: "Creme Digital",
    link: "services/customer-support/crm-support",
    thumbnail: "/images/managers-analyzing-reports-1536x1024-1.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "/services/digital-marketing/conversion-rate-optimization",
    thumbnail: "/images/Mockup-3.jpg",
  },
  {
    title: "Invoker Labs",
    link: "/services/custom-development/web-development",
    thumbnail: "/images",
  },
  {
    title: "E Free Invoice",
    link: "/services/customer-support/chat-support",
    thumbnail:
      "/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg",
  },
];
