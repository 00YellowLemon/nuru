import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuru Works - AI Portfolio",
  description: "AI-powered solutions and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-between items-center p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
          <div className="flex space-x-6 items-center">
            <Link 
              href="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/portfolio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="/process"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link 
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}