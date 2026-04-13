import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
