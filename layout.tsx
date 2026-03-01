import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RB Web Developments | Professional Web Design & Development",
  description: "RB Web Developments - Professional web design and development services. We create beautiful, fast, and user-friendly websites that convert visitors into loyal customers.",
  keywords: ["web development", "web design", "custom website", "responsive design", "SEO", "e-commerce", "RB Web Developments"],
  authors: [{ name: "RB Web Developments" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "RB Web Developments",
    description: "Professional web design and development services for modern businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
