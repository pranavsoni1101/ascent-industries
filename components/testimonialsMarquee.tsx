"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I just wanted to take a moment and express how impressed we are with the quality of the parts we received from Ascent Industries. We have worked with many suppliers in the past, but Ascent stands out in terms of quality and exceptional customer service.",
    name: "Deepak Mathur",
    role: "Industrial Manufacturing",
  },
  {
    quote:
      "I am thrilled with the quality of the products from Ascent Industries. The product manager was equally impressed and gave great feedback on how everything looked. Thank you for delivering top-notch products!",
    name: "Sumit Solanki",
    role: "Industrial Manager",
  },
  {
    quote:
      "We are extremely pleased with the quality of the boxes produced by Ascent Industries. Even though it was a complex project, the end result exceeded our expectations. I highly recommend them for their exceptional work.",
    name: "Dipesh Mehta",
    role: "Product Manager",
  },
  {
    quote:
      "I have been thoroughly satisfied with the work done by your team and would like to continue sending more projects your way. I’m confident that as we continue working together, the partnership will only get stronger.",
    name: "Rajesh Verma",
    role: "QA Engineer",
  },
];

const TestimonialMarquee = () => {
  return (
    <section className="py-20 bg-muted/30">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      {/* Scrolling Testimonials */}
      <Marquee className="overflow">
        <MarqueeContent >
          {testimonials.map((t, idx) => (
            <MarqueeItem key={idx} className="h-full w-full">
                <Card className="border-none max-w-xl w- full h-xl shadow-orange-500">
                    <CardHeader>
                      <Quote className="h-6 w-6 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 italic">“{t.quote}”</p>
                    </CardContent>
                    <CardFooter>
                        <CardTitle className="text-sm font-semibold text-orange-500">
                            {t.name}
                        </CardTitle>
                        <CardDescription className="text-xs text-foreground/60">
                            {t.role}
                        </CardDescription>
                        <Quote className="h-6 w-6 text-orange-500 ml-auto" />
                    </CardFooter>
                </Card>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
};

export default TestimonialMarquee;
