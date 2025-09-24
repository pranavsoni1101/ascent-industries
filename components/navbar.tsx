"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { MessageCircle, Menu, X } from "lucide-react";

// Centralized nav config
const navLinks = {
  products: [
    { label: "CNC Machined Items", href: "/products/cnc-machined-items" },
    {
      label: "Sheet Metal Components",
      href: "/products/sheet-metal-components",
    },
    { label: "Special Parts", href: "/products/special-parts" },
    {
      label: "Laser and CNC Turret Punched Parts",
      href: "/products/laser-cnc-turret-punched-parts",
    },
  ],
  about: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Infrastructure", href: "/about/infrastructure" },
    { label: "Quality Policy", href: "/about/quality-policy" },
  ],
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="stick top-0 z-50">
      <NavigationMenu
        // viewport={true}
        className="px-12 hidden md:flex py-4 bg-muted w-full max-w-none text-foreground @container border-b-2"
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ascent Industries Logo"
              width={200}
              height={50}
            />
          </Link>
        </div>

        {/* Main Nav */}
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Products Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-2 p-2">
                {navLinks.products.map(({ label, href }) => (
                  <li key={href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="block px-2 py-1 rounded-md hover:bg-accent"
                      >
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-2 p-2">
                {navLinks.about.map(({ label, href }) => (
                  <li key={href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="block px-2 py-1 rounded-md hover:bg-accent"
                      >
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* CTA + Theme Toggle */}
        <div className="flex items-center space-x-3 h-full">
          <Button className="h-10 mr-3 bg-orange-400 hover:bg-orange-500 text-white">
            <MessageCircle className="h-5 w-5 inline-block" />
            Talk to Us
          </Button>
          <ThemeSwitcher />
        </div>
      </NavigationMenu>

      {/* {isMobileMenuOpen && (
          <div className="px-6 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/showcase"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )} */}
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden bg-muted border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              alt="Ascent Industries Logo"
              width={150}
              height={40}
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="px-6 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 font-medium hover:text-orange-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Accordion for Products & About */}
            <Accordion type="single" collapsible className="w-full">
              {/* Products */}
              <AccordionItem value="products">
                <AccordionTrigger className="text-foreground font-medium">
                  Products
                </AccordionTrigger>
                <AccordionContent className="pl-4 space-y-2">
                  {navLinks.products.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block text-sm hover:text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* About */}
              <AccordionItem value="about">
                <AccordionTrigger className="text-foreground font-medium">
                  About Us
                </AccordionTrigger>
                <AccordionContent className="pl-4 space-y-2">
                  {navLinks.about.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block text-sm hover:text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/contact"
              className="block py-2 font-medium hover:text-orange-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
