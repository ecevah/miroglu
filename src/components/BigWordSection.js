"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function BigWordSection() {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.25,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent py-30"
    >
      {/* Background image inside layout max width */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Image
          src="/images/Mercedes-with-Text.png"
          alt="Miroğlu Logistics - Mercedes Truck"
          width={2560}
          height={1440}
          sizes="(min-width: 1280px) 1152px, 100vw"
          className={`block w-full h-auto object-contain ${
            isIntersecting ? "animate-zoom-in-like-delayed" : "opacity-0"
          }`}
          priority
        />
        {/* Plane overlay aligned to the same container width */}
        <Image
          src="/images/Plane.png"
          alt="Plane fly-through"
          width={520}
          height={300}
          className={`pointer-events-none select-none absolute top-[67%] left-0 -translate-y-[20%] w-[36vw] max-w-[520px] min-w-[240px] h-auto object-contain ${
            isIntersecting ? "animate-plane-sweep" : "opacity-0"
          }`}
        />
        {/* Car overlay - starts after plane animation */}
        <Image
          src="/images/Race-Car.png"
          alt="Race car drive-through"
          width={480}
          height={300}
          className={`pointer-events-none select-none absolute -bottom-[30%] right-0 w-[32vw] max-w-[480px] min-w-[200px] h-auto object-contain ${
            isIntersecting ? "animate-car-sweep" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
