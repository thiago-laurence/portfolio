import { HeroSection } from "@/components/core/hero/HeroSection";
import { TimeLine } from "@/components/core/timeline/TimeLine";
import { Gallery } from "@/components/core/gallery/Gallery";

export default function Home() {
  const data = [
          {
            id: 1,
            title: "The",
            description: "md:col-span-1",
            image: "h-60",
            repository: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "The",
            description: "md:col-span-1",
            image: "h-60",
            repository: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "The",
            description: "md:col-span-1",
            image: "h-60",
            repository: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "The",
            description: "md:col-span-1",
            image: "h-60",
            repository: "bg-neutral-100 dark:bg-neutral-800",
          }
        ];

    return (
    <>
      <HeroSection />
      <TimeLine />
      <Gallery data={data}  />
    </>
  );
}
