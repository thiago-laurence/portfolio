import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

interface DockProps {
  icons: {
    title: string,
    icon: React.ReactNode,
    href: string,
  }[];
}

export function Dock({ icons }: DockProps) {
  if (!icons || icons.length === 0) return <p>No icons provided</p>;
  
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileDock={false}
        items={icons}
      />
    </div>
  );
}
