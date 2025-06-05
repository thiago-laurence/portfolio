"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Item } from "@/types/types";

type TooltipProps = {
  items: Item[];
  animate: boolean;
};

export function Tooltip({ items, animate }: TooltipProps) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={items} animate={animate} />
    </div>
  );
}
