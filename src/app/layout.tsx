import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MouseFollower } from "@/components/MouseFollower";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
});

export const metadata: Metadata = {
  title: "Apurva Mishra | AI Automation Expert",
  description: "Senior AI Automation Developer specializing in building rigorous, agentic workflows and premium web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${clashGrotesk.variable} bg-background text-foreground antialiased cursor-none`}>
        <SmoothScroll />
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
