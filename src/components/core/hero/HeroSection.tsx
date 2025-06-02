"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Dock } from "@/components/dock/Dock";

export function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-11/12 flex-col items-center justify-center px-4">
      {/* Left and right lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-10 md:pt-20 md:px-5 gap-10">
        {/* Text Block */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="relative z-10 text-xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
            {"Launch your website in hours, not days"
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
            With AI, you can launch your website in hours, not days. Try our best
            in class, state of the art, cutting edge AI tools to get your website
            up.
          </motion.p>
        </div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="w-full md:w-1/2"
        >
          <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
            <Image
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="object-cover aspect-video"
              width={800}
              height={450}
            />
          </div>
        </motion.div>
      </div>
      {/* Text Block */}
      <div className="flex flex-row w-full md:px-5">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mt-4 max-w-xl text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          With AI, you can launch your website in hours, not days. Try our best
          in class, state of the art, cutting edge AI tools to get your website
          up.
        </motion.p>
      </div>
      <div className="flex flex-row mb-5 w-full">
        <Dock />
      </div>
    </div>
  );
}
