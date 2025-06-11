import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface AnimatedGalleryProps {
    photos: {
        src: string;
        alt: string;
    }[];
}

export function AnimatedGallery({ photos }: AnimatedGalleryProps) {
  return <AnimatedTestimonials testimonials={photos} />;
}
