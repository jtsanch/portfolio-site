import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Travis Sanchez — Backend & Platform Engineer",
    template: "%s | Travis Sanchez",
  },
  description: `Senior software engineer specializing in backend systems and platform 
          engineering with a focus on reliability simplicity, and developer experience`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "TBD",
    siteName: "Travis Sanchez Portfolio",
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
