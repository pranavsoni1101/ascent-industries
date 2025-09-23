"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Users,
  Handshake,
  BookOpen,
  FileText,
} from "lucide-react";

const QualityPolicy = () => {
  const pillars = [
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Employee Involvement",
      desc: "Fostering a culture of accountability and collaboration for success.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-orange-500" />,
      title: "Respect & Teamwork",
      desc: "Building stronger manufacturing communities through respect and cooperation.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-orange-500" />,
      title: "Safe Work Practices",
      desc: "Ensuring a secure, hazard-free environment for our team and partners.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      title: "Continuous Learning",
      desc: "Driving growth through ongoing learning and empowering our workforce to excel.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/quality_vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay for extra readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content inside Container */}
        <Container className="relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="scroll-m-20 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl  
                font-bold tracking-tight text-white"
            >
              Quality Policy
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 italic">
              Delivering zero-defect products through uncompromising quality
              standards and rigorous inspection
            </p>
            <Button className="mt-10 mx-auto bg-orange-400 hover:bg-orange-500 text-white inline-flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-muted/30">
        <Container className="text-center mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Uncompromising Commitment to Quality
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              At Ascent Industries, our promise of quality goes beyond
              compliance—it’s a culture. We strive to meet customer-specific
              requirements while delivering the best value for investment,
              on-time delivery, and reliable service. This commitment is driven
              by continuous improvement in technology, processes, and employee
              involvement at every stage of production.
            </p>
          </div>
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-background shadow-md rounded-xl p-6 text-center border hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default QualityPolicy;
