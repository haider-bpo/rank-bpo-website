"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ServiceCard = ({ data }) => {
  const { title, subtitle, technologies, benefits } = data;

  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full" // Added to ensure full height
    >
      <Card className="bg-[#252931] border-[#2E3239] overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[#0066FF]/10 hover:border-[#0066FF]/50">
        <CardHeader className="bg-gradient-to-br from-[#0066FF] to-[#0044AA] text-white p-6">
          <div className="flex items-center space-x-4">
            {/* <div className="bg-white/10 p-3 rounded-full">
                <Laptop className="h-6 w-6" />
              </div> */}
            <div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription className="text-white/80 mt-1">
                {subtitle}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4 flex-grow">
          {/* Technologies Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <React.Fragment key={tech.category}>
                  {tech.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-[#0066FF]/10 text-[#0066FF]"
                    >
                      {item}
                    </Badge>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Key Benefits
            </h3>
            <ul className="text-gray-300 space-y-1">
              {benefits.slice(0, 3).map((benefit) => (
                <li key={benefit.title} className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 text-[#0066FF]" />
                  <span>{benefit.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`${pathname}/${data.slug}`} passHref>
            <Button className="w-full bg-[#0066FF] hover:bg-[#0055DD] text-white">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
