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

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 mb-4">
                <Phone className="h-6 w-6 text-orange-500 mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919893217773"
                    className="text-foreground/80 hover:text-orange-500 transition"
                  >
                    +91 98932 17773
                  </a>
                  <a
                    href="tel:+917489906300"
                    className="text-foreground/80 hover:text-orange-500 transition"
                  >
                    +91 74899 06300
                  </a>
                  <a
                    href="tel:+917292400821"
                    className="text-foreground/80 hover:text-orange-500 transition"
                  >
                    +91 72924 00821
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-orange-500" />
                <a
                  href="mailto:sanjay.verma@ascentindustries.in"
                  className="text-foreground/80 hover:text-orange-500 transition"
                >
                  sanjay.verma@ascentindustries.in
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-orange-500" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ascent+Industries+Plot+No+2+Sector+3+Pithampur+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-orange-500 transition"
                >
                  Ascent Industries, Plot No. 2, Sector 3, Pithampur, Madhya Pradesh 454774
                </a>
              </div>

            </div>


            {/* Map anchored to bottom */}
            <div className="rounded-xl overflow-hidden shadow-md mt-6 md:mt-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5873046640168!2d75.5759623812074!3d22.6318813264616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396253d69b2cfb77%3A0x1e9a7d914cb84659!2sAscent%20Industries!5e0!3m2!1sen!2sin!4v1765797482916!5m2!1sen!2sin"
                className="w-full h-[250px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
