import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mykibo Nexus",
  description: "The complete digital ecosystem to manage your finances, education, and create multimedia content. Building hope, one dream at a time.",
  keywords: ["Mykibo", "Self-development", "Personal Finance", "Education", "Content Creation", "Digital Campus"],
  authors: [{ name: "Mykibo" }],
  openGraph: {
    title: "Mykibo Nexus",
    description: "The complete digital ecosystem to manage your finances, education, and create multimedia content.",
    type: "website",
    locale: "en_US",
    siteName: "Mykibo Nexus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
