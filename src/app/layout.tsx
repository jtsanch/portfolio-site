import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "JT Sanchez — Backend & Platform Engineer",
    template: "%s | JT Sanchez",
  },
  description:
    "Senior software engineer specializing in backend systems, platform engineering, and AI-assisted development workflows.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jtsanchez.dev",
    siteName: "JT Sanchez Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
