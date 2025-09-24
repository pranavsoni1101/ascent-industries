"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const items = [
  {
    title: "CNC Machined Items",
    description:
      "Precision CNC parts manufactured with computer-controlled accuracy and superior quality.",
    link: "/products/cnc-machined-items",
    image:
      "https://images.pexels.com/photos/48799/drill-milling-milling-machine-drilling-48799.jpeg",
  },
  {
    title: "Sheet Metal Components",
    description:
      "Flat sheet metals shaped into high-performance components for multiple industries.",
    link: "/products/sheet-metal-components",
    image:
      "https://images.pexels.com/photos/29988981/pexels-photo-29988981.jpeg",
  },
  {
    title: "Special Parts",
    description:
      "Custom-designed components built with advanced manufacturing techniques.",
    link: "/products/special-parts",
    image: "https://images.pexels.com/photos/3520696/pexels-photo-3520696.jpeg",
  },
  {
    title: "Agricultural Components",
    description:
      "High-quality, durable components designed specifically for the agriculture sector.",
    link: "/products/special-parts",
    image:
      "https://images.pexels.com/photos/28833312/pexels-photo-28833312.jpeg",
  },
  {
    title: "Laser & CNC Turret Punched Parts",
    description:
      "Cutting-edge precision punching for highly accurate and customizable parts.",
    link: "/products/laser-cnc-turret-punched-parts",
    image: "https://images.pexels.com/photos/7254413/pexels-photo-7254413.jpeg",
  },
];

const ServicesCarousel = () => {
  return (
    // <div className="max-w-6xl mx-auto px-6 text-center">

    <Carousel
      className="text-center"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselContent className="pb-6">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <CardHeader className="p-4">
                <CardTitle className="text-lg text-orange-500">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70 mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>

              {/* Footer (optional CTA) */}
              <CardFooter className="px-4 pb-4 mt-auto">
                <Link href={item.link} className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full mx-auto inline-flex items-center hover:bg-orange-50 text-orange-500 hover:text-orange-500 border-orange-500"
                  >
                    Learn More
                    <ArrowRight className=" h-5 w-5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:bg-orange-50 text-orange-500 hover:text-orange-500 "/>
      <CarouselNext className="hover:bg-orange-50 text-orange-500 hover:text-orange-500 "/>
    </Carousel>
    // </div>
  );
};

export default ServicesCarousel;
