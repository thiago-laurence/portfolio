import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";


export function TimeLine() {
  const data = [
    {
      title: "2013 - 2019",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Técnico en programación de software en Escuela de educación secundaria técnica N°1, Santa teresita, Buenos Aires.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/eestn1.png"
              alt="EESTN1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/la-costa.png"
              alt="La Costa"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2025",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Licenciatura en Sistemas de Información en Universidad Nacional de La Plata, Buenos Aires.
          </p>
          <div className="grid grid-cols-2 gap-4">
              <Image
                src="/unlp.svg"
                alt="UNLP"
                width={500}
                height={500}
                className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            <Image
              src="/info.png"
              alt="Facultad de Informática"
              width={500}
              height={500}
              className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} title="Historia académica" description="Mi carrera profesional desarrollada a lo largo de los años." />
    </div>
  );
}
