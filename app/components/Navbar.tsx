"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="flex items-end group" aria-label="Nuru Works home">
          <Image
            src="/images/Nuru.PNG"
            alt="Nuru logo"
            width={36}
            height={36}
            className="rounded-sm transition-transform group-hover:scale-105"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-primary tracking-tight">
              uru
            </span>
            <span className="text-3xl font-semibold text-muted-foreground tracking-tight">
              works
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetHeader className="px-6 py-8 border-b">
                <Link href="/" className="flex items-end group" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/Nuru.PNG"
                    alt="Nuru logo"
                    width={32}
                    height={32}
                    className="rounded-sm transition-transform group-hover:scale-105"
                  />
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary tracking-tight">
                      uru
                    </span>
                    <span className="text-2xl font-semibold text-muted-foreground tracking-tight">
                      works
                    </span>
                  </div>
                </Link>
              </SheetHeader>
              <div className="flex flex-col px-6 py-8 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
