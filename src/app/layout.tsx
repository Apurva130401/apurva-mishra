
import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MouseFollower } from "@/components/MouseFollower";
import { ContextMenu } from "@/components/ContextMenu";
import { ToastProvider } from "@/hooks/use-toast";
import { Toaster } from "@/components/Toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
});

const supreme = localFont({
  src: "./fonts/Supreme-Variable.woff2",
  variable: "--font-supreme",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apurva Mishra | AI Automation Expert",
  description: "Senior AI Automation Developer specializing in building rigorous, agentic workflows and premium web experiences.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${clashGrotesk.variable} ${spaceGrotesk.variable} ${supreme.variable} bg-background text-foreground antialiased cursor-none`}>
        <ToastProvider>
          <SmoothScroll />
          <MouseFollower />
          <ContextMenu />
          <Toaster />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
