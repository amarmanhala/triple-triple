import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amarpreet.xyz'),
  title: "Amarpreet Singh – Portfolio",
  description: "Full Stack Developer focused on building fast, scalable, and user-friendly digital products. Experienced in leading projects from concept to deployment across web and mobile platforms.",
  keywords: [
    "Amarpreet Singh",
    "Frontend Developer Toronto",
    "Backend Developer Canada", 
    "React Developer Toronto",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "iOS Developer Toronto",
    "Swift Developer",
    "SwiftUI Developer",
    "UI/UX Designer",
    "Figma Designer",
    "Full Stack Developer",
    "Software Engineer Toronto",
    "Remote Frontend Developer",
    "React Redux Developer",
    "AWS Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Spring Boot Developer",
    "Java Developer",
    "Responsive Web Design",
    "Accessibility Developer",
    "Security Developer",
    "App Store Developer",
    "Xcode Developer",
    "Toronto Software Developer",
    "Ontario Developer",
    "Canada Developer",
    "Remote Work Developer",
    "HTML CSS Developer",
    "Apple Ecosystem Developer"
  ].join(", "),
  authors: [{ name: "Amarpreet Singh" }],
  creator: "Amarpreet Singh",
  publisher: "Amarpreet Singh",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://amarpreet.xyz/",
    siteName: "Amarpreet Singh – Portfolio",
    title: "Amarpreet Singh – Portfolio",
    description: "Full Stack Developer focused on building fast, scalable, and user-friendly digital products. Experienced in leading projects from concept to deployment across web and mobile platforms.",
    images: [
      {
        url: "https://amarpreet.xyz/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Amarpreet Singh Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarpreet Singh – Portfolio",
    description: "Full Stack Developer focused on building fast, scalable, and user-friendly digital products. Experienced in leading projects from concept to deployment across web and mobile platforms.",
    creator: "@amarsinghca",
    images: ["https://amarpreet.xyz/portfolio.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://amarpreet.xyz",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6532;-79.3832",
    "ICBM": "43.6532, -79.3832",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
