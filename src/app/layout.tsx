import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";
import "./globals.css";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Albert_Sans, Castoro } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const font = Titillium_Web({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-heading" });


export const metadata: Metadata = {
  metadataBase: new URL('https://www.justincairns.dev'),
  title: "Justin Cairns - Design Engineer - Frontend Engineer",
  description: "Frontend engineer occasionally writing about Typescript, React, Next.js, Tailwind, and all things Vercel.",
  openGraph: {
    title: 'justincairns.dev - Design Engineer - Frontend Engineer',
    description: 'Design engineer occasionally writing about Typescript, React, Next.js, Tailwind, and all things Vercel.',
    url: 'https://www.justincairns.dev',
    siteName: 'justincairns.dev',
    // images: [
    //   {
    //     url: '/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
};

const castoro = Castoro({ subsets: ["latin"], weight: ["400"], variable: "--font-heading" });
const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["300", "400", "600", "900"], variable: "--font-body" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={cn(castoro.variable, albertSans.variable, "antialiased h-full bg-muted")}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
