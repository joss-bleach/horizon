import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon | Spend, Send and Manage",
  description:
    "Use your Horizon account to spend, send, and manage your money. And so much more. Discover the details here.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.variable} ${GeistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
