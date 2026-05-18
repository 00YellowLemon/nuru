import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { AiAssistant } from "@/components/AiAssistant";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nuruworks.com"),
  title: {
    default: "Nuru Works | Custom AI Agents & Automation for Kenyan SMEs",
    template: "%s | Nuru Works",
  },
  description: "Boost your business efficiency with custom AI agents and workflow automation. Nuru Works designs and builds tailormade AI solutions for Kenyan SMEs.",
  keywords: [
    "AI agents", 
    "business automation", 
    "Kenyan SMEs", 
    "Nuru Works", 
    "workflow automation", 
    "customer service chatbots", 
    "sourcing agents", 
    "inventory automation", 
    "Kenya AI",
    "African tech startups"
  ],
  authors: [{ name: "Nuru Works Team", url: "https://nuruworks.com" }],
  creator: "Nuru Works",
  publisher: "Nuru Works",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuruworks.com",
    siteName: "Nuru Works",
    title: "Nuru Works | Custom AI Agents & Automation for Kenyan SMEs",
    description: "Boost your business efficiency with custom AI agents and workflow automation. Nuru Works designs and builds tailormade AI solutions for Kenyan SMEs.",
    images: [
      {
        url: "/images/hero-ai-tech.jpg",
        width: 1200,
        height: 630,
        alt: "Nuru Works - Custom AI Agents for SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuru Works | Custom AI Agents & Automation for Kenyan SMEs",
    description: "Boost your business efficiency with custom AI agents and workflow automation. Nuru Works designs and builds tailormade AI solutions for Kenyan SMEs.",
    images: ["/images/hero-ai-tech.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nuru Works",
  "url": "https://nuruworks.com",
  "logo": "https://nuruworks.com/images/Nuru.PNG",
  "sameAs": [
    "https://github.com/00YellowLemon/nuru"
  ],
  "description": "Nuru Works designs and builds custom AI agents that streamline workflows, eliminate repetitive tasks, and unlock measurable growth for Kenyan SMEs.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Nairobi"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <AiAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}

