"use client";

import { Container } from "@/components/container";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark bg-background text-gray-300 pt-12 pb-6 mt-16">
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
