import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "../fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeistMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GeistMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SaeTurtle - Family Operating System",
  description: "A calm, premium platform for nursery planning, routines, recommendations, and caregiver coordination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
