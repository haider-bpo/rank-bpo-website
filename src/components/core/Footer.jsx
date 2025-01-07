"use client";
import Link from "next/link";
import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import PrivacyPolicy from "../shared/privacy-policy";
import Image from "next/image";

const quickLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Careers",
    url: "/careers",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    title: "Blogs",
    url: "",
  },
  {
    title: "Privacy Policy",
    url: "",
  },
];

const services = [
  {
    title: "Custom Development",
    url: "/services/custom-development",
  },
  {
    title: "Digital Marketing",
    url: "/services/digital-marketing",
  },
  {
    title: "Customer Support",
    url: "/services/customer-support",
  },
];
const projects = [
  {
    title: "Beauteaze",
    url: "https://beauteaze.com/",
    imageUrl: "/images/projects/1.png",
  },
  {
    title: "merijagah",
    url: "https://merijagah.com/",
    imageUrl: "/images/projects/2.png",

  },
];

function Footer() {
  return (
    <footer className="bg-base-200">
      <footer className="footer bg-base-200 text-base-content p-10 md:grid md:grid-cols-4 font_barlow">
        {/* Quick link  */}
        <nav className="md:ms-10" data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA]">Quick Links</h6>

          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#005BEA] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* service  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA] z-10">Services</h6>
          {services.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#005BEA] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Projects*/}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA] z-10">Projects</h6>
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.url}
              className="text-decoration-none hover:text-[#005BEA] hover:font-semibold"
              target="_blank"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={70}
                height={100}
                objectFit="contain"
              />
            </Link>
          ))}
        </nav>

        {/* contact us  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA]">Contact Us</h6>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-blue-600" />
              <p>03000332782</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-blue-600" />
              <p>04232322782</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMailOutline className="text-lg  text-blue-600" />
              <p>info@rankbpo.com</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center ">
              <IoLocationOutline className="text-lg text-blue-600" />
              <Link
                href={"https://maps.app.goo.gl/ddtqbe5y91jeqoZP9"}
                target="_blank"
              >
                Plot 90, Block D2, Phase 1 Johar Town, Lahore
              </Link>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content p-10 max-w-xl m-auto font_barlow">
        {/* company detail  */}
        <aside data-aos="fade-up">
          <div className="flex-shrink-0 w-40 m-auto">
            <Link href="/" className="ms-0 h-8 md:h-12 ">
              <img
                src="/images/Rank-BPO-PVT-LTD-LOGO.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <p className="text-justify">
            Rank BPO is a top-ranked digital marketing agency, expertly
            maximizing the income streams of our customers within Pakistan and
            throughout the globe. In our hands lies the power to grow your
            business!
          </p>

          {/* social media link  */}
          <div className="flex justify-center items-center gap-x-2 m-auto">
            <Link target="_blank" href={"https://maps.app.goo.gl/ddtqbe5y91jeqoZP9"}>
              <IoLocationOutline className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.facebook.com/rankbpo/"}>
              <FaFacebook className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/rankbpo/"}>
              <RiInstagramFill className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@RankBPO"}>
              <FaYoutube className="text-4xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/company/80291042/admin/feed/posts/"
              }
            >
              <FaLinkedin className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.pinterest.com/rankbpo1/"}>
              <FaPinterest className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.tiktok.com/@rankbpo"}>
              <FaTiktok className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
          </div>
        </aside>
      </footer>

      {/* <div className="flex justify-center bg-[rgb(17,24,39)]">
        <PrivacyPolicy />
      </div> */}

      <div className="footer text-base-content flex justify-center p-5 bg-[rgb(17,24,39)]">
        <span className="text-lg font-semibold text-blue-600">
          © 2021-25 Rank BPO . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
