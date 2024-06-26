import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/navigation/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precision Point",
  description:
    "Recruiting company handling individual and corporate hiring needs.",
  icons: {
    icon: "/favicon.png",
    apple: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#191919" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#191919" />
      </head>
      <body className={`${inter.className} bg-gray-1`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
