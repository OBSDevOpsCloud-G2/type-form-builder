import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "FormFlow - Build Smarter Forms",
    template: "%s | FormFlow",
  },
  description: "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
  keywords: ["form builder", "survey maker", "quiz maker", "conditional logic forms", "nextjs", "react"],
  authors: [{ name: "FormFlow Team" }],
  creator: "FormFlow Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "FormFlow - Build Smarter Forms",
    description: "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
    siteName: "FormFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormFlow - Build Smarter Forms",
    description: "Create conversational forms with conditional logic, share them in minutes, and track responses with real-time analytics.",
    creator: "@formflow",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
