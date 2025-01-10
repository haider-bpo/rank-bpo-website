"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Globe,
  Smartphone,
  Gamepad2,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServiceDetails({
  title,
  subtitle,
  overview,
  processes,
  technologies,
  benefits,
  imageUrl,
  subServices,
}) {
  return (
    <div className="min-h-screen bg-[#1A1D21] text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[rgb(17,24,39)] text-white pt-36 pb-16 px-4"
      >
        <div className="text-center mx-auto">
          {/* <Link
            href="/services"
            className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground mb-8 transition-transform hover:-translate-x-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground">{overview}</p>
        </motion.section>

        {/* Sub Services Section */}
        {subServices && (
          <motion.section
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices?.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#252931] border-[#2E3239] h-full transition-colors hover:border-[#0066FF]/50">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#0066FF]/10 p-2 rounded-full">
                          {service.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-400 mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Process Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process) => (
              <motion.div
                key={process.number}
                variants={fadeIn}
                className="relative"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold">
                    {process.number}
                  </div>
                  {process.number < processes.length && (
                    <div className="hidden lg:block h-[2px] flex-1 bg-[#2E3239] ml-4" />
                  )}
                </div>
                <h3 className="font-semibold">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-[#252931] border-[#2E3239] h-full transition-colors hover:border-[#0066FF]/50">
                  <h3 className="font-semibold mb-4">{tech.category}</h3>
                  <p className="text-gray-300">{tech.items.join(", ")}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeIn}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 bg-[#0066FF]/10 rounded-full p-1 transition-colors group-hover:bg-[#0066FF]/20">
                  <Check className="h-4 w-4 text-[#0066FF]" />
                </div>
                <span className="text-gray-200 font-medium">
                  {benefit.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Image Section */}
        {/* <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt="Service visualization"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </motion.section> */}
      </div>
    </div>
  );
}
