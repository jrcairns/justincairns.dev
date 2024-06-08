import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.justincairns.dev'),
  title: "Justin Cairns - Frontend Software Engineer",
  description: "Frontend engineer occasionally writing about Typescript, React, Next.js, Tailwind, and all things Vercel.",
  openGraph: {
    title: 'justincairns.dev - Frontend Software Engineer',
    description: 'Frontend engineer occasionally writing about Typescript, React, Next.js, Tailwind, and all things Vercel.',
    url: 'https://www.justincairns.dev',
    siteName: 'justincairns.dev',
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={cn(inter.className, "h-full shadow-inner [--gradient-position:ellipse_at_top] sm:[--gradient-position:ellipse_at_center] bg-[radial-gradient(var(--gradient-position),_var(--tw-gradient-stops))] from-[#18181A] from-[15%] to-background text-sm antialiased flex sm:items-center pt-6 sm:pt-0")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
