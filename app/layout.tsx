import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const interVariable = localFont({
  src: "./fonts/InterVariable.ttf",
  variable: "--font-inter-variable",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gaming's Lost Memories Podcast",
  description: "Podcast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${interVariable.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
