"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Tooltip as ButtonTooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip } from "@/components/core/tooltip/ToolTip";
import { Button } from "@/components/ui/button";
import { CardObject } from "@/types/types";



type CardObjectProps = {
    cardObject: CardObject;
    className?: string;
    message: string;
}

export function Card({ cardObject, className, message }: CardObjectProps) {
  return (
    <CardContainer className={`inter-var ${className}`}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            {cardObject.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            {cardObject.description}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src={cardObject.image}
            height="1000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={cardObject.title}
            loading="lazy"
          />
        </CardItem>
        <div className="flex justify-center my-5">
            <CardItem
              translateZ={50}
            >
              <Tooltip items={cardObject.items} animate={true} />
            </CardItem>
        </div>
        <div className="flex justify-end items-center">
          <CardItem
            translateZ={20}
            as="a"
            href={cardObject.link}
            target="__blank"
          >
            <ButtonTooltip>
              <TooltipTrigger>
                <div>
                  <Button asChild
                    variant="outline"
                    className="cursor-pointer size-14"
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      height="40"
                      width="40"
                      alt={cardObject.title}
                      loading="lazy"
                    />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{message}</p>
              </TooltipContent>
            </ButtonTooltip>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}