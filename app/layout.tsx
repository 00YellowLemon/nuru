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
  title: "Nuru Portfolio",
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
        <nav className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center" aria-label="Nuru home">
            <Image
              src="/images/Nuru.PNG"
              alt="N logo"
              width={40}
              height={40}
              className="mr-3 rounded-sm"
            />
            <span
              className="text-3xl font-extrabold bg-clip-text text-transparent tracking-tight"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--md-sys-color-primary), var(--md-sys-color-primary-container))',
              }}
            >
              uru
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/process">Process</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
