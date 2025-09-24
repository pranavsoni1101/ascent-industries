"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
<section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
  {/* Background Video (or fallback image) */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-75"
  >
    <source src="/contact_vid.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <Container className="relative z-10 text-center">
    <h1
      className="scroll-m-20 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl  
        font-bold tracking-tight text-white"
    >
      Let’s Build Something Together
    </h1>
    <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
      Reach out to us for partnerships, projects, or just a conversation.
    </p>
    <Button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3">
      Get in Touch
    </Button>
  </Container>
</section>


      {/* Contact Info + Form */}
<section className="py-20 bg-muted/20">
  <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    {/* Info */}
    <div className="space-y-6 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="flex items-center gap-3 mb-4">
          <Phone className="h-6 w-6 text-orange-500" />
          <p className="text-foreground/80">+91 98765 43210</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="h-6 w-6 text-orange-500" />
          <p className="text-foreground/80">info@ascent.com</p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-orange-500" />
          <p className="text-foreground/80">
            123 Industrial Area, New Delhi, India
          </p>
        </div>
      </div>

      {/* Map anchored to bottom */}
      <div className="rounded-xl overflow-hidden shadow-md mt-6 md:mt-auto">
        <iframe
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="250"
          className="h-full w-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Form */}
    <div className="bg-background p-8 rounded-xl shadow-lg border border-orange-200 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
      <form className="space-y-5 flex-1 flex flex-col">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Input type="text" placeholder="Subject" />
        <Textarea placeholder="Your Message" rows={5} required className="flex-1" />
        <Button
          type="submit"
          className="w-full bg-orange-400 hover:bg-orange-500 text-white mt-auto"
        >
          Send Message
        </Button>
      </form>
    </div>
  </Container>
</section>


    </>
  );
}
