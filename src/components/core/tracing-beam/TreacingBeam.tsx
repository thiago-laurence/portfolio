"use client";
import React from "react";

import { TracingBeam as  TracingBeamComponent } from "@/components/ui/tracing-beam";
import Image from "next/image";

interface TracingBeamProps {
    id: string,
    items: {
        badge: string;
        rows: {
            title: string;
            description: string;
            content: React.ReactNode;
            image?: string;
        }[];
    }[];
}

export function TracingBeam({ items, id }: TracingBeamProps) {
  if (!items || items.length === 0) return null;

  return (
    <TracingBeamComponent className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative" id={id}>
        {items.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            {item.rows.map((rowItem, rowIndex) => (
                <div key={`row-${rowIndex}`} className="hover:bg-accent rounded-lg p-4 transition-colors">
                    <div className="my-4">
                        <p className="text-xl font-bold">
                            {rowItem.title}
                        </p>
                        <p className="text-lg text-muted-foreground">
                            {rowItem.description}
                        </p>
                    </div>

                    <div className="text-sm prose prose-sm dark:prose-invert">
                    {rowItem?.image && (
                        <Image
                            key={`image-${index}`}
                            src={rowItem.image}
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                    )}
                    <div className="dark:text-slate-300">
                      {rowItem.content}
                    </div>
                </div>
            </div>
            ))}
          </div>
        ))}
      </div>
    </TracingBeamComponent>
  );
}
