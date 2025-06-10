"use client";

import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconHome,
} from "@tabler/icons-react";
import Image from "next/image";
import { Tooltip as ButtonTooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

const icons = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-green-600 dark:text-green-300" />
      ),
      href: "/",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-600 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/in/thiago-laurence/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-red-600 dark:text-red-300" />
      ),
      href: "https://drive.google.com/file/d/10aDPDCBFjMSkoNHtEF997QYk-nqDm7nl/view?usp=sharing",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-purple-600 dark:text-purple-300" />
      ),
      href: "https://github.com/thiago-laurence",
    },
];

export function HeroSection({ title, description, text, imageUrl, imageAlt }: HeroSectionProps) {
  return (
    <div className="relative mx-auto my-10 flex max-w-11/12 flex-col items-center justify-center px-4">
      {/* Left and right lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-10 md:pt-20 md:px-5 gap-10">
        {/* Text Block */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="relative z-10 text-xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
            {title
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mt-4 max-w-xl text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            {description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mt-4 max-w-xl text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            {text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-6 flex gap-4 justify-center md:justify-start"
          >
            {icons.map((icon, index) => (
              <a href={icon.href} target="_blank" key={index}>
                <ButtonTooltip>
                  <TooltipTrigger>
                    <Button
                      asChild
                      variant="outline"
                      className="cursor-pointer size-14"
                    >
                      {icon.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.title}</p>
                  </TooltipContent>
                </ButtonTooltip>
              </a>
            ))}
          </motion.div>

        </div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="w-full md:w-1/2 justify-center flex items-center"
        >
          <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 shadow-md w-fit">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
