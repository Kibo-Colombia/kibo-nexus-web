import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mykibo Nexus",
  description: "The complete digital ecosystem to manage your finances, education, and create multimedia content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
