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
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";

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
    { label: "Our Story", href: "/our-story" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Quality Policy", href: "/quality-policy" },
  ],
};

export default function Navbar() {
  return (
    <NavigationMenu
      viewport={true}
      className="px-12 py-4 bg-muted w-full max-w-none text-foreground @container"
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
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
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
        <Button className="h-10 mr-3">Contact Us</Button>
        <ThemeSwitcher />
      </div>
    </NavigationMenu>
  );
}
