"use client";

import { Container } from "@/components/container";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="dark bg-background text-gray-300 pb-6 ">
      {/* CTA Section */}
      <div className="bg-orange-400 text-white py-10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have a project in mind?</h3>
            <p className="text-sm opacity-90">Let’s build it together.</p>
          </div>

          <div className="flex w-full max-w-md items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="!bg-white/50 text-black !placeholder-black/70 !border-1 !border-orange-400 !focus:border-orange-500 focus:ring-0"
            />
            <Button className="bg-background hover:bg-gray-800 text-white">
              Get a Quote
            </Button>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">Ascent Industries</h3>
          <p className="mt-2 text-sm text-gray-400">
            Precision That Powers Industries since 2011.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-orange-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-orange-400">
                Quality
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-400" /> +91 98765 43210
          </p>
          <p className="text-sm flex items-center gap-2 mt-2">
            <Mail className="h-4 w-4 text-orange-400" /> info@ascent.com
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-orange-400">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-orange-400">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ascent Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
